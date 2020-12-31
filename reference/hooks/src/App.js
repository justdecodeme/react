import UseStateToggle from "./UseStateToggle";
import UseStateStarRating from "./UseStateStarRating";
import UseStateTextColor from "./UseStateTextColor";

import UseEffectBasics from "./UseEffectBasics";
import UseEffectFetch from "./UseEffectFetch";

import UseReducerBasics from "./UseReducerBasics";
import UseReducerToggle from "./UseReducerToggle";
import UseReducerDispatch from "./UseReducerDispatch";

import UseRefTextColor from "./UseRefTextColor";

import UseInputTextColor from "./UseInputTextColor";

import UseContextWithoutCustomHook from "./UseContextWithoutCustomHook";
import UseContextWithCustomHook from "./UseContextWithCustomHook";

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
			<UseInputTextColor /> {/* custom hook */}
			<hr />
			<UseContextWithoutCustomHook />
			<hr />
			<UseContextWithCustomHook />
		</div>
	);
}

export default App;
