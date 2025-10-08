const SectionHeader = ({ title, tagline }) => {
	return (
		<div>
			<h2 className="text-[48px] text-center font-bold mb-4 leading-[100%]">
				{title}
			</h2>
			<p className="text-center text-[#627382]">{tagline}</p>
		</div>
	);
};

export default SectionHeader;
