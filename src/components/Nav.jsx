import { Link } from 'gatsby';
import React from 'react';
import styles from './Nav.module.scss';

const Nav = ( ) => (
  <div className={`${styles.root}`}>
    <div className={`${styles.container}`}>
      <Link to="/"><strong>Jacob Thompson</strong></Link>
      <Link to="mailto:thampsen@gmail.com">thampsen@gmail.com</Link>
    </div>
  </div>
);

export default Nav;
