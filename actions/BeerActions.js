import { PIN_ITEM, DELETE_ITEM } from '../constants/ActionTypes';

export function pinBeer(count, size, unit, percentage, price) {
	return {
		type: PIN_ITEM,
		beer: {
			count: parseInt(count, 10),
			size: parseFloat(size),
			unit: unit,
			percentage: parseFloat(percentage),
			price: parseFloat(price)
		}
	}
}

export function deleteBeer(id) {
	return {
		type: DELETE_ITEM,
		id: id
	}
}
