import { useContext } from "react";
import { UserContext } from ".";

export default function UseContextWithoutCustomHook() {
	const user = useContext(UserContext);

	return (
		<div>
			<h1>useContext without Custom Hook</h1>

			<p>User Name: {user.name}</p>
			<p>User DOB: {user.dob}</p>
		</div>
	);
}
