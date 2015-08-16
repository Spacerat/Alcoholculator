'use strict';

import { PIN_ITEM, DELETE_ITEM } from '../constants/ActionTypes';

const initialState = [{
	size: 100,
	unit: 'pints',
	id: 1,
	alcoholUnits: 3,
	count: 4,
	percentage: 6,
	price: 2,
	ml: 5
}];

function volume_to_ml(volume, unit) {
	switch (unit) {
	case 'ml':
		return volume;
	case 'pints':
		return volume * 568.261485;
	default:
		throw 'Unrecognised unit ' + unit;
	}
}

let lastid = 1;

export default function beers(state = initialState, action = {}) {
	switch (action.type) {
	case PIN_ITEM:
		let beer = action.beer;
		beer.ml = volume_to_ml(beer.size, beer.unit);
		beer.alcoholUnits = (beer.ml/10.0) * beer.count * (beer.percentage/100.0);
		beer.id = lastid;
		lastid += 1;
		return [beer, ...state];
	case DELETE_ITEM:
		return state.filter(beer => beer.id !== action.id);
	default:
		return state;
	}
}