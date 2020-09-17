import React, { useEffect, useState } from 'react';
import styles from './index.less';
import { Row, Col, Menu } from 'antd';
interface baseMenuList {
    name: string;
    path: string;
}

const Mheader: React.FC = () => {
    const menuList = [
        {name: '首页', path: '/home'},
        {name: '案例欣赏', path: '/example'},
        {name: '服务介绍', path: '/introduce'},
        {name: '新闻动态', path: '/news'},
        {name: '关于我们', path: '/about'}
    ];
    const [activePath, setActivePath] = useState('/home');

    const getMenuContent = (list: baseMenuList[]) => {
        return list.map((k,v) => (
            <Menu.Item key={v} 
                onClick={() => handleClick(k.path)}  
                className={styles[`${activePath == k.path ? 'menu-item-active': 'menu-item-sty'}`]}
            >
                {k.name}
            </Menu.Item>
        ))
    }

    const handleClick = (id: string) => {
        setActivePath(id);
    }
    return (
        <div className={styles['mheader-box']}>
            <div className={styles['mheader-center-box']}>
                <Row>
                    <Col span={8}>
                        <h1>我的网站</h1>
                    </Col>
                    <Col span={16}>
                        <Menu mode="horizontal">
                            {getMenuContent(menuList)}
                        </Menu>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Mheader;