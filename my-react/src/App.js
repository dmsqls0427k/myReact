import React, { Component } from 'react';
import { BrowserRouter, BrowserRouter as Route, Switch } from 'react-router-dom';
import BarChart from './components/charts/BarChart';
import LineChart from './components/charts/LineChart';
import PieChart from './components/charts/PieChart';
import NavigationBar from './components/navigation/NavigationBar';

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <NavigationBar/>
                <div className="col-md-9">
                    <BrowserRouter>
                        <Switch>
                            <Route path="/line"><LineChart/></Route>
                            <Route path="/bar"><BarChart/></Route>
                            <Route path="/pie"><PieChart/></Route>
                        </Switch> 
                    </BrowserRouter>
                </div>
            </div>
        )
    }
};