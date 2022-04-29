import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Links from "./components/Links";
import NavLinks from "./components/NavLinks";
import Login from "./pages/Login";

function App() {
	return (
		<BrowserRouter>
			<Links />
			{/* <NavLinks /> */}
			<Switch>
				<Route path="login" component={Login} />
				<Route path="/profile/:id" component={Profile} />
				<Route path="/profile" exact component={Profile} />
				<Route path="/about" component={About} />
				<Route path="/" exact component={Home} />
				<Route component={NotFound} />
			</Switch>
			{/* <Routes> v6
				<Route path="/login" element={<Login />} />
				<Route path="/profile/:id" element={<Profile />} />
				<Route path="/profile" exact element={<Profile />} />
				<Route path="/about" element={<About />} />
				<Route path="/" exact element={<Home />} />
				<Route path="*" element={<NotFound />} />
			</Routes> */}
		</BrowserRouter>
	);
}

export default App;
