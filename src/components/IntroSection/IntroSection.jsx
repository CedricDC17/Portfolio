import React from 'react';
import styles from './IntroSection.module.scss';

const IntroSection = () => {
    return (
        <section className={styles.intro}>
            <h1>Je suis Cédric DURGETTO-COURANT,</h1>
            <h2>Bienvenue sur Mon Portfolio!</h2>
            <h3>Je suis un développeur web.</h3>
        </section>
    );
};

export default IntroSection;
