import ParticlesBg from "particles-bg";
import "./Header.css";

const Header = () => {
    return (
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>
						Hi, my name is <br /><em>Rizvan</em>
					</strong>
					<br />a frontend developer
				</h1>
				<div className="header__text">
					<p>With passion for learning and coding.</p>
				</div>
			</div>
			<ParticlesBg  color="#700700" num={200} type="cobweb" 
				bg={{ 
					position: "absolute",
					zIndex: 0,
					width: 5000
				}} 
			/>
		</header>
	);
}

export default Header;