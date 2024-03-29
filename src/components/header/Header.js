import "./style.css";

const Header = () => {
    return (
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>
						Hi, my name is <em>Maxim</em>
					</strong>
					<br />a frontend developer
				</h1>
				<div className="header__text">
					<p>with passion for learning and creating.</p>
				</div>
				<a href="https://hh.ru/resume/7073f035ff0b574cd40039ed1f52695872526f?hhtmFrom=resume_list" target={"_blank"} className="btn">
					Download CV
				</a>
			</div>
		</header>
	);
}

export default Header;