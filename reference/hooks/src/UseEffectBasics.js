import { useState, useEffect } from "react";

export default function UseEffectBasics() {
	const [a, setA] = useState(0);
	const [b, setB] = useState(0);

	/* Runs after each render and update */
	useEffect(() => {
		document.querySelector("#count1").innerHTML = `
      Runs after each render and update: <br/>
      a: ${a} | b: ${b}
    `;
	});

	/* Runs only on first render */
	useEffect(() => {
		document.querySelector("#count2").innerHTML = `
      Runs only on first render: <br/>
      a: ${a} | b: ${b}`;
	}, []);

	/* Runs after 'a' state changes */
	useEffect(() => {
		document.querySelector("#count3").innerHTML = `
      Runs after 'a' state changes: <br/>
      a: ${a} | b: ${b}`;
	}, [a]);

	/* Runs after 'b' state changes */
	useEffect(() => {
		document.querySelector("#count4").innerHTML = `
      Runs after 'b' state changes: <br/>
      a: ${a} | b: ${b}`;
	}, [b]);

	return (
		<div>
			<h2>useEffect</h2>

			<p id="count1"></p>
			<p id="count2"></p>
			<p id="count3"></p>
			<p id="count4"></p>

			<button onClick={() => setA(a + 1)}>Increment A</button>
			<button onClick={() => setB(b + 1)}>Increment B</button>
		</div>
	);
}
