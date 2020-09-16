import React, { useEffect, useState } from 'react';
import { Card, Avatar, Row, Col } from 'antd';
import styles from './index.less';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import axios from 'axios';

const { Meta } = Card;
interface baseCardComp { }

interface baseList {
    templateId: string;
    coverImageUrl: string;
    name: string;
    description: string;
    [propName: string]: any;
}
const CardComp: React.FC<baseCardComp> = ({ }) => {
    const [list, setList] = useState([]);
    const url = `https://www.h5ds.com/api/v1/open/templates?page=1&page_size=20&keyword=&categoryId=6&price_type=&order_column=id`;
    useEffect(() => {
        axios.get(url).then(res => {
            let _list = res.data.data.data;
            setList(res.data.data.data);
        })
    }, [])

    const getavatarurl = (num: number) => {
        let avatarurl = ''; 
        if(num>10) {
            avatarurl = `https://cdn.h5ds.com/static/images/avatar_${num - 10}.jpg`
        } else {
            avatarurl = `https://cdn.h5ds.com/static/images/avatar_${num}.jpg`
        }
        return avatarurl;
    }

    const getListCard = (list: baseList[]) =>  {
        return list.map((k,i) => (
            <Col key={k.templateId} className="gutter-row" span={6} style={{marginBottom: '20px'}}>
                <Card
                    style={{ width: 300 }}
                    cover={
                        <img
                            alt="example"
                            src={`${k.coverImageUrl}`}
                            style={{height: "300px"}}
                        />
                    }
                    actions={[
                        <SettingOutlined key="setting" />,
                        <EditOutlined key="edit" />,
                        <EllipsisOutlined key="ellipsis" />,
                    ]}
                >
                    <Meta
                        avatar={<Avatar src={`${getavatarurl(i+1)}`} />}
                        title={`${k.name}`}
                        description={<p style={{whiteSpace: "nowrap",textOverflow: "ellipsis"}}>{`${k.description}`}</p>}
                    />
                </Card>
            </Col>
        ))
    }

    return (
        <div className={styles['out-box-sty']}>
            <Row gutter={16}>
                {getListCard(list)}
            </Row>
        </div>
    )
}

export default CardComp;