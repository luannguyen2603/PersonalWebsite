import theScreeningRoom from '../assets/theScreeningRoom.jpg';
import cowboysVsAliens from '../assets/cowboysVsAliens.jpg';
import artworked from '../assets/artworked.jpg';
import theOverlook from '../assets/theOverlook.jpg';
import picasso from '../assets/picasso.jpg';
import communityConnect from '../assets/communityConnect.jpg';

const projects = [
	{
		id: 1,
		title: 'Etherity',
		description:
			'A full-stack web app that allow user to bid valuable item to charity organization.',
		repoLink: 'https://github.com/luannguyen2603/etherity',
		image: picasso,
		role: 'Full-Stack Engineer',
		weekDuration: 'Ongoing 1',
		technologies1: ['React', 'MongoDB', 'Express', 'Redux', 'Node.js'],
		technologies2: []
	},
	{
		id: 2,
		title: 'AttritionPrediction',
		description:
			'This is a simple web application that uses machine learning to predict the attrition of an employee bases on several features.',
		repoLink: 'https://github.com/luannguyen2603/Attrition-Prediction',
		image: theScreeningRoom,
		role: 'Full-Stack Engineer',
		weekDuration: 1,
		technologies1: ['Flask', 'Python', 'panda', 'Scikit-learn'],
		technologies2: []
	},
	{
		id: 3,
		title: 'See Fruit',
		description:
			'See Fruit is an iOS app that displays an Augmented Reality descriptions and models of different type of fruits.',
		repoLink:
			'https://github.com/luannguyen2603/See_Fruit',
		image: communityConnect,
		role: 'Front-End Engineer',
		weekDuration: 2,
		technologies1: ['ReactNative', 'Swift', 'Xcode', 'Google Firebase'],
		technologies2: ['MLCore', 'IBM Watson']
	}
	
];

export default projects;
