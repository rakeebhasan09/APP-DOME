import { Link } from "react-router";
import playStore from "./assets/playStore.png";
import appStore from "./assets/appStore.png";
import bannerImage from "./assets/banner-image.png";

const Banner = () => {
	return (
		<section className="pt-10 md:pt-14 lg:pt-20">
			<div className="container">
				<h2 className="text-[40px] md:text-[55px] lg:text-[72px] text-center font-bold leading-[100%]">
					We Build
				</h2>
				<h2 className="text-[40px] md:text-[55px] lg:text-[72px] text-center font-bold leading-[100%]">
					<span className="bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] productive">
						Productive
					</span>{" "}
					Apps
				</h2>
				<p className="mt-4 max-w-[993px] mx-auto text-center text-[#627382]">
					At HERO.IO, we craft innovative apps designed to make
					everyday life simpler, smarter, and more exciting.Our goal
					is to turn your ideas into digital experiences that truly
					make an impact.
				</p>
				<ul className="py-5 md:py-10 flex flex-col md:flex-row items-center justify-center gap-4">
					<li>
						<Link
							target="_blank"
							to="https://play.google.com/store/games?device=windows"
						>
							<button className="min-w-[200px] py-3 px-6 border border-[#D2D2D2] rounded flex items-center gap-2.5">
								<img
									className="w-8"
									src={playStore}
									alt="Google Play Logo"
								/>
								Google Play
							</button>
						</Link>
					</li>
					<li>
						<Link
							target="_blank"
							to="https://www.apple.com/app-store/"
						>
							<button className="min-w-[200px] py-3 px-6 border border-[#D2D2D2] rounded flex items-center gap-2.5">
								<img
									className="w-8"
									src={appStore}
									alt="App Store Logo"
								/>
								App Store
							</button>
						</Link>
					</li>
				</ul>
				<div>
					<img
						className="block mx-auto"
						src={bannerImage}
						alt="Banner Image"
					/>
				</div>
			</div>
		</section>
	);
};

export default Banner;
