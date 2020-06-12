import React from 'react';
import styles from './card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InfoCard = ({ props }) => {

    const {
        icon,
        title,
        info
    } = props;

    return (
        <div class={styles.card}>
            <FontAwesomeIcon icon={icon} size="5x" />
            <h3>{title}</h3>
            <p>{info}</p>
        </div>
    );
}

export default InfoCard;
