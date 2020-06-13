import React from 'react';
import InfoCard from './InfoCard';
import PersonCard from './PersonCard';
import styles from './card.module.css';

const withCardsCollection = (Component, title) => ({ cards }) => {
    return (
        <div className={styles.cardContainer}>
            {title ? <div className={styles.title}><h2>{title}</h2></div> : null}
            {cards.map((card, index) => {
                return <Component key={index} props={card} />
            })}
        </div>
    );
}

const InfoWithCardsCollection = withCardsCollection(InfoCard);
const PersonWithCardsCollection = withCardsCollection(PersonCard, "What people are saying...");

export {
    InfoWithCardsCollection,
    PersonWithCardsCollection
};