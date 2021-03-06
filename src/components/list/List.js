import React from 'react';
import {TiDeleteOutline} from 'react-icons/ti';
import "./_list.scss";
const List=(props)=>{

   
   return(
       <div className="todo_style" >
            
           <li>{props.text}</li>
           <TiDeleteOutline className="logo" style={{color:"red"}} 
            onClick={()=>{
                props.onSelect(props.id)
            }}/>
       </div>
   )
}
export default List;