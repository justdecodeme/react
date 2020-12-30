import UseStateBasics from "./UseStateBasics";
import UseStateStarRating from "./UseStateStarRating";
import UseEffectBasics from "./UseEffectBasics";
import UseEffectFetch from "./UseEffectFetch";

function App() {
	return (
		<div className="App">
			<UseStateBasics />
			<hr />
			<UseStateStarRating />
			<hr />
			<UseEffectBasics />
			<hr />
			<UseEffectFetch />
		</div>
	);
}

export default App;
