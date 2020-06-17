import React from 'react';
import styles from './card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSpring, animated } from 'react-spring'


const InfoCard = ({ props }) => {
    const [motion, set] = useSpring(() => ({ fontSize: "5em" }));
    const AnimatedComponent = animated(FontAwesomeIcon);
    const {
        icon,
        title,
        info
    } = props;

    const onMouseEnter = (event) => {
        set({fontSize: "6em"});
    }

    const onMouseLeave = (event) => {
        set({fontSize: "5em"});
    }

    return (
        <div key={title} className={styles.card}>
            <AnimatedComponent icon={icon} style={motion} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
            <h3>{title}</h3>
            <p>{info}</p>
        </div>
    );
}

export default InfoCard;
