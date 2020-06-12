import React from 'react';
import styles from './card.module.css';

const PersonCard = ({ props }) => {

    const {
        person,
        title,
        info
    } = props;

    return (
        <div class={styles.card}>
            <img src={person} />
            <h3>{title}</h3>
            <p>{info}</p>
        </div>
    );
}

export default PersonCard;
