const ProductsReducer = (state, {type, payload}) => {
	let newState
	switch (type) {
		case 'ADD_PRODUCTS':
			return {
				...state,
				products: payload,
			}
		case 'ADD_TO_CART':
			newState = {
				...state,
				cart: [
					...state.cart,
					{
						...payload,
						quantity: 1,
					},
				],
			}
			newState = {
				...newState,
				total: newState.cart.reduce((a, c) => a + Number(c.price) * c.quantity, 0),
			}
			return newState
		case 'REMOVE_FROM_CART':
			newState = {
				...state,
				cart: state.cart.filter(c => c.id !== payload.id),
			}
			newState = {
				...newState,
				total: newState.cart.reduce((a, c) => a + Number(c.price) * c.quantity, 0),
			}
			return newState
		case 'UPDATE_QUANTITY':
			newState = {
				...state,
				cart: state.cart.filter((c) =>
					c.id === payload.id ? (c.quantity = payload.quantity) : c.quantity
				),
			}
			newState = {
				...newState,
				total: newState.cart.reduce((a, c) => a + Number(c.price) * c.quantity, 0),
			}
			return newState
		default:
			return state
	}
}
export default ProductsReducer
