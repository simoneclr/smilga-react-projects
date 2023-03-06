export const CART_CLEARED = "CART_CLEARED"

export const getCartClearedAction = () => {
	return {
		type: CART_CLEARED
	}
}

export const ITEM_REMOVED = "ITEM_REMOVED"

export const getItemRevoedAction = (id) => {
	return {
		type: ITEM_REMOVED,
		payload: {
			id
		}
	}
}

export const AMOUNT_INCREASED = "AMOUNT_INCREASED"

export const getAmountIncreasedAction = (id) => {
	return {
		type: AMOUNT_INCREASED,
		payload: {
			id
		}
	}
}

export const AMOUNT_DECREASED = "AMOUNT_DECREASED"

export const getAmountDecreasedAction = (id) => {
	return {
		type: AMOUNT_DECREASED,
		payload: {
			id
		}
	}
}

export const REQUEST_STARTED = "REQUEST_STARTED"

export const getRequestStartedAction = () => {
	return {
		type: REQUEST_STARTED
	}
}

export const REQUEST_REJECTED = "REQUEST_REJECTED"

export const getRequestRejectedAction = () => {
	return {
		type: REQUEST_REJECTED
	}
}

export const REQUEST_FULFILLED = "REQUEST_FULFILLED"

export const getRequestFullfilledAction = (data) => {
	return {
		type: REQUEST_FULFILLED,
		payload: {
			data
		}
	}
}
