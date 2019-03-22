import React from 'react';
import styles from './styles/Map.module.css';
import Aux from '../hoc/Aux';
import index from '../api/index'

const {apiKey} = index
let url = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Renzo+Gracie+Arboledas`

const map = (props) => (
    <Aux>
        <h2 className={styles.sectionTitle}>Academy</h2>
        <div className={[styles.map, styles.topMargin].join(' ')}>
            <iframe
                frameBorder="0" 
                title="ASBJJ Academy"
                width= "100%" 
                height= "100%"
                src={url}>
            </iframe>
        </div>
    </Aux>
);

export default map;


