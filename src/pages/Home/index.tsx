import React, { useEffect } from 'react';
import styles from './index.less';

export default () => {
  useEffect(() => {
    let a: Object = {
      b: {
        c: {
          d: 'hello',
        },
      },
    };
    if (a?.b?.c?.d) {
      console.log(1);
    }
  }, []);
  return (
    <>
      <span className={styles.home}>home</span>
    </>
  );
};
