import {useState} from "react";
import {
	BrowserRouter,
	createBrowserRouter,
	RouterProvider,
	Router,
	Routes,
	Route,
} from "react-router-dom";
import Layout from "./components/layout";
import Nav from "./components/nav";
import VideoList from "./components/VideoList";

const NotFound = () => {
	return <h1 className="text-white mr-[12em]">Page Not Found</h1>;
};

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{path: "home", element: <Nav />},
			{path: "video/:id", element: <VideoList />},
			{path: "*", element: <NotFound />},
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
