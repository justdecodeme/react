import { useState, useEffect } from "react";

export default function UseEffectFetch() {
	const [data, setData] = useState([]);

	/* get users list if list is empty */
	const getUsers = () => {
		data.length === 0 &&
			fetch(`https://jsonplaceholder.typicode.com/users`)
				.then((res) => res.json())
				// .then(res => setData(res)); // shortcut below
				.then(setData);
	};

	/* Runs only on page load */
	useEffect(() => {
		getUsers();
	}, []);

	/* Wrong: This will get users after clearing the list also */
	// useEffect(() => {
	// 	getUsers();
	// });

	console.log(data);
	return (
		<div>
			<h1>useEffect Fetch</h1>

			<ul>
				{data.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>

			{/* clear the list if user list has some data */}
			<button onClick={() => data.length > 0 && setData([])}>
				Clear Users
			</button>
			<button onClick={getUsers}>Get Users</button>
		</div>
	);
}
