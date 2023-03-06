import {
	CART_CLEARED,
	AMOUNT_INCREASED,
	ITEM_REMOVED,
	AMOUNT_DECREASED,
	REQUEST_STARTED,
	REQUEST_REJECTED,
	REQUEST_FULFILLED
} from "./actions"

const reducer = (state, action) => {
	console.log(action.type, JSON.stringify(action.payload) ?? "")

	switch (action.type) {
		case CART_CLEARED:
			return {
				...state,
				items: []
			}
		
		case ITEM_REMOVED:
			return {
				...state,
				items: state.items.filter(item => item.id !== action.payload.id)
			}
		
		case AMOUNT_INCREASED:
			return {
				...state,
				items: state.items.map(item => 
					item.id !== action.payload.id ? item : {
						...item,
						amount: item.amount + 1
					}
				)
			}

		case AMOUNT_DECREASED:
			return {
				...state,
				items: state.items.reduce((accumulator, item) => {
					if (item.id === action.payload.id) {
						if (item.amount > 1) {
							accumulator.push({
								...item,
								amount: item.amount - 1
							})
						}
						
						return accumulator
					} else {
						return [...accumulator, item]
					}
				}, [])
			}

		case REQUEST_STARTED:
			return {
				...state,
				loading: true
			}

		case REQUEST_REJECTED:
			// Handle errors here
			return {
				...state,
				loading: false
			}

		case REQUEST_FULFILLED:
			return {
				...state,
				loading: false,
				items: action.payload.data
			}

		default:
			console.error("No action matching:", action.type)
			return state;
	}

	
}

export default reducer
