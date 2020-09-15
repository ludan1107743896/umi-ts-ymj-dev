import React from 'react';
import styles from './index.less';
import {Row, Col} from 'antd';

export interface BaseDate {
    [propName:string]: string;
}

export interface BaseProduction {
    dataSouceList: BaseDate[]
}

const ProductionComp: React.FC<BaseProduction> = ({dataSouceList}) => {
    const getListComp = (list: BaseDate[]) => {
        return list.map((k,i) => {
            return (
                <div key={k.id} className={styles["template-item"]}>
                    <img src={k.coverImageUrl} />
                    {k.description}
                    <Row>
                        <Col span={2}></Col>
                    </Row>
                </div>
            )
        })
    }

    return (
        <div className={styles['list-box']}>
            {getListComp(dataSouceList)}
        </div>
    )
}

export default ProductionComp;