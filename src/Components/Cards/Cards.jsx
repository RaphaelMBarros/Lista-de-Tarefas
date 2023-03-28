import React from "react";
import { useState, useEffect, useRef } from "react";
import "./Card.css"

const Card = ({name}) => {
    const [showInput, setShowInput] = useState(false)
    const [taskArray, setTaskArray] = useState([])
    const [input, setInput] = useState("")

    const addTask = ()=> {
        if (input.trim()) {
            setTaskArray([...taskArray, input]); setInput("");
          setShowInput(false)}};

    const removeTask = (index) => {
      const newtaskArray = taskArray.filter((_,i) => i !== index);
      setTaskArray(newtaskArray);
    };        

    return (    
        <div className="div-card">
            <h3>{name}</h3>
            <button className="add-card" onClick={()=> setShowInput(true)}>Clique para adicionar um cartão</button>
            {showInput ? 
            <div className="textarea">

                <textarea
                className="textarea"
                type="text"
                value={input}
                onChange={(e)=> setInput(e.target.value)}></textarea>
                
                <div className="div-btn">
                    <button className='add-btn' onClick={addTask}>Adicionar Cartão </button>
                    <button className="cancel-btn" onClick={()=> setShowInput(false)}>Cancelar</button>
                </div> 
                
            </div> : <></>
            
            } 

<ul>
                {taskArray.map((task, index) => (  
                    
                        <li key={index} className="listaTarefas" ><p>{task}</p>
                        <button className="removeTask" onClick={() => removeTask(index)}>
                            X
                        </button>   
                        </li>
                        )    
                    )}
                    
                    
                    
                </ul>
              
        </div>          

    )
}



export default Card;