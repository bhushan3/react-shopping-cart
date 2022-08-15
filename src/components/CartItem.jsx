function CartItem({ prod, changeQuantity }) {
	const { title, thumbnail, price } = prod

	return (
		<div
			style={{
				display: 'grid',
				alignItems: 'center',
				gridTemplateColumns: '1fr 2fr 1fr',
				gridColumnGap: '0.5em',
				marginBottom: '1em',
				fontSize: '0.875em',
			}}>
			<img
				src={thumbnail}
				alt={title}
				style={{
					aspectRatio: '1 / 1',
					borderRadius: '0.5em',
					border: '0.125em solid #F8F8F9',
				}}
			/>
			<div
				style={{
					fontWeight: 'bold',
					whiteSpace: 'nowrap',
					overflow: 'hidden',
					textOverflow: 'ellipsis',
				}}>
				<div
					style={{
						fontWeight: 'bold',
						lineHeight: 1.25,
					}}>
					{title}
				</div>
				<div
					style={{
						lineHeight: 1.25,
					}}>
					${price}
				</div>
			</div>

			<div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
				<button onClick={() => changeQuantity(prod.id, prod.quantity - 1)}>-</button>
				<span>{prod.quantity}</span>
				<button onClick={() => changeQuantity(prod.id, prod.quantity + 1)}>+</button>
			</div>
		</div>
	)
}

export default CartItem
