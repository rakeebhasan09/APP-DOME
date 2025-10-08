import StatisticsCard from "./StatisticsCard";

const Statistics = () => {
	return (
		<section className="py-10 md:py-14 lg:py-20 bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)]">
			<div className="container">
				<h2 className="text-center text-white text-[35px] lg:text-[48px] font-bold mb-8 lg:mb-10">
					Trusted by Millions, Built for You
				</h2>
				<div className="grid md:grid-cols-3 gap-y-10">
					<StatisticsCard
						title="Total Downloads"
						count="29.6M"
						text="21% more than last month"
					/>
					<StatisticsCard
						title="Total Reviews"
						count="906K"
						text="46% more than last month"
					/>
					<StatisticsCard
						title="Active Apps"
						count="132+"
						text="31 more will Launch"
					/>
				</div>
			</div>
		</section>
	);
};

export default Statistics;
