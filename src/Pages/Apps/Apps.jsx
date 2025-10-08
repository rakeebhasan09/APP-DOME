import { GoSearch } from "react-icons/go";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import { useLoaderData } from "react-router";
import AppCard from "../Home/TrendingApps/AppCard";

const Apps = () => {
	const apps = useLoaderData();
	return (
		<main className="py-10 md:py-14 lg:py-20">
			<div className="container">
				<SectionHeader
					title="Our All Applications"
					tagline="Explore All Apps on the Market developed by us. We code for Millions"
				/>
				<div className="pt-[46px] pb-[22px] grid grid-cols-12">
					<h2 className="text-[24px] font-semibold col-span-8">
						({apps.length}) Apps Found
					</h2>
					<div className="col-span-4 border border-[#D2D2D2] rounded py-3 px-4 flex items-center gap-2.5">
						<GoSearch />
						<input
							className="w-full outline-none text-[#627382] text-[16px]"
							type="text"
							placeholder="Search Apps"
						/>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
					{apps.map((app) => (
						<AppCard key={app.id} app={app} />
					))}
				</div>
			</div>
		</main>
	);
};

export default Apps;
