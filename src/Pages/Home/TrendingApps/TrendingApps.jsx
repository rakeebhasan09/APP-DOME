import { useEffect, useState } from "react";
import SectionHeader from "../../../Shared/SectionHeader/SectionHeader";
import AppCard from "./AppCard";
import { Link } from "react-router";

const TrendingApps = () => {
	const [apps, setApps] = useState([]);
	useEffect(() => {
		fetch("/appsData.json")
			.then((res) => res.json())
			.then((data) => setApps(data));
	}, []);

	const limitedApps = apps.slice(0, 8);

	return (
		<section className="lg:py-20 ">
			<div className="container">
				<SectionHeader
					title="Trending Apps"
					tagline="Explore All Trending Apps on the Market developed by us"
				/>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10">
					{limitedApps.map((app) => (
						<AppCard key={app.id} app={app} />
					))}
				</div>

				<div>
					<Link to="/apps">
						<button className="mt-10 w-[145px] mx-auto bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] py-3 flex items-center justify-center gap-[10px] text-white rounded cursor-pointer">
							<span className="font-semibold">Show All</span>
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default TrendingApps;
