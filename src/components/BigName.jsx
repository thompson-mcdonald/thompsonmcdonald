import React from 'react';
import styles from './BigName.module.scss';

const BigName = () => (
  <div className={`${styles.bigname}`}>
    <h2>Ja<span className={`${styles.hidden}`}>cob</span>
    <br />
    Tho<span className={`${styles.hidden}`}>mpson</span></h2>
  </div>
);

export default BigName;
