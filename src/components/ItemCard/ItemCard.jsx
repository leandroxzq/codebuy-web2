import "./ItemCard.scss"

const ItemCard = ({ image, title, price, category }) => {
	return (
		<div className="card">
			<img src={image} className="card__img" />
			<div className="card__info">
				<div className="card__name">
					<h3>{title}</h3>
					<p>{category}</p>
				</div>
				<p>R$ {price}</p>
				<button className="card__button">
					<i class="fa-solid fa-cart-shopping"></i>
				</button>
			</div>
		</div>
	)
}

export default ItemCard
