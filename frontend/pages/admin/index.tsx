import type { NextPage } from "next";
import { CategoryScale, Chart, Legend, LinearScale, LineElement, PointElement, Title, Tooltip } from "chart.js";
import { Line } from "react-chartjs-2";


function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const
    },
    title: {
      display: true,
      text: "Chart.js Line Chart"
    }
  }
};


const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      label: "Facebook",
      data: Array.from({ length: 7 }, () => randomBetween(-1000, 1000)),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)"
    },
    {
      label: "Instagram",
      data: Array.from({ length: 7 }, () => randomBetween(-1000, 1000)),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)"
    }
  ]
};

const Admin: NextPage = () => {


  return (
      <div>
        <Line data={ data } options={options}/>
      </div>
  );
};

export default Admin;
