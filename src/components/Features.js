import React from 'react';
import styles from './styles/Features.module.css';

const features = (props) => (
    <section className={[styles.backgroundImg, styles.topMargin].join(' ')}>
        <h2 className={styles.hide}>Features</h2>
        {/* <img src="assets/Img_Mat.png" alt="Mat" className={styles.images}/> */}
        <div className={styles.test}>
            <div className={[styles.feature, styles.feature1].join(' ')}>
                <p>Techniques that have been tested on the mat</p>
                <p className={styles.featureContent}>Clear, concise videos covering the most effective techniques and strategies that most experienced grapplers use on the mat</p>
            </div>
            <div className={[styles.feature, styles.feature2].join(' ')}>
                <p>Top quality videos</p>
                <p className={styles.featureContent}>Professionally filmed and edited videos designed to maximize ease of learning. Thousands of  minutes of instruction broken down  into positions, transitions, and submissions</p>
            </div>
            <div className={[styles.feature, styles.feature3].join(' ')}>
                <p>In-depth instructionals</p>
                <p className={styles.featureContent}>Looking for the right sources when you start training could be frustrating. But no more with the right tools at your disposal.</p>
            </div> 
        </div>
    </section>
);

export default features;



