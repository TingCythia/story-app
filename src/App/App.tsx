
import React,{useState} from "react";
import Game from "../Game";

import "./App.scss"

const App: React.FC = () => {

/*     function useState<S>(initialState: S | (() => S)): [S,             Dispatch<SetStateAction<S>>];
     convenience overload when first argument is omitted
   
      Returns a stateful value, and a function to update it. */
     
    const [stepId, setStepId] = useState(1);

    const step = Game[stepId]

    const onOptionClick = (i : number) => {
        const thisOption = step.options[i];
        if(step.defaultNextStep){
            setStepId(step.defaultNextStep)
        }else if (thisOption.nextStepId){
            setStepId(thisOption.nextStepId)
        }
    };

/*  \\ Want to check the state and disable one of button when is false\\ 
    const checkState = (option: boolean) => {
        option = false || true;
		
		if (step.options) {
			step.options.forEach((item) => {
				if (item.newState === false) {
					option = false;
				} else if (item.newState=== true){
                    option = true;
                }
			});
		}
		if (option) return "disabled";
		else return "";
	}; */

return (
<div className="app">
<img src={step.StepTextContent.description?.img } /> 
<div className="question">{step.StepTextContent?.question}
</div> 

<div className="answer">{step.StepTextContent?.answer}</div> 

{
/* Now use map to looking all the options and the number  */
/* Let button set the key as index, set a onclick function to look for the index*/ 
}

<div className="options">
{step.options.map((option, index)=> (
    <button 
    key={index}
    /* className={checkState(option.newState===true || false)} */
    onClick={()=>{
        onOptionClick(index);
    }}
    >{option.title}</button>
))}
</div>


</div>
);

};

export default App;