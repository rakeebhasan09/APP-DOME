import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home/Home";

export const router = createBrowserRouter([
	{
		path: "/",
		Component: MainLayout,
		children: [
			{
				index: true,
				Component: Home,
			},
			{
				path: "/apps",
				Component: Apps,
			},
			{
				path: "/installation",
				Component: Installation,
			},
			{
				path: "*",
				Component: Error,
			},
		],
	},
]);
