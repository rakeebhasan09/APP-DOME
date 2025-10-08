import { RxDownload } from "react-icons/rx";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import { MdOutlineStar } from "react-icons/md";

const Installation = () => {
	return (
		<main className="py-10 md:py-14 lg:py-20">
			<div className="container">
				<SectionHeader
					title="Your Installed Apps"
					tagline="Explore All Trending Apps on the Market developed by us"
				/>
				<div className="flex items-center justify-between">
					<h3 className="text-[24px] font-semibold">1 Apps Found</h3>
					<div>
						<select
							defaultValue="Sort By Size"
							className="select select-md appearance-none focus:outline-none focus:ring-0"
						>
							<option disabled={true}>Sort By Size</option>
							<option>Low - High</option>
							<option>High - Low</option>
						</select>
					</div>
				</div>
				<div className="mt-4">
					<div className="flex flex-col gap-4">
						{/* Single Item */}
						<div className="bg-white p-4 rounded flex items-center justify-between">
							<div className="flex items-center gap-4">
								<div className="w-20 h-20 rounded-lg bg-[#D9D9D9]"></div>
								<div>
									<h5 className="font-medium">
										Forest: Focus for Productivity
									</h5>
									<ul className="flex items-center gap-4">
										<li className="flex items-center gap-1">
											<RxDownload className="text-[#00D390]" />
											<span className="text-[16px] text-[#00D390] font-medium">
												9M
											</span>
										</li>
										<li className="flex items-center gap-1">
											<MdOutlineStar className="text-[#FF8811]" />
											<span className="text-[16px] text-[#FF8811] font-medium">
												5
											</span>
										</li>
										<li>
											<span className="text-[16px] text-[#627382]">
												258 MB
											</span>
										</li>
									</ul>
								</div>
							</div>
							<div>
								<button className="py-3 px-4 bg-[#00D390] rounded text-white font-semibold">
									Uninstall
								</button>
							</div>
						</div>
						{/* Single Item */}
						<div className="bg-white p-4 rounded flex items-center justify-between">
							<div className="flex items-center gap-4">
								<div className="w-20 h-20 rounded-lg bg-[#D9D9D9]"></div>
								<div>
									<h5 className="font-medium">
										Forest: Focus for Productivity
									</h5>
									<ul className="flex items-center gap-4">
										<li className="flex items-center gap-1">
											<RxDownload className="text-[#00D390]" />
											<span className="text-[16px] text-[#00D390] font-medium">
												9M
											</span>
										</li>
										<li className="flex items-center gap-1">
											<MdOutlineStar className="text-[#FF8811]" />
											<span className="text-[16px] text-[#FF8811] font-medium">
												5
											</span>
										</li>
										<li>
											<span className="text-[16px] text-[#627382]">
												258 MB
											</span>
										</li>
									</ul>
								</div>
							</div>
							<div>
								<button className="py-3 px-4 bg-[#00D390] rounded text-white font-semibold">
									Uninstall
								</button>
							</div>
						</div>
						{/* Single Item */}
						<div className="bg-white p-4 rounded flex items-center justify-between">
							<div className="flex items-center gap-4">
								<div className="w-20 h-20 rounded-lg bg-[#D9D9D9]"></div>
								<div>
									<h5 className="font-medium">
										Forest: Focus for Productivity
									</h5>
									<ul className="flex items-center gap-4">
										<li className="flex items-center gap-1">
											<RxDownload className="text-[#00D390]" />
											<span className="text-[16px] text-[#00D390] font-medium">
												9M
											</span>
										</li>
										<li className="flex items-center gap-1">
											<MdOutlineStar className="text-[#FF8811]" />
											<span className="text-[16px] text-[#FF8811] font-medium">
												5
											</span>
										</li>
										<li>
											<span className="text-[16px] text-[#627382]">
												258 MB
											</span>
										</li>
									</ul>
								</div>
							</div>
							<div>
								<button className="py-3 px-4 bg-[#00D390] rounded text-white font-semibold">
									Uninstall
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Installation;
