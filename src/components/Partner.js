import React from 'react';
import styles from './styles/Partner.module.css';

const partner = (props) => (
    <section className={[styles.instructor, styles.topMargin].join(' ')}>
        <h2 className={styles.hide}>Meet The Coach</h2>
        <div className={[styles.backgroundImg, styles.coachImg].join(' ')}></div>
        <div className={styles.biography}>
            <p className={styles.meetCoach}>Meet your training partner</p>
            <p>* Alberto Serrano</p>
            <p>* Black Belt</p>
            <p>* Renzo Gracie Mexico Team </p>
            <p>* 3rd place Panamerican No-Gi IBJJF </p>
            <p>* USA Five Grappling National Champ</p>
            <p>* Metamoris Challenger Florida Champ</p>
            <p>* 5X Mexico National Champ</p>
        </div>
    </section>
);

export default partner;
