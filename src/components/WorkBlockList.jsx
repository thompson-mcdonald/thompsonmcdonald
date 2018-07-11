import React from 'react';
import WorkBlock from './WorkBlock';
import styles from './WorkBlock.module.scss';

class WorkBlockList extends React.Component {
  render () {
    let items = [
      { title: 'Release', desc: 'Branding Project', imgUrl: 'http://img.skysports.com/football/badges/64/241.png' },
      { title: 'Liquiproof', desc: 'Influencer Program', imgUrl: 'http://img.skysports.com/football/badges/64/241.png' },
      { title: 'Wisp', desc: 'Early stage Proof of concept', imgUrl: 'http://img.skysports.com/football/badges/64/241.png' },
      { title: 'Spora', desc: 'UI Experiment', imgUrl: 'http://img.skysports.com/football/badges/64/241.png' }
    ];

    return (
      <div className={`${styles.workList}`}>
        {items.map(i => <WorkBlock key={i.title} title={i.title} imgUrl={i.imgUrl} desc={i.desc} />)}
      </div>
    )
  }
};

export default WorkBlockList;
