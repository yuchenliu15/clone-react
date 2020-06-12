import React from 'react';
import styles from './box.module.css';

const TextBox = ({ title, info }) => {
    return (
        <div className={styles.textContainer}>
            <div className={styles.content}>
                <h2>{title}</h2>
                <p>{info}</p>
            </div>

        </div>
    )
}

const BoxCollection = ({ props }) => {

    const {
        image,
        title,
        info
    } = props;

    return (
        <div className={styles.container}>
            <TextBox title={title} info={info} />
            <img className={styles.image} alt="imagsdsade" src={image} />
        </div>
    )
}

export default BoxCollection;