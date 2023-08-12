import React from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";


export default function PieChart(props) {
  const {expenses} = props

  const obj = {}
  expenses.forEach((ele)=> {
    if(obj[ele.category]){
      obj[ele.category] += ele.amount
    }else{
      obj[ele.category] = ele.amount
    }
  })

  // console.log(obj)

  // const data = {
  //   labels: Object.keys(obj),
  //   datasets: [
  //     {
  //       label: "# of Votes",
  //       data: Object.values(obj),
  //     },
  //   ],
  // };

  const data = {
    labels: Object.keys(obj),
    datasets: [
      {
        label: "# of Votes",
        data: Object.values(obj),
        backgroundColor: [
          "#007D9C",
          "#244D70",
          "#D123B3",
          "#F7E018",
          "#fff",
          "#FE452A",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };


  return (
    <div style={{ width: 300, textAlign: "center" }}>
      <h1 style={{ fontFamily: "monospace" }}>
        Expenses
      </h1>
      <Pie data={data} width={50} height={50} />
    </div>
  );
}