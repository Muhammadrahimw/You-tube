import {useState} from "react";
import {BrowserRouter, Router, Routes, Route} from "react-router-dom";
import Layout from "./components/layout";
import Nav from "./components/nav";

const NotFound = () => {
	return <h1 className="text-white mr-[12em]">Page Not Found</h1>;
};

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/home" element={<Nav />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
