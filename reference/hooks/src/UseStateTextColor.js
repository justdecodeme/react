import { useState } from "react";

export default function UseStateTextColor() {
	const [text, setText] = useState("");
	const [color, setColor] = useState("#000");

	return (
		<div>
			<h1>useState Text Color</h1>

			<input
				type="text"
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<input
				type="color"
				value={color}
				onChange={(e) => setColor(e.target.value)}
			/>

			<button
				onClick={() => {
					console.log(`Text typed: ${text} | Selected color: ${color}`);
					setText("");
					setColor("#000");
				}}
			>
				Show Color
			</button>
		</div>
	);
}
