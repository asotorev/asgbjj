import React from 'react';
import styles from './styles/Advantages.module.css';

const advantages = (props) => (
    <section className = {styles.advantages}>
        <div className = {styles.block}>
            <img src="/assets/check.svg" alt="Check Circle Icon" className = {styles.checkIcon}/>
            <p className = {styles.blockTitle}>A structured learning path</p>
            <p className = {styles.blockContent}>No more confusion about where to start and what's next</p>
        </div>
        <div className = {styles.block}>
            <img src="/assets/check.svg" alt="Check Circle Icon" className = {styles.checkIcon}/>
            <p className = {styles.blockTitle}>Track your progress</p>
            <p className = {styles.blockContent}>Keep a record of the techniques you already know</p>
        </div>
        <div className = {styles.block}>
            <img src="/assets/check.svg" alt="Check Circle Icon" className = {styles.checkIcon}/>
            <p className = {styles.blockTitle}>Over 500 Jiujitsu videos</p>
            <p className = {styles.blockContent}>Get access to all existing and upcoming videos in the site</p>
        </div>       
    </section>
);

export default advantages;
