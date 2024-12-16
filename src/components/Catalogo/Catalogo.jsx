import React, { useEffect, useState } from "react"
import axios from "axios"

import Loading from "../Loading/Loading.jsx"
import ItemCard from "../ItemCard/ItemCard.jsx"

import "./Catalogo.scss"

function ItemList() {
	const [items, setItems] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const url = "https://fakestoreapi.com/products"

		const fetchData = async () => {
			try {
				const response = await axios.get(url)
				console.log(response.data)
				setItems(response.data)
			} catch (err) {
				setError(err.message)
			} finally {
				setLoading(false)
			}
		}

		fetchData()
	}, [])

	if (loading) return <Loading />

	if (error) return <p style={{ color: "white", fontSize: "2rem" }}>Erro ao carregar dados {error}</p>

	return (
		<div className="catalogo">
			{items.map((item) => (
				<ItemCard image={item.image} title={item.title} price={item.price} category={item.category} />
			))}
		</div>
	)
}

export default ItemList
