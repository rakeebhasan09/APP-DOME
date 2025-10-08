const StatisticsCard = ({ title, count, text }) => {
	return (
		<div className="flex flex-col items-center gap-4">
			<h4 className="text-[#E4D9FA] text-[16px] leading-[100%]">
				{title}
			</h4>
			<h2 className="text-white text-[35px] md:text-[45px] lg:text-[64px] leading-[100%] font-black">
				{count}
			</h2>
			<h4 className="text-[#E4D9FA] text-[16px] leading-[100%]">
				{text}
			</h4>
		</div>
	);
};

export default StatisticsCard;
