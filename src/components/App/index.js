import React from 'react';
import EmailForm from '../EmailForm';
import InfoCard from '../Card/InfoCard';
import styles from './App.module.css';

const firstHead = "Build a landing page for your business or project and generate more leads!";

function App() {

	return (
		<div className="App">
			<EmailForm title={firstHead} />
			<FirstCardsCollection />
		</div>
	);

}

const FirstCards =[
	{
		icon: "laptop",
		title: "Fully Responsive",
		info: "This theme will look great on any device, no matter the size!"
	},
	{
		icon: "book",
		title: "Bootstrap 4 Ready",
		info: "Featuring the latest build of the new Bootstrap 4 framework!"
	},
	{
		icon: "check",
		title: "Easy to Use",
		info: "Ready to use with your own content, or customize the source files!"
	}
];

const FirstCardsCollection = () => {

	return (
		<div class={styles["card-container"]}>
			{FirstCards.map(para => {
				return <InfoCard props={para} />
			})}
		</div>
	)
}

export default App;
