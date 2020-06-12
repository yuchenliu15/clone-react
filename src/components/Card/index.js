import React from 'react';
import InfoCard from './InfoCard';
import styles from './card.module.css';


const FirstCardsCollection = ({firstCards}) => {

	return (
		<div class={styles.cardContainer}>
			{firstCards.map(para => {
				return <InfoCard props={para} />
			})}
		</div>
	)
}

export {
    FirstCardsCollection
}