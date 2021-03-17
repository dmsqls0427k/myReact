import React, { Component } from 'react';
import { Sidenav, Nav } from 'rsuite';

export default class NavigationBar extends Component {
    state = {  }
    render() { 
        return (
            <div style={{ width: 250 }}>
                <Sidenav defaultOpenKeys={['3', '4']}>
                    <Sidenav.Header>
                        <div style={{ padding: 20, fontSize: 16, background: '#34c3ff', color: ' #fff' }}>Custom Charts</div>
                    </Sidenav.Header>
                    <Sidenav.Body>
                        <Nav>
                            <Nav.Item eventKey="1">
                                <a href="/line">Line Chart</a>
                            </Nav.Item>
                            <Nav.Item eventKey="2">
                                <a href="/bar">Bar Chart</a>
                            </Nav.Item>
                            <Nav.Item eventKey="3">
                                <a href="/pie">Pie Chart</a>
                            </Nav.Item>
                        </Nav>
                    </Sidenav.Body>
                </Sidenav>
            </div>
          );
    }
}