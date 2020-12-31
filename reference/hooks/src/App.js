import UseStateBasics from "./UseStateBasics";
import UseStateStarRating from "./UseStateStarRating";

import UseEffectBasics from "./UseEffectBasics";
import UseEffectFetch from "./UseEffectFetch";

import UseReducerBasics from "./UseReducerBasics";
import UseReducerToggle from "./UseReducerToggle";
import UseReducerDispatch from "./UseReducerDispatch";

import UseRefBasics from "./UseRefBasics";

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
			<hr />
			<UseReducerDispatch />

			<hr />
			<UseRefBasics />
		</div>
	);
}

export default App;
