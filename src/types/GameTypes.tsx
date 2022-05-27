export interface option {
    title:string;
    nextStepId?:number;

}

interface Step{
    StepTextContent: stepTextContent;
    defaultNextStep?: number;
    options:option[];
    
}

export interface stepTextContent{
    question?:string,
    description?: img ,
    answer?:string,
}

export interface img{
    img:string,
}


interface GameType{
    [key : number] :Step;
}

export default GameType;
