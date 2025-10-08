import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const RatngsChart = ({ ratings }) => {
	return (
		<div>
			<ResponsiveContainer width="100%" height={300}>
				<BarChart layout="vertical" data={[...ratings].reverse()}>
					<XAxis
						type="number"
						dataKey="count"
						axisLine={false}
						tickLine={false}
					/>
					<YAxis
						type="category"
						dataKey="name"
						axisLine={false}
						tickLine={false}
					/>
					<Bar dataKey="count" fill="#FF8C00" barSize={30} />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default RatngsChart;
