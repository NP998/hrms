import React from 'react';
import {AiOutlineSearch,AiOutlineAmazon} from 'react-icons/ai';
import {MdNotificationsNone} from 'react-icons/md';
import profile_image from "../../screen/image/image.jpg";
import a from "../../screen/image/a-done.jpg";
import images from "../../screen/image/3idiots.jpg";
import Input from "../input/Input";
import {FiSearch} from 'react-icons/fi';
import {BiSend} from 'react-icons/bi';
import { IoIosNotificationsOutline } from "react-icons/io";
import {GoPrimitiveDot} from 'react-icons/go'
import {BsThreeDots} from "react-icons/bs"
import Rightcontainer from '../rightcontainer/Rightcontainer'
export default function Header({pageHeader}){
    return(
    <div className="home-container">   
    <header className="header">
        <div className="page-header">
            <h1>{pageHeader}</h1>
        </div>
        <div className="header-logo">
           {/* <div className="logo1"><AiOutlineSearch/></div> 
           <div className="logo2"><AiOutlineAmazon/></div> 
           <div className="logo3"><MdNotificationsNone/></div>  */}
            <Input icon={<FiSearch/>}  placeholder="search..." className="hover-action" />
            <BiSend className="action-icon" />
            <IoIosNotificationsOutline  className="action-icon"/>
        </div>
        <div className="header-name-pic">
            <h6>Navin Patel</h6>
            <img src={profile_image} alt="image" height="40px" width="40px"/>
        </div>
        </header>
        
        <div className="container">
          <div className="home-left-container">
              <div className="home-left-container-up1">
                
                        <div className="home-left-container-up2">
                            <p className="p1">Good Morning <span >Navin !</span></p>
                            <p className="p2"> Today you have 9 app</p>
                            <p className="p3"> Also yo need hire to new UI </p>
                            <p className="p4"> React Native Devloper</p>
                            <p className="p5"><span> Read More</span></p>
                            
                        </div>
                        <div className="image-tag">    
                            <img src={a} alt="imgs" height="100%" width="60%"/>

                        </div>
              </div>
              <div className="left-container-below " style={{border:"1px solid white",borderRadius:"30px",background:"white"}}>  
              <div className="home-left-container-down">
                    <h3>Recruitment Progress</h3>
                    <button>view all</button>
              </div>
              <div className="left-container-table">
                  <table>
                      <tr>
                            <th>Full Name</th>
                            <th className="first_th">Designation</th>
                            <th className="second_th">Status</th>
                            <th></th>
                      </tr>
                      <tr>
                            <td className="sss">
                                <img src={images} alt="img" height="30px" width="30px" style={{borderRadius:50}}/>
                                <span>Mary G Lolas</span>
                            </td>
                            <td>Project Manager</td>
                            <td><GoPrimitiveDot style={{color:"blue"}}/>  Practical Round</td>
                            <td><BsThreeDots/></td>
                      </tr>
                      <tr>
                            <td className="sss">
                                <img src={images} alt="img" height="30px" width="30px" style={{borderRadius:50}}/>
                                <span>Vinec Jocab</span>
                            </td>
                            <td>UX Designer</td>
                            <td><GoPrimitiveDot style={{color:"blue"}}/>  Practical Round</td>
                            <td><BsThreeDots/></td>
                      </tr>
                      <tr>
                            <td className="sss">
                                <img src={images} alt="img" height="30px" width="30px" style={{borderRadius:50}}/>
                                <span> Nell Brain</span>
                            </td>
                            <td>React Devloper</td>
                            <td><GoPrimitiveDot style={{color:"green"}}/>  Final Round</td>
                            <td><BsThreeDots/></td>
                      </tr>
                      <tr>
                            <td className="sss">
                                <img src={images} alt="img" height="30px" width="30px" style={{borderRadius:50}}/>
                                <span>   Jaidev Bisvas</span>
                            </td>
                            <td>UX Designer</td>
                            <td><GoPrimitiveDot style={{color:"yellow"}}/>  HR Round</td>
                            <td><BsThreeDots/></td>
                      </tr>
                      <tr className="last_row">
                          <td className="one">Showing 4 out of 4 Result</td>
                          <td className="two">view all</td>
                          </tr>
                  </table>
              </div>
             </div> 
          </div>
          <div className="home-right-container">
                <Rightcontainer/>
          </div>
        </div>

    </div> 
    )
}