import { Link } from "react-router-dom";

export default function Links() {
	return (
		<ul>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/profile">profile</Link>
			</li>
			<li>
				<Link to="/profile/1">profile1</Link>
			</li>
			<li>
				<Link to="/about">about</Link>
			</li>
			<li>
				<Link to="/notfound">not found</Link>
			</li>
			<li>
				<Link to="/login">login</Link>
			</li>
		</ul>
	);
}
