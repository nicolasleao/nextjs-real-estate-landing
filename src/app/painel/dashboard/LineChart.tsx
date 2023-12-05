import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface ChartProps {
  title: string;
  data: any;
  grid: boolean;
}

function Chart({ title, data, grid }: ChartProps) {
  return (
    <div className="chart overflow-hidden">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey="Lucro" stroke="#326629" />
          <Line type="monotone" dataKey="Faturamento" stroke="#8884d8" />
          <Line type="monotone" dataKey="Comissão" stroke="#8884d8" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
export default Chart;
