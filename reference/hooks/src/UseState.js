import { useState } from "react";
import StarRating from "./StarRating";

function UseState() {
	/* useState() will return 2 things, initial value and function */
	// const result = useState();
	// console.log(result);

	const [status, setStatus] = useState("Not Delivered");

	const [checked, setChecked] = useState(false);

	return (
		<div>
			<h2>UseState</h2>
			<p>The package is: {status}</p>
			<button onClick={() => setStatus("Delivered")}>Deliver</button>
			<hr /> {/*******************/}
			<input
				type="checkbox"
				value={checked}
				onChange={() => setChecked((checked) => !checked)}
			/>
			{checked ? "checked" : "not checked"}
			<hr />
			<StarRating totalStars={10} />
		</div>
	);
}

export default UseState;
