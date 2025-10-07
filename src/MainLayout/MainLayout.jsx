import { Outlet } from "react-router";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const MainLayout = () => {
	return (
		<div>
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
};

export default MainLayout;
