import { Outlet, useLocation } from "react-router";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";

const MainLayout = () => {
	const location = useLocation();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => setLoading(false), 1000); // fake delay
	}, [location]);
	return (
		<div>
			<Navbar />
			<div>
				{loading && (
					<div className="fixed inset-0 flex items-center justify-center bg-[rgb(255,255,255)] z-50">
						{/* <div className="loader border-4 border-t-blue-500 border-gray-300 rounded-full w-12 h-12 animate-spin"></div> */}
						<ScaleLoader color="#6B35E5" />
					</div>
				)}
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default MainLayout;
