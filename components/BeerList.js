import React, { Component, PropTypes } from 'react';

class Beer extends Component {
	handleDelete() {
		const {beer, deleteBeer} = this.props;
		deleteBeer(beer.id);
	}
	render() {
		const {id, count, size, unit, percentage, price, alcoholUnits, ml} = this.props.beer;
		const containerName = (count == 1 ? "container" : "containers");
		const unitName = (unit == "pints" ? "pint" : unit);
		return (
			<div className="list-group-item beer">
				<h4 className="list-group-item-heading">
					<span>Drink {id}</span> -
					<span> &pound;{(price/alcoholUnits).toFixed(2)} per unit</span> -
					<span> &pound;{(price/ml).toFixed(3)} per ml</span> -
					<span> {ml.toFixed(0)} ml total</span>
				</h4>
				<div>{count} x {size} {unitName} {percentage}% ABV {containerName} for &pound;{price}</div>
				<button className="btn btn-sm btn-danger deleteButton" onClick={this.handleDelete.bind(this)}>
					<span className="glyphicon glyphicon-remove"></span>
				</button>
			</div>	
		);
	}
}

class BeerList extends Component {
  render() {
    const { beers, actions } = this.props;
    console.log(actions);
    let beerElements = beers
    	.slice(0)
    	.sort((beer1, beer2) => (beer1.price/beer1.alcoholUnits > beer2.price/beer2.alcoholUnits))
    	.map((beer) => (<Beer beer={beer} deleteBeer={actions.deleteBeer} key={beer.id}/>));

    return (
    	<div>
			<div className="list-group">
			{beerElements}
			</div>
		</div>
    );
  }
}

BeerList.propTypes = {
	beers: PropTypes.array.isRequired
}

export default BeerList;