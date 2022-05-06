import { useState } from "react";

// export default function A() {
// 	const [value, setValue] = useState("아직안바뀜");
// 	return (
// 		<div>
// 			<B value={value} />
// 			<button onClick={click}>E 의 값 바꾸기</button>
// 		</div>
// 	);
// 	function click() {
// 		setValue("E 값을 변경");
// 	}
// }

// function B({ value }) {
// 	return (
// 		<div>
// 			<p>B 구간</p>
// 			<C value={value} />
// 		</div>
// 	);
// }
// function C({ value }) {
// 	return (
// 		<div>
// 			<p>C 구간</p>
// 			<D value={value} />
// 		</div>
// 	);
// }
// function D({ value }) {
// 	return (
// 		<div>
// 			<p>D 구간</p>
// 			<E value={value} />
// 		</div>
// 	);
// }
// function E({ value }) {
// 	return (
// 		<div>
// 			<p>E 구간</p>
// 			<h3>{value}</h3>
// 		</div>
// 	);
// }

export default function A() {
	const [value, setValue] = useState("아직 안바뀜");
	return (
		<div>
			<p>{value}</p>
			<B setValue={setValue} />
		</div>
	);
}

function B({ setValue }) {
	return (
		<div>
			<p>B 구간</p>
			<C setValue={setValue} />
		</div>
	);
}

function C({ setValue }) {
	return (
		<div>
			<p>C 구간</p>
			<D setValue={setValue} />
		</div>
	);
}

function D({ setValue }) {
	return (
		<div>
			<p>D 구간</p>
			<E setValue={setValue} />
		</div>
	);
}

function E({ setValue }) {
	return (
		<div>
			<p>E 구간</p>
			<button onClick={click}>click</button>
		</div>
	);
	function click() {
		setValue("A 값을 변경");
	}
}
