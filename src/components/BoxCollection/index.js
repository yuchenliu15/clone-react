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
        info,
        inverse
    } = props;

    const imageStyle = { background: `url(${image})` };
    const direction = {flexDirection: 
        inverse? "row-reverse": "row",
    };

    return (
        <div className={styles.container} style={direction}>
            <TextBox title={title} info={info} />
            <div className={styles.image} style={imageStyle} >
            </div>
        </div>
    )
}

export default BoxCollection;