import React, { useEffect, useState } from 'react';
import styles from './index.less';
import { Carousel } from 'antd';

interface BaseList {
    imgUrl: string;
    id: string;
}

const BannerList: React.FC = () => {
    const list = [
        {imgUrl: 'http://11551028.s61i.faiusr.com/2/AD0ItILBBRACGAAgsKONywUohPbgggUwgA847gU.jpg', id: '1'},
        {imgUrl: 'http://11551028.s61i.faiusr.com/2/AD0ItILBBRACGAAg06ONywUoiYy0wgcwgA847gU.jpg', id: '2'},
    ]
    const [bannerList, setBannerList] = useState(list);
    const getBannerComp = (list: BaseList[]) => {
        return list.map((k,i) => (
            <div key={k.id}>
                <img src={k.imgUrl} alt="" style={{width: '100%', height: '100%'}}/>
            </div>
        ))
    }
    return (
        <div className={styles['banner-box']}>
            <Carousel autoplay>
                {getBannerComp(bannerList)}
            </Carousel>
        </div>
    )
}
export default BannerList;