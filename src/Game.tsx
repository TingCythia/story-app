import GameType from "types/GameTypes";
import Congrats from "./assets/Congrats.png";
import RubrikCube from "./assets/cube2.jpg";
import Averge from "./assets/average.png"
const Game: GameType ={
    1:{
        StepTextContent: {question: "Do you like art more or science more?"},
        options:[ 
        {
			title: "I like art more!",
			nextStepId: 2,
		
		},
        {
            title: "I like science more!",
            nextStepId: 4,
           
        },
    ],
    },
    2:{
        StepTextContent: {
            question: "Can you solve the third-order Rubik's cube?",
            description:{img:RubrikCube}
        },
        options:[ 
          
			{
				title: "Yes, I can solve it!",
				nextStepId: 5,
			},
			{
				title: "Not really!",
				nextStepId: 3,
			},
        ],
    },
    3:{
        StepTextContent:
        {question: "Do you pay attention to the details in life?"},
       
        options: [
			{ title: "Pay attention ", nextStepId:4 },
			{ title: "Not too much paying attention ", nextStepId:6},
		],
    },
    4: {
		StepTextContent:
			{question: "Do you like to live in high-rise buildings?"},
		options: [
			{
				title: "I want to live in high rise building",
				nextStepId: 7,
			},
			{ title: "Dislike", nextStepId: 6 },
            { title: "Not like or dislike ", nextStepId: 5 },
			
		],
	},
    5:{
        StepTextContent: {question:"Do you use a lot of scratch paper when solving math problems?"},
        options:[ 
        {
			title: "A lot !",
			nextStepId: 8,
			
		},
        {
            title: "Very little !",
            nextStepId: 7,
        },
    ],
    },
    6:{
        StepTextContent:
        {question:"Do you often go to escape the room?"},
        
        options: [
            {
                title: "Often !",
                nextStepId: 7,
                
            },
            {
                title: "Never !",
                nextStepId: 9,
            },
            {
                title: "Occasionally!",
                nextStepId: 8,
            },
		],
    },
    7:{
        StepTextContent: {question:"Do you like to play some new games?"},
        options:[ 
        {
			title: "Yes!",
			nextStepId: 8,
		},
        {
            title: "No!",
            nextStepId: 10,
        },
    ],
    },
    8:{
        StepTextContent:
        {question: "What type of person are you?"},
        defaultNextStep: 9,
        options: [
			{ title: "Click to check the answer!" },
		],
    },
    9:{
        StepTextContent:
        {question: "Your logical thinking is average",
        description:{img:Averge},
        answer: "For all kinds of big and small things in life, you can't forget all kinds of details, because your memory is better, but many times you just remember the rules and regulations, but you can't know how to get them. You also think that you don’t need to know, so your logical ability is not particularly strong, but you don’t think this will bring much trouble to your life, because you feel that your memory is excellent, and this aspect can be used in your life. will be of great help to you.",
        },
       
        options: [
            {
                title: "Restart this game again!",
                nextStepId: 1,
            },
		],
    },
    10:{
        StepTextContent:
        {
        description:{img:Congrats},
        question: "your logical thinking is relatively strong",
        answer: "You have been sensitive to number comparison since you were a child. Compared with other students, you always like to play Sudoku. You think this game can exercise your thinking ability. Many times you also find some difficult problems to do. Do you think This is more challenging, this kind of unyielding attitude and pursuing attitude will make you work better in the society. Sometimes you can bring a lot of power to the people around you with your own thinking ability. , they are also very dependent on you, so your social circle is very wide.",
        },
       
        options: [
            {
                title: "Restart this game again!",
                nextStepId: 1,
            },
		],
    },
};

export default Game;