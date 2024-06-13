import React from 'react';
import { Col, Row } from 'antd';


import './Layout.css'
const Layoutcomponent = ({leftColSize, rightColSize, leftContent, rightContent }) => {
    return (
        <div className="layout-container">
            <Row>
                <Col xs={leftColSize.xs} sm={leftColSize.sm} md={leftColSize.md} lg={leftColSize.lg}>
                    <div className="content-left">
                        {leftContent}
                    </div>
                </Col>
           
                <Col xs={rightColSize.sx} sm={rightColSize.sm} md={rightColSize.md} lg={rightColSize.lg}>
                    <div className="content-right">
                        {rightContent}
                    </div>
                </Col>
            </Row>
    
        </div>
    );
}

export default Layoutcomponent;