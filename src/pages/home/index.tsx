import React from 'react';
import { Dispatch } from 'umi';
import BannerList from './components/BannerList';
import ContentComp from './components/ContentComp';

interface BaseHome {
    dispatch: Dispatch;
}

const Home: React.FC<BaseHome> = () => {
    return (
        <div>
            <BannerList />
            <ContentComp />
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
        </div>
    )
}

export default Home;