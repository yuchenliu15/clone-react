import firstImage from '../images/bg-showcase-1.jpg';
import secondImage from '../images/bg-showcase-2.jpg';
import thirdImage from '../images/bg-showcase-3.jpg';
import firstPerson from '../images/testimonials-1.jpg';
import secondPerson from '../images/testimonials-2.jpg';
import thirdPerson from '../images/testimonials-3.jpg';

const headTitle = "Build a landing page for your business or project and generate more leads!";

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

const infoCards = [
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

const personCards = [
    {
        person: firstPerson,
        title: "Fully Responsive",
        info: "This theme will look great on any device, no matter the size!"
    },
    {
        person: secondPerson,
        title: "Bootstrap 4 Ready",
        info: "Featuring the latest build of the new Bootstrap 4 framework!"
    },
    {
        person: thirdPerson,
        title: "Easy to Use",
        info: "Ready to use with your own content, or customize the source files!"
    }
];

export const ADD_EMAIL = "ADD_EMAIL";
export const ADD_EMAIL_ERROR = "ADD_EMAIL_ERROR";
export const UPLOAD_EMAIL = "UPLOAD_EMAIL";
export {
    headTitle,
    firstBox,
    secondBox,
    thirdBox,
    infoCards,
    personCards,
}