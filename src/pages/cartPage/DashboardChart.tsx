import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

interface TicketData {
  agent: string;
  count: number;
  color: string;
  percentage: number;
}

const dataLine = [
  { name: "Jan", Open: 40, Closed: 24 },
  { name: "Feb", Open: 30, Closed: 13 },
  { name: "Mar", Open: 20, Closed: 98 },
  { name: "Apr", Open: 27, Closed: 39 },
  { name: "May", Open: 18, Closed: 48 },
];

const data = [
  { month: "Jan", "Open Tickets": 120, "Closed Tickets": 100 },
  { month: "Feb", "Open Tickets": 150, "Closed Tickets": 130 },
  { month: "Mar", "Open Tickets": 140, "Closed Tickets": 160 },
  { month: "Apr", "Open Tickets": 110, "Closed Tickets": 140 },
  { month: "May", "Open Tickets": 180, "Closed Tickets": 120 },
  { month: "Jun", "Open Tickets": 160, "Closed Tickets": 180 },
  { month: "Jul", "Open Tickets": 130, "Closed Tickets": 200 },
  { month: "Aug", "Open Tickets": 170, "Closed Tickets": 150 },
  { month: "Sep", "Open Tickets": 200, "Closed Tickets": 170 },
  { month: "Oct", "Open Tickets": 180, "Closed Tickets": 190 },
  { month: "Nov", "Open Tickets": 160, "Closed Tickets": 180 },
  { month: "Dec", "Open Tickets": 140, "Closed Tickets": 200 },
];

const ticketData: TicketData[] = [
  {
    agent: "April 10",
    count: 25,
    color: "red",
    percentage: 85,
  },
  {
    agent: "April 11",
    count: 18,
    color: "blue",
    percentage: 60,
  },
  {
    agent: "April 12",
    count: 12,
    color: "green",
    percentage: 40,
  },
  {
    agent: "April 13",
    count: 22,
    color: "orange",
    percentage: 75,
  },
  {
    agent: "April 14",
    count: 28,
    color: "yellow",
    percentage: 95,
  },
  {
    agent: "April 15",
    count: 20,
    color: "hsl(var(--chart-purple))",
    percentage: 68,
  },
  {
    agent: "April 16",
    count: 30,
    color: "gray",
    percentage: 100,
  },
];

const dataDonut = [
  { name: "Success", value: 400 },
  { name: "Failure", value: 300 },
  { name: "Pending", value: 300 },
];

const COLORS = ["#3498db", "#2ecc71", "#f39c12"];

const dataVerticalBar = [
  { name: "Jan", Open: 30, Closed: 20 },
  { name: "Feb", Open: 45, Closed: 35 },
  { name: "Mar", Open: 60, Closed: 50 },
  { name: "Apr", Open: 50, Closed: 60 },
];

const dataChangeRequest = [
  { name: "Open", value: 120 },
  { name: "Work in Progress", value: 200 },
  { name: "Closed", value: 150 },
];

const DashboardChart = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 bg-white text-gray-600">
      {/* Tickets Resolved by Agent */}

      <div className="space-y-4">
        {ticketData.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-sm font-medium w-16">{item.agent}</span>
            <div className="flex-1  mx-4">
              <div className="w-full bg-muted  h-3">
                <div
                  className="h-3 rounded-tr-full rounded-br-full transition-all duration-300"
                  style={{
                    width: `${item.percentage}%`,
                    backgroundColor: item.color,
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <div className="h-80">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis dataKey="month" />
                <YAxis />
                <Legend />
                <Bar
                  dataKey="Open Tickets"
                  fill="hsl(var(--chart-blue))"
                  radius={[2, 2, 0, 0]}
                />
                <Bar
                  dataKey="Closed Tickets"
                  fill="hsl(var(--chart-cyan))"
                  radius={[2, 2, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Change Request by Status */}
      <div className="lg:col-span-2">
        <div className="h-96">
          <h2 className="text-lg font-semibold mb-4">
            Change Request by Status
          </h2>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={dataLine}>
              {/* Removes vertical grid lines, keeps horizontal */}
              <CartesianGrid vertical={false} strokeDasharray="3 3" />

              {/* Removes axis lines & tick lines */}
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />

              {/* Removes hover vertical line */}
              <Tooltip cursor={false} />

              <Legend />
              <Line
                type="monotone"
                strokeWidth={3}
                dataKey="Open"
                stroke="#3498db"
              />
              <Line
                type="monotone"
                strokeWidth={3}
                dataKey="Closed"
                stroke="#2ecc71"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Ticket Resolution Chart */}
      <div className="lg:col-span-2">
        <div className="h-96">
          <h2 className="text-lg font-semibold mb-4">Ticket Resolution</h2>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              // barCategoryGap="0%" // removes category gap
              barGap={0}
              data={dataVerticalBar}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Open" fill="#1659E6" />
              <Bar dataKey="Closed" fill="#30B7EE" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="p-6">
        <div>
          <div className="h-80">
            <h2 className="text-sm font-bold text-gray-800 mb-2">
              Change Request By Status
            </h2>
            <ResponsiveContainer width="100%" height="90%">
              <BarChart
                data={dataChangeRequest}
                barSize={100}
                margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
              >
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#4B5563", fontSize: 12 }}
                />
                <YAxis hide />
                <Tooltip cursor={{ fill: "transparent" }} />
                <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                  {dataChangeRequest.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardChart;
