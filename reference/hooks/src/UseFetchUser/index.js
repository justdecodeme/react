import { useFetch } from "./useFetch";

export default function UseFetchUser({ login }) {
	const { loading, data, error } = useFetch(
		`https://jsonplaceholder.typicode.com/users`
	);

	if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

	// return <pre>{JSON.stringify(data, null, 2)}</pre>;

	return (
		<div>
			<h1>
				useFetch | Loading {">"} Data {">"} Error
			</h1>
			{loading ? (
				<p>loading...</p>
			) : (
				<ul>
					{data.map((user, i) => (
						<li key={user.id}>{user.name}</li>
					))}
				</ul>
			)}
		</div>
	);
}
