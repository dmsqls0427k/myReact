import React, { Component } from 'react';
import { Bar } from "react-chartjs-2";

class BarChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                labels: ["A", "B", "C", "D"],
                datasets: [
                    {
                        label: "Carbon",
                        data: [50,40,20,70,10]
                    },
                    {
                        label: "Oxygen",
                        data: [10,20,30,5,60]
                    },
                    {
                        label: "Nitrogen",
                        data: [15,90,40,15,30]
                    },
                ]
            }
        }
    }
    getChartData = canvas => {
        const data = this.state.data;
        if (data.datasets) {
            let colors = [
                'rgba(255, 206, 86, 0.4)',
                'rgba(75, 192, 192, 0.4)',
                'rgba(153, 102, 255, 0.4)',
                'rgba(255, 159, 64, 0.4)',
            ]
            data.datasets.forEach((set, i) => {
                set.backgroundColor = colors[i];
                set.borderColor = colors[i];
                set.borderWiddth = 2;
            });
        }
        return data;
    }
    render() { 
        return ( 
            <div style={{position: "relative", width: 600, height: 550, margin: "auto", padding: 30}}>
                <h3 style={{textAlign: "center"}}>Bar Chart</h3>
                <Bar
                    options={{
                        responsive: true,
                    }}
                    data={this.getChartData}
                ></Bar>
            </div>
        );
    }
}
 
export default BarChart;