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

// export function increment() {
//   return {
//     type: INCREMENT_COUNTER
//   };
// }

// export function decrement() {
//   return {
//     type: DECREMENT_COUNTER
//   };
// }

// export function incrementIfOdd() {
//   return (dispatch, getState) => {
//     const { counter } = getState();

//     if (counter % 2 === 0) {
//       return;
//     }

//     dispatch(increment());
//   };
// }

// export function incrementAsync(delay=1000) {
//   return dispatch => {
//     setTimeout(() => {
//       dispatch(increment());
//     }, delay);
//   };
