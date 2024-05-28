import React from "react";
import {Col,Row} from "antd";
import './Layout.css';
import FormLogin from "../FormLogin";
import ImagenLogin from "../ImagenLogin";

const LayoutComponent = ({leftColSize, rightColSize, leftContent, rightContent}) => {
    return (
        <div className="layout-container">
        <Row>
        <Col xs={leftColSize.xs} sm={leftColSize.sm} md={leftColSize.md} lg={leftColSize.lg}>
        <div className="content-left">
        <ImagenLogin />
        </div>

        </Col>
        <Col xs={rightColSize.xs} sm={rightColSize.sm} md={rightColSize.md} lg={rightColSize.lg}>
        <div className="content-rigth">
        <FormLogin />
        </div>
        </Col>
        </Row>
    </div>
    );
}

export default LayoutComponent;