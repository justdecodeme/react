import { useRef } from "react";

export default function UseRefTextColor() {
	const textRef = useRef();
	const colorRef = useRef();

	return (
		<div>
			<h1>useRef Text Color</h1>

			<input type="text" ref={textRef} />
			<input type="color" ref={colorRef} />

			<button
				onClick={() => {
					console.log(
						`Text typed: ${textRef.current.value} | Selected color: ${colorRef.current.value}`
					);
					textRef.current.value = "";
					colorRef.current.value = "#000";
				}}
			>
				Show Color
			</button>
		</div>
	);
}
