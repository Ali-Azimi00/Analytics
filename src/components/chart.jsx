import React, { Component } from "react";
import Chart from "react-apexcharts";

class App extends Component {



    constructor(props) {
        super(props);
        console.log('super', props.type)
        this.state = {
            options: {
                chart: {
                    id: props.type,
                    toolbar: {
                        show: false,
                    }
                },
                xaxis: {
                    categories: [1991, 1992, 1993, 1994]
                }
            },
            series: [
                {
                    name: "series-1",
                    data: [30, 40, 45, 50]
                },
                {
                    name: "series-2",
                    data: [50, 50, 35, 0]
                }
            ],
            // chartType: super.type

        };
    }

    render() {
        return (
            <div className="app">
                <div className="row">
                    <div className="mixed-chart" >
                        <Chart
                            options={this.state.options}
                            series={this.state.series}
                            type={this.props.type}
                        // width="80%"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;