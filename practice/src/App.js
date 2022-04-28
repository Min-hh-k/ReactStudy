import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Links from "./components/Links";
import NavLinks from "./components/NavLinks";

function App() {
	return (
		<BrowserRouter>
			<Links />
			<NavLinks />
			<Routes>
				<Route path="/profile/:id" element={<Profile />} />
				<Route path="/profile" exact element={<Profile />} />
				<Route path="/about" element={<About />} />
				<Route path="/" exact element={<Home />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
