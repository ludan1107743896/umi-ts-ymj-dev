import React from 'react';
import { Dispatch } from 'umi';


interface BaseHome {
    dispatch: Dispatch;
}

const Home: React.FC<BaseHome> = () => {
    return (
        <div>
            这是home界面
        </div>
    )
}

export default Home;