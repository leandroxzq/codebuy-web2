import Logo from "../Logo/Logo.jsx"

import "./Footer.scss"

function footer() {
	return (
		<footer className="footer">
			<div className="footer__logo">
				<Logo />
				<p>©</p>
			</div>
			<div className="footer__social">
				<i class="fa-brands fa-instagram"></i>
				<i class="fa-brands fa-x-twitter"></i>
				<i class="fa-brands fa-whatsapp"></i>
			</div>
		</footer>
	)
}

export default footer
