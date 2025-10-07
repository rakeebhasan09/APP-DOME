import { Link, NavLink } from "react-router";
import NavLogo from "./asstets/app-dome.png";

const Navbar = () => {
	return (
		<header className="bg-white border-b border-b-[#E9E9E9] py-4">
			<div className="container">
				<div className="navbar min-h-0 p-0">
					<div className="navbar-start">
						<div className="dropdown">
							<div
								tabIndex={0}
								role="button"
								className="btn btn-ghost lg:hidden"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									{" "}
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h8m-8 6h16"
									/>{" "}
								</svg>
							</div>
							<ul
								tabIndex={0}
								className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
							>
								<li>
									<a>Item 1</a>
								</li>
								<li>
									<a>Item 2</a>
								</li>
							</ul>
						</div>
						<Link to="/">
							<img className="w-40" src={NavLogo} alt="" />
						</Link>
					</div>
					<div className="navbar-center hidden lg:flex">
						<ul className="menu menu-horizontal gap-8 p-0">
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
						</ul>
					</div>
					<div className="navbar-end">
						<a className="btn">Button</a>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
