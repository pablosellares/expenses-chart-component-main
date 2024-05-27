import { useState } from "react";
import { data } from "../data/data";
const Chart = () => {
  const [tooltip, setTooltip] = useState(0, true);

  return (
    <main>
      <h1>Spending - Last 7 days</h1>
      <ul className="chart">
        {data.map((item) => (
          <li key={Math.random()}>
            <span
              className={`graph ${item.amount >= 50 ? "over50" : "under50"}`}
              style={{ height: `${item.amount * 3}px` }}
              onMouseEnter={() => setTooltip(item.amount)}
              onMouseLeave={() => setTooltip(null)}
            ></span>
            <p>{item.day}</p>
            {tooltip ? <span className="tooltip">{tooltip}</span> : ""}
          </li>
        ))}
      </ul>
      <p className="totals-title">Total this month</p>
      <div className="totals">
        <div className="totals-amount">$478.33</div>
        <div className="totals-info">
          <span>+2.4%</span>
          <p>from last month</p>
        </div>
      </div>
    </main>
  );
};

export default Chart;
