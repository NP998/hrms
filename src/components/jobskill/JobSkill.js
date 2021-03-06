import './_jobskill.scss';
import { useState } from 'react';
import React from 'react';
import List from '../list/List';
function JobSkill() {
  const [inputList,setInputList]=useState(" ");
  const [items,setItems]=useState([]);
  const itemEvent=(event)=>{
     setInputList(event.target.value)
  };
  const listofItems=()=>{
      setItems((oldData)=>{
        return [...oldData,inputList]
      });
      setInputList("")
  }
  const deleteItems=(id)=>{
    console.log("deletedy")
    setItems((oldData)=>{
      return oldData.filter((arrEle,index)=>{
        return index!==id;
      })
    })
}

  return (
    <div className="container">
      <div className="center_card">
            <h3>Job Skill</h3>
            <input type="text" value={inputList} placeholder="add job skill" onChange={itemEvent} />
            <button onClick={listofItems}>+</button>
            <ol>
              
            {items.map( (eleValue,index) =>{
              return <List key={index} id={index} onSelect={deleteItems} text={eleValue} />
            })}
            </ol>
      </div>
    </div>
  );
}

export default JobSkill;
