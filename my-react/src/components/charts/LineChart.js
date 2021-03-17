import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class LineChart extends Component {
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
                ]
            }
        }
    }

    setGradientColor = (canvas, color) => {
        const ctx = canvas.getContext('2d');
        const gradient = ctx.createLinearGradient(0,0,200, 300);
        gradient.addColorStop(0, color);
        // gradient.addColorStop(0.95, "rgba(200, 200, 200, 0.9)");
        return gradient;
    }
    getChartData = canvas => {
        const data = this.state.data;
        if (data.datasets) {
            let colors = [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ]
            data.datasets.forEach((set, i) => {
                set.backgroundColor = this.setGradientColor(canvas, colors[i]);
                set.borderColor = "white";
                set.borderWiddth = 2;
            });
        }
        return data;
    }
    render() { 
        return (
            <div style={{position: "relative", width: 600, height: 550, margin: "auto", padding: 30}}>
                <h3 style={{textAlign: "center"}}>Line Chart</h3>
                <Line 
                    options={{
                        responsive: true,
                    }}
                    data={this.getChartData}
                ></Line>
            </div>
        );
    }
}
 
export default LineChart;