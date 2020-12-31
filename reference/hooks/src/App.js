import UseStateBasics from "./UseStateBasics";
import UseStateStarRating from "./UseStateStarRating";

import UseEffectBasics from "./UseEffectBasics";
import UseEffectFetch from "./UseEffectFetch";

import UseReducerBasics from "./UseReducerBasics";
import UseReducerToggle from "./UseReducerToggle";

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

			<hr />
			<UseReducerBasics />

			<hr />
			<UseReducerToggle />
		</div>
	);
}

export default App;
