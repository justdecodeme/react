import { useReducer } from "react";

const a = 5;
const b = 3;

const initialState = {
	res: null,
	type: null,
};

const reducer = (state, action) => {
	switch (action.type) {
		case "add":
			return {
				res: a + b,
				type: action.type,
			};

		case "sub":
			return {
				res: a - b,
				type: action.type,
			};

		default:
			break;
	}
};

export default function UseReducerDispatch() {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<div>
			<h1>useReducer Dispatch</h1>

			<p>
				{state.type}: {state.res}
			</p>

			<button onClick={() => dispatch({ type: "add" })}>Add</button>
			<button onClick={() => dispatch({ type: "sub" })}>Sub</button>
		</div>
	);
}
