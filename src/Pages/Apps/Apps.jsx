import { GoSearch } from "react-icons/go";
import { useLoaderData } from "react-router";
import { useState } from "react";
import { GridLoader } from "react-spinners";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import AppCard from "../Home/TrendingApps/AppCard";
import NoAppFound from "../NoAppFound/NoAppFound";

const Apps = () => {
	const apps = useLoaderData();
	const [loading, setLoading] = useState(false);
	const [search, setSearch] = useState("");
	const modifiedSearch = search.trim().toLowerCase();
	const searchedItems = modifiedSearch
		? apps.filter((app) => app.title.toLowerCase().includes(modifiedSearch))
		: apps;

	const handleSearch = (e) => {
		setSearch(e.target.value);
		setLoading(true);

		setTimeout(() => {
			setLoading(false);
		}, 500);
	};

	return (
		<main className="py-10 md:py-14 lg:py-20">
			<div className="container">
				<SectionHeader
					title="Our All Applications"
					tagline="Explore All Apps on the Market developed by us. We code for Millions"
				/>
				<div className="pt-[46px] pb-[22px] gap-y-5 grid col-span-1 md:grid-cols-12">
					<h2 className="text-[24px] font-semibold md:col-span-6 lg:col-span-8">
						({searchedItems.length}) Apps Found
					</h2>
					<div className="md:col-span-6 lg:col-span-4 border border-[#D2D2D2] rounded py-3 px-4 flex items-center gap-2.5">
						<GoSearch />
						<input
							value={search}
							onChange={handleSearch}
							className="w-full outline-none text-[#627382] text-[16px]"
							type="search"
							placeholder="Search Apps"
						/>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
					{loading ? (
						<div className="col-span-12 min-h-40 flex items-center justify-center">
							<GridLoader color="#6B35E5" />
						</div>
					) : searchedItems.length > 0 ? (
						searchedItems.map((app) => (
							<AppCard key={app.id} app={app} />
						))
					) : (
						<div className="col-span-12">
							<NoAppFound />
						</div>
					)}
				</div>
			</div>
		</main>
	);
};

export default Apps;
