import Chart from "./components/Chart";
import Header from "./components/Header";
import { data } from "./data/data";

function App() {
  return (
    <div className="container">
      <Header />
      <Chart data={data} />
    </div>
  );
}

export default App;
