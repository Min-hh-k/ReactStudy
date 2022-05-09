// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Modal from "../components/modal";
import {useState} from "react";

// class Foo extends React.Component {
// 	componentDidMount() {
// 		console.log("componentDidMount", this.props.children);
// 	}
// 	componentWillUnmount() {
// 		console.log("componentWillUnmount");
// 	}
// 	static getDerivedStateFromProps(nextProps, prevProps) {
// 		console.log("Foo getDerivedStateFromProps", nextProps, prevProps);
// 		return {};
// 	}

// 	render() {
// 		console.log("Foo render", this.props.children);
// 		return <p>Foo</p>;
// 	}
// }

// class App extends React.Component {
// 	state = {
// 		count: 0,
// 	};
// 	componentDidMount() {
// 		setInterval(() => {
// 			this.setState({ count: this.state.count + 1 });
// 		}, 1000);
// 	}
// 	render() {
// 		if (this.state.count % 2 === 0) {
// 			return (
// 				<ul>
// 					<Foo key="2">second</Foo>
// 					<Foo key="3">third</Foo>
// 				</ul>
// 			);
// 		}
// 		return (
// 			<ul>
// 				<Foo key="1">first</Foo>
// 				<Foo key="2">second</Foo>
// 				<Foo key="3">third</Foo>
// 			</ul>
// 		);
// 	}
// }
function App() {
	const [visible, setVisible] = useState(false);
	const open = () => {
		setVisible(true);
	};

	const close = () => {
		setVisible(false);
	};
	return (
		<div>
			<button onClick={open}>open</button>
			{visible && (
				<Modal>
					<div
						style={{
							width: "100vw",
							height: "100vh",
							background: "rgba(0, 0, 0, 0.5)",
						}}
						onClick={close}
					>
						Hello
					</div>
				</Modal>
			)}
		</div>
	);
}

export default App;
