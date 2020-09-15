import React from 'react';
import HeaderComp from "./components/HeaderComp";
import styles from './index.less';

const Demo1: React.FC = () => {
  return (
    <>
      <div className={styles['header-nav-box']}>
        <HeaderComp />
      </div>
    </>
  )
}

export default Demo1;