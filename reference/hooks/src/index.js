import React, { createContext, useContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";

export const UserContext = createContext();

export const useUser = () => useContext(UserContext);

const user = {
	name: "Rakko",
	dob: "13 May",
};

ReactDOM.render(
	<UserContext.Provider value={user}>
		<App />
	</UserContext.Provider>,
	document.getElementById("root")
);
