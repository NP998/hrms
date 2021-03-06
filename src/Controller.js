import React, { useState } from 'react'
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom'
import DashboardLayout from './components/dashboardLayout/Dashboard'
import Home from "./screen/home/Home";
import Recruitment from "./screen/recruitment/Recruitment"
import Login from "./screen/login/Login";
import ContactDetails from "./screen/contactDetails/ContactDetails";
const Controller=()=>{
    //use for user logged in or not
   // comment state due to use hoc
   // const [isloggedIn,setIsLoggedIn]=useState(false);
    return(
        // 1
       
        //     <Router>
        //        <Dashboardlayout >
        //             <Switch>
        //                 <Route exact path="/" render={(props)=><Home {...props}/>}/>
        //                 <Route  path="/recruitment" render={(props)=><Recruitment {...props}/>}/>
        //              </Switch>
        //         </Dashboardlayout>
        //     </Router>
       

        // 2 after adding authentication 
        //when we cilck in login page then token store in localstorage
       
            <Router>
               {/* { console.log(isloggedIn)} */}
            <Switch>
               <Route  path="/login" render={(props)=><Login {...props} />}/>
               <DashboardLayout >
                     {/* check user is log in or not by pass variable as props in hone page and rmove props {...props} isloggedIn={isloggedIn} */}
                        <Route exact path="/" render={(props)=><Home />} />
                        <Route  path="/recruitment" render={(props)=><Recruitment {...props}/>}/>
                        <Route path="/contactdetails" render={(props)=><ContactDetails/>}/>
                     
                </DashboardLayout>
                </Switch>
            </Router>
       
    )
}

export default Controller;