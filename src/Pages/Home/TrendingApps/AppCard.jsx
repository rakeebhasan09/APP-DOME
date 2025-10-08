import { IoMdStar } from "react-icons/io";
import { RxDownload } from "react-icons/rx";
import { Link } from "react-router";

const AppCard = ({ app }) => {
	const { id, image, title, downloads, ratingAvg } = app;
	return (
		<Link>
			<div className="p-4 bg-white rounded">
				<div className="flex flex-col gap-4 group">
					<div className="overflow-hidden">
						<img
							className="rounded-t transition duration-300 group-hover:scale-110"
							src={image}
							alt={title}
						/>
					</div>
					<div>
						<h3 className="font-medium">{title}</h3>
					</div>
					<div className="flex items-center justify-between">
						<div className="py-1.5 px-2.5 bg-[#F1F5E8] rounded flex items-center gap-2">
							<RxDownload className="text-[#00D390]" />
							<span className="text-[16px] text-[#00D390] font-medium">
								{downloads}M
							</span>
						</div>
						<div className="py-1.5 px-2.5 bg-[#FFF0E1] rounded flex items-center gap-2">
							<IoMdStar className="text-[#F81]" />
							<span className="text-[16px] text-[#F81] font-medium">
								{ratingAvg}
							</span>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default AppCard;
