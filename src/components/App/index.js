import React from 'react';
import EmailForm from '../EmailForm';
import InfoCard from '../Card/InfoCard';
import styles from './App.module.css';
import BoxCollection from '../BoxCollection';
import firstImage from '../../images/bg-showcase-1.jpg';
import secondImage from '../../images/bg-showcase-2.jpg';
import thirdImage from '../../images/bg-showcase-3.jpg';


const firstHead = "Build a landing page for your business or project and generate more leads!";



function App() {

	const firstBox = {
		image: firstImage,
		title: "Fully Responsive Design",
		info: `When you use a theme created by Start Bootstrap, you know that the theme will look 
		great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!`,
		inverse: false
	};

	const secondBox = {
		image: secondImage,
		title: "Updated For Bootstrap 4",
		info: `Newly improved, and full of great utility classes, Bootstrap 4 is leading the way in
		mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 4!`,
		inverse: true
	};

	const thirdBox = {
		image: thirdImage,
		title: "Easy to Use & Customize",
		info: `Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper 
		customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!`,
		inverse: false
	};

	return (
		<div className="App">
			<EmailForm title={firstHead} />
			<FirstCardsCollection />
			<BoxCollection props={firstBox} />
			<BoxCollection props={secondBox} />
			<BoxCollection props={thirdBox} />

		</div>
	);

}

const FirstCards = [
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
