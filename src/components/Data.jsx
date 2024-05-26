import { data } from "../data/data";
const Data = () => {
  return (
    <ul>
      {data.map((item) => (
        <li key={Math.random()}>
          <h1>{item.day}</h1>
          <p>{item.amount}</p>
        </li>
      ))}
    </ul>
  );
};

export default Data;
