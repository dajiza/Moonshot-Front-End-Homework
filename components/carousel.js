import styles from '../styles/Carousel.module.css';
import { CardA, CardB, CardC, CardD } from './cards';
import React, { useState, useEffect } from 'react';

export default function Carousel() {
    const total = 4;
    const [current, setCurrent] = useState(0);
    const [distance, setDistance] = useState(0);
    const [leftDisplay, setLeftDisplay] = useState(false);
    const [rightDisplay, setRightDisplay] = useState(true);

    const move = (direction) => {
        if (direction === 'left') {
            if (current === 0) {
                return;
            }
            setCurrent(current - 1);
        } else {
            if (total - current <= 3) {
                return;
            }
            setCurrent(current + 1);
        }
    };
    useEffect(() => {
        if (current === 0) {
            setRightDisplay(true);
        } else {
            setRightDisplay(false);
        }
        if (total - current <= 3) {
            setLeftDisplay(true);
        } else {
            setLeftDisplay(false);
        }
        setDistance(current * -29.25);
    }, [current]);

    return (
        <div className={styles.container}>
            <div className={styles.title}>&lt; &shy;Trending Now &gt;</div>
            {/* <div className={styles.mask_left}></div> */}
            <div className={styles.cards}>
                <div className={`${styles.pointer} ${styles.pointer_left}`} style={{ display: leftDisplay ? 'flex' : 'none' }} onClick={() => move('left')}>
                    <div className={`${styles.arrow} ${styles.arrow_left}`}></div>
                </div>
                <div className={styles.carousel} style={{ marginLeft: `${distance}rem` }}>
                    <CardA></CardA>
                    <CardB></CardB>
                    <CardC></CardC>
                    <CardD></CardD>
                </div>
                <div className={`${styles.pointer} ${styles.pointer_right}`} style={{ display: rightDisplay ? 'flex' : 'none' }} onClick={() => move('right')}>
                    <div className={`${styles.arrow} ${styles.arrow_right}`}></div>
                </div>
            </div>
            <div className={styles.mask_right}></div>
        </div>
    );
}
