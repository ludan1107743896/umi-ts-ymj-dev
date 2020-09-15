import React, { useEffect } from 'react';
import TabBarComp from './TabBarComp';
import HeaderNav from './headerNav';

const template: React.FC = () => {
    return (
        <div>
            <HeaderNav />
            <TabBarComp />
        </div>
    )
}

export default template;