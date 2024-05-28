import React from "react";
import {Col,Row} from "antd";
import './Layout.css';

const LayoutComponent = ({leftColSize, rightColSize, leftContent, rightContent}) => {
    return (
        <div className="layout-container">
        <Row>
        <Col xs={leftColSize.xs} sm={leftColSize.sm} md={leftColSize.md} lg={leftColSize.lg}>
        <div className="content-left">
        {leftContent}
        </div>

        </Col>
        <Col xs={rightColSize.xs} sm={rightColSize.sm} md={rightColSize.md} lg={rightColSize.lg}>
        <div className="content-rigth">
        {rightContent}
        </div>
        </Col>
        </Row>
        </div>
    );
}

export default LayoutComponent;