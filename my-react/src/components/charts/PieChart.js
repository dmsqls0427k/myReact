import React, { Component } from 'react';
import { Pie } from "react-chartjs-2"

class PieChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                labels: ["Carbon", "Hydrogen", "Nitrogen"],
                datasets: [
                    {
                        label: "Elements",
                        data: [3,21,78],
                        backgroundColor: [
                            'rgba(255, 206, 86, 0.4)',
                            'rgba(75, 192, 192, 0.4)',
                            'rgba(153, 102, 255, 0.4)',
                            'rgba(255, 159, 64, 0.4)',
                        ]
                    },
                ]
            }
        }
    }
    getChartData = canvas => {
        const data = this.state.data;
        return data;
    }
    render() { 
        return ( 
            <div style={{position: "relative", width: 600, height: 550, margin: "auto", padding: 30}}>
                <h3 style={{textAlign: "center"}}>Pie Chart</h3>
                <Pie
                    options={{
                        title: {
                            display: true,
                            text: `Elements in the atmosphere`
                        },
                        responsive: true,
                    }}
                    data={this.getChartData}
                ></Pie>
            </div>
        );
    }
}
 
export default PieChart;