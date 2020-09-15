import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import styles from './index.less';
import axios from 'axios';
import ProductionComp from './ProductionComp';

interface baseList {
    name: string;
    content: string;
}

const TabBarComp: React.FC = () => {
    const list = [
        {name: '全部', content: ''},
        {name: '婚礼', content: '1'},
        {name: '活动促销', content: '2'},
        {name: '节日祝福', content: '3'},
        {name: '邀请函', content: '4'},
        {name: '招聘', content: '5'},
        {name: '企业宣传', content: '6'},
        {name: '新品发布', content: '7'},
        {name: '伟大祖国', content: '8'},
        {name: '品牌推广', content: '9'},
        {name: '电子相册', content: '10'},
        {name: '教育培训', content: '11'},
    ]
    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        const url: string = `https://www.h5ds.com/api/v1/open/templates?page=1&page_size=20&keyword=&categoryId=&price_type=&order_column=id`;
        axios.get(url).then(res => {
            setDataSource(res.data.data.data);
        })
    },[])

    const getNavList = (list: baseList[]) => {
        return list.map((k,i) => (
            <Col span={2} key={i} style={{textAlign:"center",cursor: "pointer"}} onClick={() => handleClickNavItem(k.content)}>
                {k.name}    
            </Col>
        ))
    }

    const handleClickNavItem = (index: string) => {
        const url: string = `https://www.h5ds.com/api/v1/open/templates?page=1&page_size=20&keyword=&categoryId=${index}&price_type=&order_column=id`;
        axios.get(url).then(res => {
            setDataSource(res.data.data.data);
        })   
    }

    return (
        <div>
            <Row gutter={16} className={styles['nav-box-sty']}>
                {getNavList(list)}
            </Row>
            <ProductionComp dataSouceList={dataSource}/>
        </div>
    )
}

export default TabBarComp;