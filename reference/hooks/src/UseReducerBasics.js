import { useReducer } from "react";

export default function UseReducerBasics() {
	const [number, setNumber] = useReducer(
		(number, newNumber) => number + newNumber,
		0
	);

	return (
		<div>
			<h1>useReducer Basics</h1>

			<p>{`Number: ${number}`}</p>

			<button onClick={() => setNumber(1)}>Increment A</button>
		</div>
	);
}
