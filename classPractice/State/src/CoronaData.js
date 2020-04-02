import React, { Component } from "react";
import Charts from "./Charts";
import { pattern } from "patternomaly";

class CoronaData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchResults: ""
    };
  }
  componentDidMount = params => {
    let url = "https://corona.lmao.ninja/states";
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(all => {
        console.log(all);
        console.log("1");
        this.setState({
          data: all
        });
      });
  };
  handleChange = e => {
    this.setState({ searchResults: e.target.value });
    console.log(this.state.searchResults);
  };
  chartData = params => {
    const states = {
      labels: [],
      datasets: [
        {
          label: "Cases",
          backgroundColor: [
            "#FF6633",
            "#FFB399",
            "#FF33FF",
            "#FFFF99",
            "#00B3E6",
            "#E6B333",
            "#3366E6",
            "#999966",
            "#99FF99",
            "#B34D4D",
            "#80B300",
            "#809900",
            "#E6B3B3",
            "#6680B3",
            "#66991A",
            "#FF99E6",
            "#CCFF1A",
            "#FF1A66",
            "#E6331A",
            "#33FFCC",
            "#66994D",
            "#B366CC",
            "#4D8000",
            "#B33300",
            "#CC80CC",
            "#66664D",
            "#991AFF",
            "#E666FF",
            "#4DB3FF",
            "#1AB399",
            "#E666B3",
            "#33991A",
            "#CC9999",
            "#B3B31A",
            "#00E680",
            "#4D8066",
            "#809980",
            "#E6FF80",
            "#1AFF33",
            "#999933",
            "#FF3380",
            "#CCCC00",
            "#66E64D",
            "#4D80CC",
            "#9900B3",
            "#E64D66",
            "#4DB380",
            "#FF4D4D",
            "#99E6E6",
            "#6666FF"
          ],
          data: []
        }
      ]
    };
    let { data, searchResults } = this.state;
    data.forEach(state => {
      console.log(state.labels);
      states.labels.push(state.state);
      states.datasets[0].data.push(state.cases);
    });
    console.log(states);
    return states;
  };
  render() {
    let { data, searchResults } = this.state;
    this.chartData();
    // console.log(data);
    console.log("2");
    console.log(data);
    let filteredResults = data.filter(stateData => {
      return stateData.state.toLowerCase().includes(this.state.searchResults);
    });
    let stateList = filteredResults.map((state, index) => {
      return (
        <li key={index}>
          <h4>{state.state}</h4>
          <p>Cases: {state.cases}</p>
          <p>todayCases: {state.todayCases}</p>
          <p>Deaths: {state.deaths}</p>
          <p>todayDeaths: {state.todayDeaths}</p>
          <p>todayDeaths: {state.active}</p>
          <p>
            Percentage of deaths per cases:{" "}
            {(state.deaths / state.cases).toFixed(5) * 100}%
          </p>
        </li>
      );
    });

    return (
      <>
        <Charts data={this.chartData()} />
        <input type="text" width="500px" onChange={this.handleChange} />
        <ul>{stateList}</ul>
      </>
    );
  }
}

export default CoronaData;
