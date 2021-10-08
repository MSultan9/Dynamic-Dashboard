import GroupedBar from "./charts/GroupedBar";
import DoughnutChart from "./charts/Doughnut";
import PieChart from "./charts/Pie";
import LineChart from "./charts/Line";
import Polar from "./charts/Polar";
import RcTable from "./charts/RcTable";
import { widgets } from './initconfig'

function App() {
  return (
    <>
      <header><h1>Sample Header</h1></header>
      <div className="content-wrapper">
        <div className="grid-wrapper">
          {widgets.list.sort((a, b) => (a.order > b.order) ? 1 : -1).map(widget => {
            let result
            switch (widget.type) {
              case 'bar':
                result = <GroupedBar key={widget.id} details={widget} />
                break;
              case 'doughnut':
                result = <DoughnutChart key={widget.id} details={widget} />
                break;
              case 'pie':
                result = <PieChart key={widget.id} details={widget} />
                break;
              case 'line':
                result = <LineChart key={widget.id} details={widget} />
                break;
              case 'polar':
                result = <Polar key={widget.id} details={widget} />
                break;
              case 'grid':
                result = <RcTable key={widget.id} details={widget} />
                break;
              default:
                break;
            }
            return result
          })}
        </div>
      </div>
    </>
  );
}

export default App;
