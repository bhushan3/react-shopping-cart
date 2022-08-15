import { useEffect, useReducer } from 'react'
import Products from './components/Products'
import Cart from './components/Cart'
import ProductsReducer from './context/ProductsReducer'

function App() {
	const [state, dispatch] = useReducer(ProductsReducer, {
		products: [],
		cart: [],
		total: 0,
	})

	const fetchProducts = async () => {
		const response = await fetch(`https://dummyjson.com/products`)
		const data = await response.json()
		dispatch({
			type: 'ADD_PRODUCTS',
			payload: data.products,
		})
	}

	useEffect(() => {
		fetchProducts()
	}, [dispatch])

	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: '3fr 1fr',
				gap: '2em',
				maxWidth: '1400px',
				margin: '0 auto',
				padding: '2em',
			}}>
			<Products state={state} dispatch={dispatch} />
			<Cart state={state} dispatch={dispatch} />
		</div>
	)
}

export default App
