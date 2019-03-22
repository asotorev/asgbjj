import React from 'react';
import styles from './styles/Plans.module.css';

const plans = (props) => (
    <section className={[styles.plans, styles.style1, styles.topMargin].join(' ')}>
        <h2 className={styles.item1}>Membership Plans</h2>
        <p></p>
        <p className={styles.item2}>Starter</p>
        <p className={styles.item3}>Pro</p>
        <p className={styles.price}>Free</p>
        <p className={styles.price}>$12</p>
        <p className={styles.plansFeature}>Beginner Videos</p>
        <img src="/assets/check-circle-icon.svg" alt="Check Circle Icon" className={styles.checkIcon}/>
        <img src="/assets/check-circle-icon.svg" alt="Check Circle Icon" className={styles.checkIcon}/>
        <p className={styles.plansFeature}>Intermediate and Advanced Videos</p>
        <img src="/assets/x-circle-icon.svg" alt="Check Circle Icon" className={styles.checkIcon}/>
        <img src="/assets/check-circle-icon.svg" alt="Check Circle Icon" className={styles.checkIcon}/>
        <p className={styles.plansFeature}>Video Updates</p>
        <img src="/assets/x-circle-icon.svg" alt="Check Circle Icon" className={styles.checkIcon}/>       
        <img src="/assets/check-circle-icon.svg" alt="Check Circle Icon" className={styles.checkIcon}/>
        <p className={styles.plansFeature}>Learning Roadmap</p>
        <img src="/assets/x-circle-icon.svg" alt="Check Circle Icon" className={styles.checkIcon}/>
        <img src="/assets/check-circle-icon.svg" alt="Check Circle Icon" className={styles.checkIcon}/>
    </section>
);

export default plans;