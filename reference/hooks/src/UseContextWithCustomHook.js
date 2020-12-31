import { useUser } from ".";

export default function UseContextWithCustomHook() {
	const user = useUser();

	return (
		<div>
			<h1>useContext with Custom Hook</h1>

			<p>User Name: {user.name}</p>
			<p>User DOB: {user.dob}</p>
		</div>
	);
}
