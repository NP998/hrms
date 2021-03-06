import React from "react";
import profile_image from "../../../screen/image/image.jpg";
import {IoMdCall} from "react-icons/io";
import {AiOutlineMail,AiOutlineEllipsis} from "react-icons/ai";

const Profile=()=>{
    return(
        <div className="profile_container">

            <div className="avatar">
               <img src={profile_image} alt="image" height="40px" width="40px"/>
               <div className="profile_name">
                    <pre><span style={{fontWeight:"900"}}>Navin Patel</span><br></br>
                    Full Stack Devloper</pre>
               </div>
            </div>

            <div className="logo">

                   <div className="logo1"> <IoMdCall/></div>
                   <div className="logo2"> <AiOutlineMail/></div>
                    <AiOutlineEllipsis/>
            </div>

            <div className="about">
                <div className="about1">
                    <h6>Joined Date</h6>
                    <h6>Project</h6>
                    <h6>Accomoplishment</h6>
                </div>
                <div className="about2">
                    <h6>18-Apr-2020</h6>
                    <h6>8 Active</h6>
                    <h6>42</h6>
                </div>
            </div>

            <div className="btn">
               <button>view more</button>
            </div>
         
        </div>
    )
}

export default Profile;