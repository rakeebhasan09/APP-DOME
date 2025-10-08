import { Link } from "react-router";

const NoAppFound = () => {
	const handleGoBack = () => {
		window.location.href = "/apps";
	};
	return (
		<section className="py-10 md:py-20 lg:pt-[135px] lg:pb-20">
			<div className="container">
				<div>
					<img
						className="block mx-auto"
						src="https://i.ibb.co.com/G4sxMdXR/no-app-found.png"
						alt=""
					/>
				</div>
				<div className="pt-5 md:pt-12 lg:pt-[65px]">
					<h2 className="text-[30px] md:text-[48px] font-semibold text-center mb-2">
						OPPS!! APP NOT FOUND
					</h2>
					<p className="text-[#627382] text-center mb-4">
						The App you are requesting is not found on our system.
						please try another apps
					</p>
					<div className="text-center">
						<button
							onClick={handleGoBack}
							className="w-[150px] text-white py-3 rounded bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)]"
						>
							Go Back!
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NoAppFound;
