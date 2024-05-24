import React from "react";
import {Col,Row} from "antd";
import './Layout.css';
import FormLogin from "../FormLogin";
import ImagenLogin from "../ImagenLogin";

const LayoutComponent = () => {
    return (
        <div className="layout-container">
        <Row>
        <Col xs={0} sm={0} md={4} lg={6}>
        <div className="content-left">
        <ImagenLogin />
        </div>
        </Col>
        <Col xs={24} sm={24} md={20} lg={18}>
        <div className="content-rigth">
        <FormLogin />
        </div>
        </Col>
        </Row>
        {/*
        <Row>
        <Col xs={24} sm={24} md={20} lg={18}>
        <div className="content-left">
        <h1 className="title">Derecha</h1>
        </div>
        </Col>
        </Row>
    */}
        </div>
    );
}

export default LayoutComponent;