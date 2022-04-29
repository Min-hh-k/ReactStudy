import logo from "./logo.svg";
// import "./App.css";
// import "./App.scss";
import styles from "./App.module.css";
import Button from "./components/button";

console.log(styles);
// App: "App_App__xIsHV"
// App-logo-spin: "App_App-logo-spin__s64pR"
// header: "App_header__1UkXX"
// link: "App_link__DpW1a"
// logo: "App_logo__oS3P5"

function App() {
	return (
		<div className={styles.App}>
			<header className={styles["header"]}>
				<img src={logo} className={styles["logo"]} alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<Button>버튼</Button>
			</header>
		</div>
	);
}

export default App;
