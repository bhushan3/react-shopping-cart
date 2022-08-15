function Products({ state, dispatch }) {
	const { products, cart } = state

	const onClickAddToCart = prod => {
		dispatch({
			type: 'ADD_TO_CART',
			payload: prod,
		})
	}
	const onClickRemoveFromCart = prod => {
		console.log('onClickRemoveFromCart')
		dispatch({
			type: 'REMOVE_FROM_CART',
			payload: prod,
		})
	}

	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: '1fr 1fr 1fr',
				gap: '2em',
			}}>
			{products.map(prod => (
				<div
					key={prod.id}
					style={{
						display: 'flex',
						flexDirection: 'column',
						boxShadow: '0 0.5em 2em rgba(0, 0, 0, 0.1)',
						borderRadius: '0.5em',
						background: '#FFF',
					}}>
					<img
						src={prod.thumbnail}
						alt={prod.title}
						style={{
							display: 'block',
							background: 'red',
							margin: '0 auto',
							maxWidth: '100%',
							objectFit: 'cover',
							aspectRatio: '1',
							borderRadius: '0.5em 0.5em 0 0',
						}}
					/>
					<div
						style={{
							display: 'flex',
							height: '100%',
							flexDirection: 'column',
							padding: '1em',
						}}>
						<div
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								margin: '0 0 1em',
							}}>
							<strong>{prod.title}</strong>
							<span>${prod.price}</span>
						</div>
						<div style={{ marginTop: 'auto' }}>
							{cart.some(p => p.id === prod.id) ? (
								<button
									style={{
										display: 'block',
										width: '100%',
										textAlign: 'center',
										background: '#FFF',
										color: '#000',
										border: '0.125em solid #000',
										borderRadius: '0.5em',
										padding: '0.75em 1.5em',
									}}
									onClick={() => onClickRemoveFromCart(prod)}>
									Remove From Cart
								</button>
							) : (
								<button
									style={{
										display: 'block',
										width: '100%',
										textAlign: 'center',
										background: '#FFF',
										color: '#000',
										border: '0.125em solid #000',
										borderRadius: '0.5em',
										padding: '0.75em 1.5em',
									}}
									onClick={() => onClickAddToCart(prod)}>
									Add To Cart
								</button>
							)}
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default Products
