import React from 'react';
import InfoCard from './InfoCard';
import PersonCard from './PersonCard';
import styles from './card.module.css';


const FirstCardsCollection = ({ cards }) => {

    return (
        <div className={styles.cardContainer}>
            {cards.map((para, index) => {
                return <InfoCard key={index} props={para} />
            })}
        </div>
    )
}

const SecondCardsCollection = ({ cards }) => {

    return (
        <div className={styles.cardContainer}>
            <div className={styles.title}><h2>What people are saying...</h2></div>
            {cards.map((para, index) => {
                return <PersonCard key={index} props={para} />
            })}
        </div>
    )
}

export {
    FirstCardsCollection,
    SecondCardsCollection
};