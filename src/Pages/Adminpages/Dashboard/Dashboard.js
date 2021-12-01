import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
    BrowserRouter,
    Routes,
    Route,
    Outlet
  } from "react-router-dom";
import Dashboardsidebar from './Dashboardsidebar';
import '../Admin.css'
import Dashnav from './Dashnav';
const Dashboard = () => {
    return (
        <div className="container-fluid">
            <Dashnav></Dashnav>
            <Row className="justify-content-center">
                <Col lg={2} sm={12} md={5}>
                    <Dashboardsidebar></Dashboardsidebar>
                </Col>
                <Col lg={10} sm={12} md={7}>
                    <Outlet/>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;