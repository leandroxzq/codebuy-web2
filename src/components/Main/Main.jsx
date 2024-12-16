import Catalogo from "../Catalogo/Catalogo"

import "./Main.scss"

function Main() {
	return (
		<main className="main">
			<h2 className="main__logo">Lista de Produtos</h2>
			<Catalogo></Catalogo>
		</main>
	)
}

export default Main
