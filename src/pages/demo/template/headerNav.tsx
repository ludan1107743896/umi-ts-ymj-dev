import React from 'react';
import { Carousel } from 'antd';

const headerNav: React.FC = () => {
    return (
        <Carousel autoplay>
            <div>
                <img style={{ height: '500px', width: '100%' }} src="https://cdn.h5ds.com/static/images/ad1-min.png" alt="" />
            </div>
            <div>
                <img style={{ height: '500px', width: '100%' }} src="https://cdn.h5ds.com/static/images/ad3-min.png" alt="" />
            </div>
            <div>
                <img style={{ height: '500px', width: '100%' }} src="https://cdn.h5ds.com/static/images/ad2-min.png" alt="" />
            </div>
        </Carousel>
    )
}

export default headerNav;