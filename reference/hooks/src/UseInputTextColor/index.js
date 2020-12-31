import { useInput } from "./useInput";

export default function UseInputCustomHook() {
	const [textProps, resetText] = useInput("");
	const [colorProps, resetColor] = useInput("#000");

	return (
		<div>
			<h1>useInput Text Color</h1>

			<input type="text" {...textProps} />
			<input type="color" {...colorProps} />

			<button
				onClick={() => {
					console.log(
						`Text typed: ${textProps.value} | Selected color: ${colorProps.value}`
					);
					resetText();
					resetColor();
				}}
			>
				Show Color
			</button>
		</div>
	);
}
