import React from 'react';
import 'antd/dist/antd.css';
import {Layout, Col, Input, BackTop} from 'antd';
const {Content} = Layout;
const {Search} = Input;

export default function Place()
{
    return(
        <Content style={{ padding: '20px', marginTop: 60}}>
            nội dung ở đây

            
            {/* back top */}
            <div>
                <BackTop />
            </div>
        </Content>
    );
}