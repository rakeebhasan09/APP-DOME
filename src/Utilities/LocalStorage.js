import { toast } from "react-toastify";
const getStoredItems = () => {
	const installedAppsSTR = localStorage.getItem("installed");
	if (installedAppsSTR) {
		const installedApps = JSON.parse(installedAppsSTR);
		return installedApps;
	} else {
		return [];
	}
};

const addToLocalStorage = (id) => {
	const installedAppsData = getStoredItems();
	if (installedAppsData.includes(id)) {
		toast.warn("Already Installed.");
		return;
	} else {
		installedAppsData.push(id);
		const data = JSON.stringify(installedAppsData);
		localStorage.setItem("installed", data);
		toast.success("App Installed.");
	}
};

const removeFromLocalStorage = (id) => {
	const installedAppsData = getStoredItems();
	const updatedInstalledList = installedAppsData.filter(
		(appId) => String(appId) !== String(id)
	);
	const updatedData = JSON.stringify(updatedInstalledList);
	localStorage.setItem("installed", updatedData);
	toast.success("App Uninstalled.");
};

export { addToLocalStorage, getStoredItems, removeFromLocalStorage };
