import React from 'react';
import styles from './styles/VideoLib.module.css';

const videoLibrary = (props) => (
    <section className={styles.videoLibraryhide}>
        <h2 className={styles.sectionTitle}>Video Library</h2>
        <div className={styles.openSection}>
            <div className={[styles.videoShowing, styles.videoBlock].join(' ')}>
                <p className={styles.distributeGrid2}>Omoplata</p>
                <span className={styles.dash}>-</span>
                <div className={[styles.centerVideo, styles.distributeGrid].join(' ')}>
                    <video controls className={[styles.omoplatavideo, styles.controls].join(' ')}>
                        <source src="/assets/video.mp4" type="video/mp4"/>
                    </video>
                </div>     
            </div>
            <div className={styles.videoPlaying}>
                <div className={styles.videoBlock}>
                    <span className={styles.number}>01</span>
                    <p className={styles.inLine}>Closed Guard Omoplata Setups</p>
                    <span className={styles.placeRight}>-</span>
                    <div className={styles.distributeGrid}>
                        <img src="assets/play.svg" alt="Play Icon"/>
                        <p>General Closed Guard</p>
                    </div>    
                    <div className={styles.distributeGrid}>
                        <img src="assets/play.svg" alt="Play Icon"/>
                        <p>Overhook Closed Guard</p>
                    </div>
                    <div className={styles.distributeGrid}>
                        <img src="assets/play.svg" alt="Play Icon"/>
                        <p>Underhook Closed Guard</p>
                    </div>
                    <div className={styles.distributeGrid}>
                        <img src="assets/play.svg" alt="Play Icon"/>
                        <p>Nino / Williams Closed Guard</p>
                    </div>
                    <div className={styles.distributeGrid}>
                        <img src="assets/play.svg" alt="Play Icon"/>                            
                        <p>Pit Stop Closed Guard</p>
                    </div>
                    <div className={styles.distributeGrid}>
                        <img src="assets/play.svg" alt="Play Icon"/>
                        <p>Arm Wrap Closed Guard</p>
                    </div>
                        <div className={styles.distributeGrid}>
                        <img src="assets/play.svg" alt="Play Icon"/>
                        <p>Leg Trap Closed Guard</p>
                    </div>
                </div>
                <div className={styles.videoBlock}>
                    <span className={styles.number}>02</span>
                    <p className={styles.inLine}>Open Guard Omoplata Setups</p>
                    <span className={styles.placeRight}>-</span>
                </div>
                <div className={styles.videoBlock}>
                    <span className={styles.number}>03</span>
                    <p className={styles.inLine}>Half Guard Omoplata Setups</p>
                    <span className={styles.placeRight}>-</span>
                </div>
                <div className={styles.videoBlock}>
                    <span className={styles.number}>04</span>
                    <p className={styles.inLine}>Turtle Omoplata Setups</p>
                    <span className={styles.placeRight}>-</span>
                </div>
            </div>
        </div>
        <div className={styles.closedSections}>
            <div className={styles.videoBlock}>
                <p className={styles.distributeGrid2}>Armlock and Armbar</p>
                <span className={styles.placeRight}>-</span>
            </div>
            <div className={styles.videoBlock}>
                <p className={styles.distributeGrid2}>Triangle Choke</p>
                <span className={styles.placeRight}>-</span>
            </div>
            <div className={styles.videoBlock}>
                <p className={styles.distributeGrid2}>Kimura</p>
                <span className={styles.placeRight}>-</span>                    
            </div>
        </div>
    </section>
);

export default videoLibrary;
