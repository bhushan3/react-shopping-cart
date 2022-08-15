import CartItem from './CartItem'

function Cart({ state, dispatch }) {
	const { cart, total } = state

	const changeQuantity = (id, quantity) => {
		dispatch({
			type: 'UPDATE_QUANTITY',
			payload: {
				id,
				quantity,
			},
		})
	}

	return (
		<div
			style={{
				position: 'relative',
			}}>
			<div
				style={{
					position: 'sticky',
					top: '2em',
					width: '100%',
					boxShadow: '0 0.5em 2em rgba(0, 0, 0, 0.1)',
					borderRadius: '0.5em',
					background: '#FFF',
				}}>
				<strong
					style={{
						padding: '1em',
						display: 'block',
						textAlign: 'center',
					}}>
					Cart
				</strong>
				<div
					style={{
						padding: '1em',
						borderTop: '0.125em solid #F8F8F9',
						borderBottom: '0.125em solid #F8F8F9',
					}}>
					{cart.length > 0 ? cart.map(prod => <CartItem key={prod.id} prod={prod} changeQuantity={changeQuantity} />) : <div style={{textAlign:'center', padding: '2em 0', color: '#BBB'}}>NO ITEMS</div>}
				</div>
				<strong
					style={{
						padding: '1em',
						display: 'block',
						textAlign: 'center',
					}}>
					Total: ${total}
				</strong>
			</div>
		</div>
	)
}
export default Cart
