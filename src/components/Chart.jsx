import React, { useState } from "react";

const Chart = ({ data }) => {
  const [tooltip, setTooltip] = useState({
    visible: false,
    content: "",
    x: 0,
    y: 0,
  });

  const handleMouseEnter = (event, amount) => {
    const { clientX, clientY } = event;
    setTooltip({ visible: true, content: amount, x: clientX, y: clientY });
  };

  const handleMouseLeave = () => {
    setTooltip({ visible: false, content: "", x: 0, y: 0 });
  };

  return (
    <main>
      <h1>Spending - Last 7 days</h1>
      <ul className="chart">
        {data.map((item, index) => (
          <li key={index}>
            <span
              className={`graph ${item.amount >= 50 ? "over50" : "under50"}`}
              style={{ height: `${item.amount * 3}px` }}
              onMouseEnter={(e) => handleMouseEnter(e, item.amount)}
              onMouseLeave={handleMouseLeave}
            ></span>
            <p>{item.day}</p>
          </li>
        ))}
      </ul>
      {tooltip.visible && (
        <div
          className="tooltip"
          style={{
            top: tooltip.y - 42,
            left: tooltip.x,
            position: "absolute",
          }}
        >
          {tooltip.content}
        </div>
      )}
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
