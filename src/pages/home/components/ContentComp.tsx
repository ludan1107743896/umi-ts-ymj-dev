import React from 'react';
import CommonTitle from './CommonTitle';

const ContentComp: React.FC = () => {
    return (
        <div style={{background: "#fff"}}>
            <div style={{width: '1000px',margin: '0 auto'}}>
                <CommonTitle title="前沿案例展示" content="以策略 设计 技术 服务为核心，为客户持续创造价值"/>
            </div>
        </div>
    )
}

export default ContentComp;