import ItemTypes from "./ItemTypes";
export interface option {
    title:string;
    nextStepId?:number;
    required?: ItemTypes[];
    newState?: Partial<Record<ItemTypes, boolean>>;
}

interface Step{
    StepTextContent: stepTextContent;
    defaultNextStep?: number;
    options:option[];
    
}

export interface stepTextContent{
    question?:string,
    description?: img ,
}

export interface img{
    img:string,
}


interface GameType{
    [key : number] :Step;
}

export default GameType;
