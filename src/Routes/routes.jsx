import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home/Home";
import AppDetails from "../Pages/AppDetails/AppDetails";

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
				loader: () => fetch("/appsData.json"),
				Component: Apps,
			},
			{
				path: "/installation",
				loader: () => fetch("/appsData.json"),
				Component: Installation,
			},
			{
				path: "/app-details/:id",
				loader: () => fetch("/appsData.json"),
				Component: AppDetails,
			},
			{
				path: "*",
				Component: Error,
			},
		],
	},
]);
