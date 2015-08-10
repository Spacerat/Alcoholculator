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
					<label className="col-xs-4" htmlFor="drinkCount">Number of bottles</label>
					<div className="col-xs-8">
					<input required className="form-control" type="number" defaultValue="1" step="1" min="1" id="drinkCount" name="count" pattern="\d+(\.\d+)?"/>
					</div>
				</div>
				<div className="form-group">
					<label className="col-xs-4" htmlFor="drinkSize">Size of bottles</label>
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
					<label className="col-xs-4"  htmlFor="drinkPercentage">Percentage ABV</label>
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
							<span className="input-group-addon">&pound;</span>
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

// <div className="col-xs-4">
// 						<select id="drinkUnit" className="selectpicker form-control">
// 							<option>pints</option>
// 							<option>ml</option>
// 						</select>
// 					</div>

// Counter.propTypes = {
//   increment: PropTypes.func.isRequired,
//   incrementIfOdd: PropTypes.func.isRequired,
//   incrementAsync: PropTypes.func.isRequired,
//   decrement: PropTypes.func.isRequired,
//   counter: PropTypes.number.isRequired
// };

		// Clicked: {counter} times
		// {' '}
		// <button onClick={increment}>+</button>
		// {' '}
		// <button onClick={decrement}>-</button>
		// {' '}
		// <button onClick={incrementIfOdd}>Increment if odd</button>
		// {' '}
		// <button onClick={() => incrementAsync()}>Increment async</button>

export default BeerForm;