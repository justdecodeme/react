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

import UseFetchUser from "./UseFetchUser";

function App() {
	return (
		<div className="App">
			<h1 style={{ textAlign: "center" }}>React Hooks</h1>
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
			<hr />
			<UseFetchUser />
		</div>
	);
}

export default App;
