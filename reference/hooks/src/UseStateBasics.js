import { useState } from "react";

function UseState() {
	/* useState() will return 2 things, initial value and function */
	// const result = useState();
	// console.log(result);

	const [checked, setChecked] = useState(false);

	return (
		<div>
			<h1>useState Basics</h1>

			<input
				type="checkbox"
				value={checked}
				onChange={() => setChecked((checked) => !checked)}
			/>
			{checked ? "checked" : "not checked"}
		</div>
	);
}

export default UseState;
