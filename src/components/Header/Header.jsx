import Logo from "../Logo/Logo.jsx"

import "./Header.scss"

function Header() {
	return (
		<header className="header">
			<Logo />
			<div className="header__container-icon">
				<i class="fa-solid fa-user"></i>
				<i class="fa-solid fa-cart-shopping"></i>
				<i class="fa-solid fa-bell"></i>
			</div>
		</header>
	)
}

export default Header
