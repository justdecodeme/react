import { useRef } from "react";

function UseRefBasics() {
	const colorRef = useRef();

	return (
		<div>
			<h1>useRef Basics</h1>

			<input type="color" ref={colorRef} />
			<button
				onClick={() => console.log(`Selected color: ${colorRef.current.value}`)}
			>
				Show Color
			</button>
		</div>
	);
}

export default UseRefBasics;
