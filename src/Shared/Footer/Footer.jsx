import { FaRegEnvelope } from "react-icons/fa";
import FooterLinks from "../../components/FooterLinks/FooterLinks";
import footerLogo from "./assets/footer-logo.png";
import { BsTelephone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
	return (
		<footer className="bg-[#001931] py-9">
			<div className="container">
				{/* Footer Top */}
				<div className="pb-10 border-b border-b-[rgba(229,231,235,0.2)]">
					<div className="grid grid-cols-12 gap-8 lg:gap-10">
						<div className="col-span-12 lg:col-span-5 xl:col-span-4 2xl:col-span-4">
							<img
								className="w-44 md:w-56 lg:w-40 lg:mb-5"
								src={footerLogo}
								alt=""
							/>
							<p className="text-[#FAFAFA] text-[16px]">
								Your trusted destination for discovering and
								downloading the best mobile applications.
							</p>
						</div>
						<div className="hidden 2xl:block 2xl:col-span-1"></div>
						<div className="col-span-6 md:col-span-4 lg:col-span-2 xl:col-span-3 2xl:col-span-2">
							<FooterLinks
								title="Quick Links"
								linkone="Home"
								linktwo="Apps"
								linkthree="Installation"
							/>
						</div>
						<div className="col-span-6 md:col-span-4 lg:col-span-2 xl:col-span-2 2xl:col-span-2">
							<FooterLinks
								title="Support"
								linkone="Help Center"
								linktwo="Privacy Policy"
								linkthree="Terms of Service"
							/>
						</div>
						<div className="col-span-12 md:col-span-4 lg:col-span-3 xl:col-span-3 2xl:col-span-3">
							<h3 className="text-[#FAFAFA] text-[20px] mb-4">
								Contact
							</h3>
							<ul className="flex flex-col gap-4">
								<li className="text-[#FAFAFA] text-[16px] flex items-center gap-2.5">
									<span>
										<FaRegEnvelope className="text-[20px]" />
									</span>
									<span>support@appdome.com</span>
								</li>
								<li className="text-[#FAFAFA] text-[16px] flex items-center gap-2.5">
									<span>
										<BsTelephone className="text-[20px]" />
									</span>
									<span>+880170xxxxxxx</span>
								</li>
								<li className="text-[#FAFAFA] text-[16px] flex items-center gap-2.5">
									<span>
										<IoLocationOutline className="text-[20px]" />
									</span>
									<span>Sherpur, Mymensingh</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
				{/* Footer Bottom */}
				<p className="pt-[30px] text-[#FAFAFA] text-center text-[18px]">
					Copyright © 2025 - All right reserved
				</p>
			</div>
		</footer>
	);
};

export default Footer;
