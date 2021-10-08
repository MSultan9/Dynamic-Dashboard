import GroupedBar  from "./charts/GroupedBar";
import DoughnutChart from "./charts/Doughnut";
import PieChart from "./charts/Pie";
import LineChart from "./charts/Line";
import Polar from "./charts/Polar";

function App() {
  return (
    <div className="grid-wrapper">
      <GroupedBar />
      <DoughnutChart />
      <PieChart />
      <LineChart />
      <Polar />
    </div>
  );
}

export default App;
