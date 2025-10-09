import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import { useLoaderData } from "react-router";
import { useEffect, useState } from "react";
import {
	getStoredItems,
	removeFromLocalStorage,
} from "../../Utilities/LocalStorage";
import InstalledAppCard from "../../components/InstalledAppCard/InstalledAppCard";

const Installation = () => {
	const installedApps = useLoaderData();
	const [installList, setInstallList] = useState([]);

	useEffect(() => {
		const installedAppsData = getStoredItems();
		const convertedIds = installedAppsData.map((id) => Number(id));
		const installedList = installedApps.filter((installApp) =>
			convertedIds.includes(installApp.id)
		);
		setInstallList(installedList);
	}, [installedApps]);

	// Sorting Handler
	const handleSort = (type) => {
		if (type === "low-high") {
			const lowToHighSortd = [...installList].sort(
				(a, b) => a.downloads - b.downloads
			);
			setInstallList(lowToHighSortd);
		}
		if (type === "high-low") {
			const lowToHighSortd = [...installList].sort(
				(a, b) => b.downloads - a.downloads
			);
			setInstallList(lowToHighSortd);
		}
	};

	const handleUninstall = (id) => {
		removeFromLocalStorage(id);
		const installedAppsData = getStoredItems();
		const convertedIds = installedAppsData.map((id) => Number(id));
		const installedList = installedApps.filter((installApp) =>
			convertedIds.includes(installApp.id)
		);
		setInstallList(installedList);
	};
	return (
		<main className="py-10 md:py-14 lg:py-20">
			<div className="container">
				<SectionHeader
					title="Your Installed Apps"
					tagline="Explore All Trending Apps on the Market developed by us"
				/>
				<div className="flex items-center justify-between mt-10">
					<h3 className="text-[24px] font-semibold">
						{installList.length} Apps Found
					</h3>
					<div>
						<select
							defaultValue="Sort By Size"
							className="select select-neutral appearance-none focus:!outline-none focus:!ring-0"
							onChange={(e) => handleSort(e.target.value)}
						>
							<option disabled={true}>Sort By Size</option>
							<option value="low-high">Low - High</option>
							<option value="high-low">High - Low</option>
						</select>
					</div>
				</div>
				<div className="mt-4">
					<div className="flex flex-col gap-4">
						{/* Single Item */}
						{installList.map((singleApp) => (
							<InstalledAppCard
								key={singleApp.id}
								singleApp={singleApp}
								handleUninstall={handleUninstall}
							/>
						))}
					</div>
				</div>
			</div>
		</main>
	);
};

export default Installation;
