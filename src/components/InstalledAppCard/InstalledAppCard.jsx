import { RxDownload } from "react-icons/rx";
import { MdOutlineStar } from "react-icons/md";

const InstalledAppCard = ({ singleApp, handleUninstall }) => {
	const { image, title, downloads, ratingAvg, size } = singleApp;

	return (
		<div>
			<div className="bg-white p-4 rounded flex flex-col sm:flex-row gap-y-8 items-center justify-between">
				<div className="flex items-center gap-4">
					<div className="w-20 h-20 rounded-lg overflow-hidden">
						<img src={image} alt="" />
					</div>
					<div>
						<h5 className="font-medium">{title}</h5>
						<ul className="flex items-center gap-4">
							<li className="flex items-center gap-1">
								<RxDownload className="text-[#00D390]" />
								<span className="text-[16px] text-[#00D390] font-medium">
									{downloads}M
								</span>
							</li>
							<li className="flex items-center gap-1">
								<MdOutlineStar className="text-[#FF8811]" />
								<span className="text-[16px] text-[#FF8811] font-medium">
									{ratingAvg}
								</span>
							</li>
							<li>
								<span className="text-[16px] text-[#627382]">
									{size} MB
								</span>
							</li>
						</ul>
					</div>
				</div>
				<div>
					<button
						onClick={() => handleUninstall(singleApp.id)}
						className="py-3 px-4 bg-[#00D390] rounded text-white font-semibold"
					>
						Uninstall
					</button>
				</div>
			</div>
		</div>
	);
};

export default InstalledAppCard;
