import { Link } from 'gatsby';
import React from 'react';
import styles from './SiteTop.module.scss';
import selfie from './../img/self.png'

const SiteTop = () => (
  <div className={`${styles.root}`}>
    <div className={`${styles.gridHalf}`}>
      <img class={`${styles.portrait}`} alt='Jacob' src={selfie} />
    </div>
    <div className={`${styles.gridHalf}`}>
      <p>Hello. My name is Jacob. I am a designer &amp; developer with 5 years experience.</p>
      <p>I've previously worked with <Link to="https://userelease.com">Release</Link>, <Link to="https://wonderbly.com/">Wonderbly</Link> & <Link to="https://jadu.net">Jadu</Link>; in addition to creating a Tim Westwood Soundboard & Oblique Strategies Deck for your personal terminal.</p>
      <p>I'm currently keen to take on any small remote design or development jobs you might need doing; and also having conversations about harm reduction in The Rave.</p>
      <p>You may contact me on <Link to="https://instagram.com/okseenso">Instagram</Link> and find me on <Link to="https://github.com/thompson-mcdonald">Github</Link>.</p>
    </div>
  </div>
);

export default SiteTop;
