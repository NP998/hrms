import React from "react"
import MyCalendar from "./calendar/MyCalendar";
import Profile from "./profile/Profile";
const Rightcontainer=()=>{
   
    return(
        <div className="right-container">
            <div className="right-up-container">
              <MyCalendar />
            </div>
            <div className="right-down-container">
              <Profile/>
            </div>
        </div>
    )
}

export default Rightcontainer;