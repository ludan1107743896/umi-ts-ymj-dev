import React from 'react';
import { Layout } from 'antd';
import HeaderContent from './header';
import MenuContent from './menu';
import styles from './index.less';
import config from '../../../config/config'
import MHeader from './Mheader';

const { Header, Content, Sider } = Layout;
const _type = config.type;
export default (props: any) => {

  const getContentComp = (type: string) => {
    if (type == 'mySelf') {
      return (
        <Layout className={styles.container}>
          <MHeader />
        </Layout>
      );
    } else {
      return (
        <Layout className={styles.container}>
          <Header className={styles.contentHeader}>
            <HeaderContent />
          </Header>
          <Layout style={{ padding: 0 }}>
            <Sider width={200} style={{ background: '#fff' }}>
              <MenuContent />
            </Sider>
            <Content className={styles.content}>{props.children}</Content>
          </Layout>
        </Layout>
      )
    }
  }

  return (
    <>{getContentComp(_type)}</>
  );
};
