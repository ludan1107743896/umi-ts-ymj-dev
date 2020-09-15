import React from 'react';
import { Menu, Row, Col } from 'antd';
import {Link} from 'umi';

interface baseMenu {
    path: string;
    name: string;
    icon?: string;
}

const HeaderComp: React.FC = () => {
    const _list = [
        {name: '首页', path: '/home'},
        {name: '模板中心', path: '/demo/demo1/template'},
        {name: '更新日志', path: '/updatelog'},
        {name: '商业授权', path: '/sign'},
        {name: '教学中心', path: '/docs'},
        {name: '关于我们', path: '/aboutus'},
        {name: '登陆注册', path: '/login'},
    ]

    const getHeaderContent = (list: baseMenu[])  => {
        return list.map((k,i) => {
            return (
                <Menu.Item key={k.path}>
                    <Link to={k.path}>{k.name}</Link>
                </Menu.Item>
            )
        })
    } 

    return (
        <>
            <Row>
                <Col offset={10}>
                    <Menu mode="horizontal">
                        {getHeaderContent(_list)}
                    </Menu>
                </Col>
            </Row>
        </>
    )
}

export default HeaderComp;