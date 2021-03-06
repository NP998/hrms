import React, { useEffect } from 'react';
import Header from "../../components/header/Header";
import authenticate from "../../hoc/Authenticate";

 function Home(props){
     //make useEffect as comment due to use hoc
    // useEffect(()=>{
    //         if(!props.isloggedIn){
    //             props.history.push("/login")
    //         }
    // },[props.isloggdIn])
    return(
    <div className="home">
        <Header pageHeader="Dashboard"/>
    </div>
    )
}

export default authenticate(Home)