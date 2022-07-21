import { Prompt } from "../prompt"
import { useState } from "react";


export const Message = (props) => {

    const [promptHover, setPromptHover] = useState(false);
    
    return(
        <div onMouseLeave={() => setPromptHover(false)} onMouseOver={() => setPromptHover(!promptHover)}
		    key={props.index} 
		    className={props.indef === localStorage.getItem('indef') ? 'chat_content__wrapper_box owner-message' : 'chat_content__wrapper_box'}
		>
		<div 
			style={props.indef === localStorage.getItem('indef') ? {color: '#326fa8'} : {}}
			className="chat_content__wrapper_userName">{props.fullname}
		</div>
		<div>{props.message}</div>
        <div className="prompt-container">
            {promptHover && <Prompt timestamp={props.timestamp}/>}
        </div>
		</div>
    )
}