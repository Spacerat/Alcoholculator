import React, { Component, PropTypes } from 'react';

class BeerForm extends Component {
	handleSubmit(e) {
		e.preventDefault();
		const { actions } = this.props;
		const names = ['count', 'size', 'unit', 'percentage', 'price'];
		const inputs = names.map(name=>'input[name='+name+']');
		inputs[2] = inputs[2]+':checked';
		const elements = inputs.map(input=>$(input, '#drinkForm'));
		const values = elements.map(elm => elm.val());

		actions.pinBeer(...values);
	}
	handlePercentageChange() {
		$('#drinkPercentageDisplay').text($('#drinkPercentage').val()+'%');
	}
 	render() {
		return (
			<form className="form-horizontal" id="drinkForm" onSubmit={this.handleSubmit.bind(this)}>
				<div className="form-group">
					<label className="col-xs-4" htmlFor="drinkCount">Number</label>
					<div className="col-xs-8">
					<input required className="form-control" type="number" defaultValue="1" step="1" min="1" id="drinkCount" name="count" pattern="\d+(\.\d+)?"/>
					</div>
				</div>
				<div className="form-group">
					<label className="col-xs-4" htmlFor="drinkSize">Volume</label>
					<div className="col-xs-4">
						<input required className="form-control" id="drinkSize" name="size" type="number" defaultValue="500" pattern="\d+(\.\d+)?"/>
					</div>
					<div className="col-xs-4">
						<label className="radio-inline">
							<input required type="radio" name="unit" id="pintsUnit" value="ml" defaultChecked="checked" />Millilitres 
						</label>
						<label className="radio-inline">
							<input required type="radio" name="unit" id="mlUnit" value="pints" />Pints
						</label>
					</div>
					
				</div>

				<div className="form-group">
					<label className="col-xs-4"  htmlFor="drinkPercentage">%ABV</label>
					<div className="col-xs-8">
						<div className="input-group">
							<input required id="drinkPercentage" name="percentage" className="form-control" type="number" defaultValue="4" min="0" max="100" step="0.1" pattern="\d+(\.\d+)?"  />
							<span className="input-group-addon" >%</span>
						</div>
					</div>
				</div>
				<div className="form-group">
					<label className="col-xs-4" htmlFor="drinkPrice">Price</label>
					<div className="col-xs-8">
						<div className="input-group">
							<span className="input-group-addon">£</span>
							<input required className="form-control" name="price" type="number" defaultValue="2.00" min="0" step="0.01" id="drinkPrice" pattern="\d\d?\d?(\.\d)?" />
						</div>
					</div>
				</div>
				<button className="btn btn-default" type="submit">Add</button>
			</form>
		);
  	}
}

BeerForm.propTypes = {
	actions: PropTypes.object.isRequired
}

export default BeerForm;