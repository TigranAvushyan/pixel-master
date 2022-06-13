import { ChartData } from "chart.js";
import Chart from "chart.js/auto";
import annotationPlugin from "chartjs-plugin-annotation";
import React, { FC } from "react";
import { Line } from "react-chartjs-2";

Chart.register(annotationPlugin);

function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


const options = {
  responsive: true,
  plugins: {

    title: {
      display: true,
      text: "Utm"
    }
  }
};




const d = [
  {
    "ip": "73.176.43.196",
    "date": "2021-06-08T07:15:56 -03:00",
    "os": "Windows",
    "site": "facebook",
    "count": 51
  },
  {
    "ip": "0.45.129.85",
    "date": "2020-01-10T01:59:30 -03:00",
    "os": "Linux",
    "site": "gmail",
    "count": 93
  },
  {
    "ip": "218.254.135.167",
    "date": "2020-04-01T12:24:41 -03:00",
    "os": "Android",
    "site": "instagram",
    "count": 14
  },
  {
    "ip": "232.231.219.120",
    "date": "2021-01-23T03:32:55 -03:00",
    "os": "Linux",
    "site": "telegram",
    "count": 2
  },
  {
    "ip": "46.110.78.1",
    "date": "2021-10-26T09:35:36 -03:00",
    "os": "Windows",
    "site": "instagram",
    "count": 79
  },
  {
    "ip": "183.124.139.58",
    "date": "2022-04-18T12:58:43 -03:00",
    "os": "Android",
    "site": "gmail",
    "count": 71
  },
  {
    "ip": "99.127.175.179",
    "date": "2021-06-28T02:37:19 -03:00",
    "os": "MacOS",
    "site": "instagram",
    "count": 74
  },
  {
    "ip": "52.226.219.191",
    "date": "2020-11-07T04:49:28 -03:00",
    "os": "Android",
    "site": "telegram",
    "count": 81
  }
]




const data = {
  labels: d.map(i => i.date),
  datasets: [
    {
      label: "Facebook",
      data: d.map(i => i.count),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)"
    },
  ]
};

const UtmCountByMonth: FC = () => {
  return (
      <div>
        <Line data={ data } options={ options } />
      </div>
  );
};

export default UtmCountByMonth;
