import GameType from "types/GameTypes";
import Cuteimage from "./assets/OhNo.png";
import Congrats from "./assets/Congrats.png"
const Game: GameType ={
    1:{
        StepTextContent: {question: "Are you ready to continue?"},
        options:[ 
        {
			title: "Yes, please take me to the next step!",
			nextStepId: 2,
			newState: { Mobile: false },
		},
        {
            title: "We dont accept No, so we will send you to another portal!",
            nextStepId: 3,
            newState: { MasterKey: false },
        },
    ],
    },
    2:{
        StepTextContent: {question: "In front of you have two doors, which one you will enter?"},
        options:[ 
          
			{
				title: "This door will send you to the past, the item you can bring is a smart phone!",
				required: ["Mobile"],
				newState: { Mobile: true },
				nextStepId: 5,
			},
			{
				title: "This door will send you to the future, the item you need is a master key!",
				required: ["MasterKey"],
				newState: { MasterKey: true },
				nextStepId: 6,
			},
        ],
    },
    3:{
        StepTextContent:
        {question: "Because you haven't choose to come here, we automatically send you to the past, but you can choose the time you want to visit"},
        defaultNextStep: 4,
        options: [
			{ title: "20 years ago!" },
			{ title: "50 years ago!" },
		],
    },
    4: {
		StepTextContent:
			{question: "Now you are in the past, if you want to come back you need to looking for a master key to open time portal?"},
		options: [
			{
				title: "I want to stay and look for the key!",
				required: ["MasterKey"],
				newState: { MasterKey: true},
				nextStepId: 5,
			},
			{ title: "I want to go for another method!", nextStepId: 7 },
			
		],
	},
    5:{
        StepTextContent: {question:"After several days search job, you got some information about the master key, now what you want to do?"},
        options:[ 
        {
			title: "Use the phone to locate the key, but have to wait the phone have signal!",
			nextStepId: 6,
			
		},
        {
            title: "Gain more information from local people then decide which way to go!",
            nextStepId: 8,
            newState: { MasterKey: true },
        },
    ],
    },
    6:{
        StepTextContent:
        {question:"You are waiting several days but the phone still no signal, so you want to?"},
        defaultNextStep: 9,
        options: [
			{ title: "Continue to wait the signal!" },
			{ title: "Make a new phone!" },
		],
    },
    7:{
        StepTextContent: {question:"Here we have 2 options for you, which one you like to choose?"},
        options:[ 
        {
			title: "You believe there must be a time portal to travel back, so you start to search for clues and build the full picture for yourself !",
			nextStepId: 10,
			newState: { Mobile: true },
		},
        {
            title: "Moving on 8!",
            nextStepId: 8,
            newState: { MasterKey: true },
        },
    ],
    },
    8:{
        StepTextContent:
        {question: "GO straight to 9?"},
        defaultNextStep: 9,
        options: [
			{ title: "You only way out !" },
		/* 	{ title: "Open the door!" }, */
		],
    },
    9:{
        StepTextContent:
        { description:{img:Cuteimage}},
       
        options: [
            { title: "Oh No ! You are stuck in the past foreve!" },
            {
                title: "Restart the game!",
                nextStepId: 1,
            },
		],
    },
    10:{
        StepTextContent:
        
        { description:{img:Congrats},
          question:"Finally! You made it! After your hardwork and make the way out!"
        },
       
        options: [
            {
                title: "Restart the game!",
                nextStepId: 1,
            },
        ],
    },
};

export default Game;