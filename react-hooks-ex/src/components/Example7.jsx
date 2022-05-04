import { useState, useMemo, useCallback } from "react";

function sum(persons) {
	console.log("sum...");
	return persons.map((person) => person.age).reduce((l, r) => l + r, 0);
}

export default function Example7() {
	const [value, setValue] = useState("");
	const [persons] = useState([
		{ name: "Mark", age: 39 },
		{ name: "Ham", age: 28 },
		{ name: "Hee", age: 27 },
	]);

	const count = useMemo(() => {
		return sum(persons);
	}, [persons]);

	const click = useCallback(() => {
		console.log(value);
	}, [value]);

	return (
		<div>
			<input value={value} onChange={change} />
			<p>{count}</p>
			<button onClick={click}>click</button>
		</div>
	);
	function change(e) {
		setValue(e.target.value);
	}
}
