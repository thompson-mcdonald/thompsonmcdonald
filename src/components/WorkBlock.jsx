import React from 'react';
import styles from './WorkBlock.module.scss';
import PropTypes from 'prop-types';

class WorkBlock extends React.Component {
  render ({ ...props }) {
    const { title } = this.props
    const { desc } = this.props
    const { imgUrl } = this.props

    return <div className={`${styles.gridBlock}`} {...props}>
       <div className={`${styles.blockImg}`}>
         <img src={imgUrl} />
       </div>
       <h3>{title}</h3>
       <p>{desc}</p>
     </div>
  }
};


export default WorkBlock;
