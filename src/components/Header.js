import React from 'react';
import styles from './styles/Header.module.css';

const header = (props) => (
        <header className={[styles.banner, styles.style1].join(' ')}>        
            <img className={styles.logo} src="/assets/logo.svg" alt="Logo"/>
            <nav className={styles.menu}> 
                <span className={styles.initialMenu}>
                    <a href="#library">Library</a>
                    <a href="#blog">Blog</a>
                    <a href="#calendar">Calendar</a>
                    <a href="#forum">Forum</a>
                </span>
                <a href="#login">Log In</a>
                <a href="#signup">Sign Up</a>
            </nav>
            <img className={styles.menuIcon} src="/assets/menu.svg" alt="menu"/>
        </header>
);

export default header;