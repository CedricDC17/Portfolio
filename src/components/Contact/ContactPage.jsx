import React from 'react';
import styles from './ContactPage.module.scss';

const ContactPage = () => {
  return (
    <div className={styles.main}>
      <iframe className={styles.form} title='messageForm' src="https://docs.google.com/forms/d/e/1FAIpQLScXL-_VDFykb2g1B4Pi2uDufD9UhYqtJqHujSFSPLd4DXxKFQ/viewform?embedded=true" width="100%" height="800" frameBorder="0" marginHeight="0" marginWidth="0">Chargement…</iframe>
    </div >
  );
};

export default ContactPage;
