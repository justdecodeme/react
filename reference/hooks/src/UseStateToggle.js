import { useState } from "react";

export default function UseState() {
	/* useState() will return 2 things, initial value and function */
	// const result = useState();
	// console.log(result);

	const [checked, setChecked] = useState(false);

	return (
		<div>
			<h1>useState Toggle</h1>

			<input
				type="checkbox"
				value={checked}
				onChange={() => setChecked((checked) => !checked)}
			/>
			{checked ? "checked" : "not checked"}
			<p>Note: Better way to do the same thing: "UseReducerToggle.js"</p>
		</div>
	);
}
