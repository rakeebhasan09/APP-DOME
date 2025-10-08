import { useLoaderData, useParams } from "react-router";
import downloadIcon from "./assets/download-icon.png";
import avarageRating from "./assets/avarage-rating.png";
import reviewIcon from "./assets/review-icon.png";
import AppDescription from "./AppDescription";
import RatngsChart from "./RatngsChart";
import NoAppFound from "../NoAppFound/NoAppFound";
import { useState } from "react";

const AppDetails = () => {
	const [isInstalled, setIsInstalled] = useState(false);
	const apps = useLoaderData();
	const { id } = useParams();
	const app = apps.find((app) => app.id === Number(id));

	if (!app) {
		return <NoAppFound />;
	}
	const {
		image,
		title,
		companyName,
		downloads,
		ratingAvg,
		reviews,
		size,
		ratings,
		description,
	} = app;

	return (
		<main className="py-10 md:py-14 lg:py-20">
			<div className="container">
				<div>
					{/* App Info */}
					<div className="pb-10 border-b border-b-[rgba(0,25,49,0.2)]">
						<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
							<div className="lg:col-span-5 xl:col-span-4 2xl:col-span-3">
								<img
									className="block h-full max-w-[100%] sm:w-1/2 md:w-1/2 lg:w-full"
									src={image}
									alt={title}
								/>
							</div>
							<div className="lg:col-span-7 xl:col-span-8 2xl:col-span-9">
								{/* App Name and Author */}
								<div className="pb-[30px] border-b border-b-[rgba(0,25,49,0.2)]">
									<h2 className="lg:text-[32px] font-bold leading-[100%] mb-2">
										{title}
									</h2>
									<p className="text-[#627382] text-[16px]">
										Developed by{" "}
										<span className="developby font-semibold">
											{companyName}
										</span>
									</p>
								</div>
								{/* More Information */}
								<div className="py-[30px]">
									<div className="flex flex-col md:flex-row gap-6">
										{/* Download Card */}
										<div className="min-w-[150px]">
											<img src={downloadIcon} alt="" />
											<p className="my-2 text-[16px]">
												Downloads
											</p>
											<h2 className="lg:text-[40px] font-extrabold leading-[100%]">
												{downloads}M
											</h2>
										</div>
										{/* Rating Card */}
										<div className="min-w-[150px]">
											<img src={avarageRating} alt="" />
											<p className="my-2 text-[16px]">
												Average Ratings
											</p>
											<h2 className="lg:text-[40px] font-extrabold leading-[100%]">
												{ratingAvg}
											</h2>
										</div>
										{/* Reviews Card */}
										<div className="min-w-[150px]">
											<img src={reviewIcon} alt="" />
											<p className="my-2 text-[16px]">
												Total Reviews
											</p>
											<h2 className="lg:text-[40px] font-extrabold leading-[100%]">
												{reviews}
											</h2>
										</div>
									</div>
								</div>
								<div>
									<button
										onClick={() => setIsInstalled(true)}
										disabled={isInstalled}
										className={`rounded py-[14px] px-5 font-semibold ${
											isInstalled
												? "text-black bg-[#ddd] cursor-not-allowed"
												: "text-white bg-[#00D390]"
										}`}
									>
										{isInstalled
											? "Installed"
											: `Install Now (${size} MB)`}
									</button>
								</div>
							</div>
						</div>
					</div>

					{/* Rating Chart */}
					<div className="pt-10">
						<h2 className="text-[24px] font-semibold mb-6">
							Ratings
						</h2>
						<RatngsChart ratings={ratings} />
					</div>

					{/* App Descriptions */}
					<AppDescription description={description} />
				</div>
			</div>
		</main>
	);
};

export default AppDetails;
