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

  console.log(obj)

  const data = {
    labels: Object.keys(obj),
    datasets: [
      {
        label: "# of Votes",
        data: Object.values(obj),
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