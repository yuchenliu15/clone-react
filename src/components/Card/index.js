import React, {useEffect, useRef} from 'react';
import InfoCard from './InfoCard';
import PersonCard from './PersonCard';
import styles from './card.module.css';
import {useSpring, animated} from 'react-spring';

const withCardsCollection = (Component, title) => ({ cards }) => {

    const ref = useRef();
    const [props, set] = useSpring(() => ({opacity: 0}));

    const handleScroll = () => {
        const posY = ref.current.getBoundingClientRect().top;
        const offset = window.pageYOffset - posY;
        set({opacity: 1 +  offset / 1000})
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    });

    return (
        <animated.div style={props} className={styles.cardContainer} ref={ref} >
            {title ? <div className={styles.title}><h2>{title}</h2></div> : null}
            {cards.map((card, index) => {
                return <Component key={index} props={card} />
            })}
        </animated.div>
    );
}

const InfoWithCardsCollection = withCardsCollection(InfoCard);
const PersonWithCardsCollection = withCardsCollection(PersonCard, "What people are saying...");

export {
    InfoWithCardsCollection,
    PersonWithCardsCollection
};
