import React, { useState, useEffect, useRef } from 'react';
import styles from './SlideInFromSideSection.module.scss';

const SlideInFromSideSection = (props) => {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const currentRef = domRef.current;
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!isVisible && entry.isIntersecting) {
                    setVisible(true);
                }
            });
        }, { threshold: 0.1 }); 

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [isVisible]); 

    return (
        <div
            className={`${styles.slideInFromSideSection} ${isVisible ? styles.isVisible : ''}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
};

export default SlideInFromSideSection;
