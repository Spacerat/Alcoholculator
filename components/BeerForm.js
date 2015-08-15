import React, { Component, PropTypes } from 'react';


class BeerFormItem extends Component {
	focusInput() {
		$(React.findDOMNode(this)).find('input').select();
	}
	render() {
		const {leftText, rightText, name, id, defaultValue, min, max, step, pattern, inputType} = this.props;
		if (leftText) {
			var leftAddon = (
			<span className="input-group-addon">
				<label htmlFor="{id}">{leftText}</label>
			</span>
			);
		}
		if (rightText) {
			var rightAddon = (
			<span className="input-group-addon">
				<label htmlFor="{id}">{rightText}</label>
			</span>
			);
		}
		return (
			<div className="form-group">
				<div className="input-group">
					{leftAddon}
					<input required onFocus={this.focusInput.bind(this)} onMouseUp={(e)=>{e.preventDefault()}} className="form-control" type={inputType} defaultValue={defaultValue} step={step} min={min} max={max} id={id} name={name} pattern={pattern} />
					{rightAddon}
				</div>
			</div>
		)
	}
}

class BeerForm extends Component {
	handleSubmit(e) {
		e.preventDefault();
		const { actions } = this.props;
		const names = ['count', 'size', 'unit', 'percentage', 'price'];
		const inputs = names.map(name=>'input[name='+name+']');
		inputs[2] = inputs[2]+':checked';
		const elements = inputs.map(input=>$(input, '#drinkForm'));
		const values = elements.map(elm => elm.val());
		console.log(inputs, elements, values);
		actions.pinBeer(...values);
	}
	handlePercentageChange() {
		$('#drinkPercentageDisplay').text($('#drinkPercentage').val()+'%');
	}
 	render() {
		return (
			<form id="drinkForm" onSubmit={this.handleSubmit.bind(this)}>
				<BeerFormItem leftText="Number of drinks" rightText="" name="count" id="drinkCount" defaultValue="1" min="1" max="100" step="1" pattern="\d+" inputType="number" />
				<div className="form-group">
					<div className="input-group radios">
						<label className="radio-inline">
							<input required type="radio" name="unit" id="pintsUnit" value="ml" defaultChecked="checked" />Millilitres 
						</label>
						<label className="radio-inline">
							<input required type="radio" name="unit" id="mlUnit" value="pints" />Pints
						</label>
					</div>
				</div>
				<BeerFormItem leftText="Volume of bottle" rightText="" name="size" id="drinkSize" defaultValue="1" min="0" max="100" step="0.05" pattern="\d+(\.\d+)?" inputType="number" />
				<BeerFormItem leftText="Percentage ABV" rightText="%" name="percentage" id="drinkPercentage" defaultValue="4" min="0" max="100" step="0.1" pattern="\d\d?\d?(\.\d+)?" inputType="number" />
				<BeerFormItem leftText="£" rightText="" name="price" id="drinkPrice" defaultValue="2" min="0" max="100" step="0.01" pattern="\d+(\.\d+)?" inputType="number" />
				<button className="btn btn-default" type="submit">Add</button>
			</form>
		);
  	}
}

BeerForm.propTypes = {
	actions: PropTypes.object.isRequired
}


export default BeerForm;