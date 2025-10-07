import { Link, NavLink } from "react-router";
import NavLogo from "./assets/app-dome.png";
import { FaGithub } from "react-icons/fa6";

const Navbar = () => {
	const menuItems = (
		<>
			<li>
				<NavLink
					to="/"
					className="hover:!bg-transparent text-[18px] text-[rgba(0,0,0,0.90)] font-medium p-0 rounded-[0px]"
				>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/apps"
					className="hover:!bg-transparent text-[18px] text-[rgba(0,0,0,0.90)] font-medium p-0 rounded-[0px]"
				>
					Apps
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/installation"
					className="hover:!bg-transparent text-[18px] text-[rgba(0,0,0,0.90)] font-medium p-0 rounded-[0px]"
				>
					Installation
				</NavLink>
			</li>
		</>
	);
	return (
		<header className="bg-white border-b border-b-[#E9E9E9] py-4">
			<div className="container">
				<div className="navbar min-h-0 p-0">
					<div className="navbar-start">
						<div className="dropdown">
							<div
								tabIndex={0}
								role="button"
								className="lg:hidden"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-10 w-10 cursor-pointer"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h8m-8 6h16"
									/>
								</svg>
							</div>
							<ul
								tabIndex={0}
								className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-5 gap-5 shadow"
							>
								{menuItems}
							</ul>
						</div>
						<Link to="/">
							<img
								className="ml-2 md:ml-5 lg:ml-0 w-28 md:w-32 lg:w-40"
								src={NavLogo}
								alt=""
							/>
						</Link>
					</div>
					<div className="navbar-center hidden lg:flex">
						<ul className="menu menu-horizontal gap-8 p-0">
							{menuItems}
						</ul>
					</div>
					<div className="navbar-end">
						<Link
							target="_blank"
							to="https://github.com/rakeebhasan09"
						>
							<button className="bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] py-3 px-4 flex items-center gap-[10px] text-white rounded cursor-pointer">
								<FaGithub />
								<span className="font-semibold">
									Contribute
								</span>
							</button>
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
