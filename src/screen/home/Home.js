import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from "../../components/header/Header";
import authenticate from "../../hoc/Authenticate";

 function Home(props){
     //make useEffect as comment due to use hoc
    // useEffect(()=>{
    //         if(!props.isloggedIn){
    //             props.history.push("/login")
    //         }
    // },[props.isloggdIn])
    const user=useSelector((state)=>{
         return state.user;
         
    })
   
    return(
    <div className="home">

        <Header pageHeader="Dashboard" userName={`${user.firstName} ${user.lastName}`}/>
        {/* <div>{user.toString()}</div> */}
    </div>
    )
}

export default authenticate(Home)