import { useReducer } from "react";

export default function UseReducerToggle() {
	const [checked, toggle] = useReducer((checked) => !checked, false);

	return (
		<div>
			<h1>useReducer Toggle</h1>

			<input type="checkbox" value={checked} onChange={toggle} />
			{checked ? "checked" : "not checked"}
		</div>
	);
}
