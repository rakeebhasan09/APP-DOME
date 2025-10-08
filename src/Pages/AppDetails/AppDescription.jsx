const AppDescription = ({ description }) => {
	return (
		<div className="pt-10 mt-10 border-t border-t-[rgba(0,25,49,0.2)]">
			<h2 className="text-[24px] font-semibold mb-6">Description</h2>
			<p className="text-[#627382]">{description}</p>
		</div>
	);
};

export default AppDescription;
