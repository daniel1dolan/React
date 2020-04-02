import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

const state = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Rainfall",
      backgroundColor: ["#B21F00", "#C9DE00", "#2FDE00", "#00A6B4", "#6800B4"],
      hoverBackgroundColor: [
        "#501800",
        "#4B5000",
        "#175000",
        "#003350",
        "#35014F"
      ],
      data: [65, 59, 80, 81, 56]
    }
  ]
};

class Charts extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Pie
          data={this.props.data}
          options={{
            title: {
              display: true,
              text: "Coronavirus cases by state",
              fontSize: 20
            },
            legend: {
              display: false,
              position: "right"
            }
          }}
        />
      </div>
    );
  }
}

export default Charts;
