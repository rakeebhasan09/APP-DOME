import { Link } from "react-router";

const FooterLinks = ({ title, linkone, linktwo, linkthree }) => {
	return (
		<div>
			<h3 className="text-[#FAFAFA] text-[20px] mb-4">{title}</h3>
			<ul className="flex flex-col gap-2">
				<li>
					<Link to="/" className="text-[#FAFAFA] text-[16px]">
						{linkone}
					</Link>
				</li>
				<li>
					<Link to="/" className="text-[#FAFAFA] text-[16px]">
						{linktwo}
					</Link>
				</li>
				<li>
					<Link to="/" className="text-[#FAFAFA] text-[16px]">
						{linkthree}
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default FooterLinks;
