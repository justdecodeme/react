import UseStateToggle from "./UseStateToggle";
import UseStateStarRating from "./UseStateStarRating";
import UseStateTextColor from "./UseStateTextColor";

import UseEffectBasics from "./UseEffectBasics";
import UseEffectFetch from "./UseEffectFetch";

import UseReducerBasics from "./UseReducerBasics";
import UseReducerToggle from "./UseReducerToggle";
import UseReducerDispatch from "./UseReducerDispatch";

import UseRefTextColor from "./UseRefTextColor";

import UseInputCustomHook from "./useInput/UseInputCustomHook";

function App() {
	return (
		<div className="App">
			<UseStateToggle />
			<hr />
			<UseStateStarRating />
			<hr />
			<UseStateTextColor />

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
			<UseRefTextColor />

			<hr />
			<UseInputCustomHook />
		</div>
	);
}

export default App;
