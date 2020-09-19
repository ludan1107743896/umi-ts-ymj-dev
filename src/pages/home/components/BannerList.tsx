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
            <div key={k.id} >
                <div className={styles['banner-comp']} style={{height:"750px"}}>
                    <img src={k.imgUrl} alt="" style={{ height: '750px', position: 'absolute'}} />
                    {getBannerContent(k)}
                </div>
            </div>
        ))
    }

    const getBannerContent = (item: BaseList) => {
        switch(item.id){
            case "1":
                return (
                    <div className={styles['banner1-box']}>
                        <h1>一家以创意为导向的广告公司</h1>
                        <article>
                            我们相信品牌要获得实效，创意是强有力的解决武器，团队主力成员皆拥有十余年4A广告经验，我们相信能不断产出优质精良、耳目一新的作品，才是较好的企业介绍！
                        </article>
                    </div>
                );
            case "2":
                return (
                    <div className={styles['banner2-box']}>
                        <article>
                            团队主力成员皆拥有十余年4A广告经验，我们相信能不断产出优质、精良
                            耳目一新的作品，才是较好的企业介绍
                        </article>
                    </div>
                );
            default:
                return null;
        }
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