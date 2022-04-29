import { NavLink } from "react-router-dom";

const activeStyle = { color: "green", fontSize: "20px" };

export default function NavLinks() {
	return (
		<ul>
			<li>
				<NavLink to="/" activeStyle={activeStyle}>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink to="/profile">profile</NavLink>
			</li>
			<li>
				<NavLink to="/profile/1">profile1</NavLink>
			</li>
			<li>
				<NavLink to="/about">about</NavLink>
			</li>
			<li>
				<NavLink to="/notfound">not found</NavLink>
			</li>
		</ul>
	);
}
