import React from 'react';
import EmailForm from '../EmailForm';
import {InfoWithCardsCollection, PersonWithCardsCollection} from '../Card';
import BoxCollection from '../BoxCollection';
import {
	headTitle,
	firstBox, secondBox, thirdBox,
	infoCards, personCards
} from '../../contants';

function App() {

	return (
		<div className="App">
			<EmailForm title={headTitle} />
			<InfoWithCardsCollection cards={infoCards} />
			<BoxCollection props={firstBox} />
			<BoxCollection props={secondBox} />
			<BoxCollection props={thirdBox} />
			{/* <PersonWithCardsCollection cards={personCards} /> */}
		</div>
	);

}

export default App;
