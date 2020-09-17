import React from 'react';
import { Dispatch } from 'umi';
import BannerList from './components/BannerList';

interface BaseHome {
    dispatch: Dispatch;
}

const Home: React.FC<BaseHome> = () => {
    return (
        <div>
            <BannerList />
        </div>
    )
}

export default Home;