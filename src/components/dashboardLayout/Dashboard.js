import React from 'react'
import {Link,useLocation} from 'react-router-dom';
import {BiHomeAlt} from 'react-icons/bi';
import {BsPeople} from 'react-icons/bs';
import {CgFileDocument} from 'react-icons/cg';
import {VscGraph} from 'react-icons/vsc';
import {FiCalendar,FiSettings} from 'react-icons/fi';
import {AiOutlineContacts} from "react-icons/ai";
import navimage from "../../screen/image/b.jpg"

const navItems=[
    {
        name:"Dashboard",
        icon:<BiHomeAlt/>,
        link:"/"
    },
    {
        name:"Recruitment",
        icon:<BsPeople/>,
        link:"recruitment"
    },
    {
        name:"Onboarding",
        icon:<CgFileDocument/>,
        link:"onboarding"
    },
    {
        name:"Reports",
        icon:<VscGraph/>,
        link:"reports"
    },
    {
        name:"Calender",
        icon:<FiCalendar/>,
        link:"calendar"
    },
    {
        name:"Settings",
        icon:<FiSettings/>,
        link:"settings"
    },
    {
        name:"Contact Details",
        icon:<AiOutlineContacts/>,
        link:"contactdetails"
    }
]

const DashboardLayout=({children})=>{
    const location=useLocation()
    console.log(children)
    return(
        <div className="dashboard-layout">
            <nav className="side-nav-bar">
               <div className="logo-container">
                   <h3>Newton School</h3>
               </div>
               <div className="nav-container">
                    {navItems.map((navItem,index)=>(
                        <Link to={navItem.link}>
                           <div key={index} className={`nav-item ${navItem.link===location.pathname?'selected':""}`}>
                               { navItem.icon}
                               <label className="item-name">{navItem.name}</label>
                           </div>
                        </Link>
                    ))}
               </div>
               <div className="svg-container">
                        <img className="nvimage" src={navimage} alt="image" height="100%" width="100%"/>
               </div>

            </nav>
            <div className="main-container">
              {children}

            </div>
            
        </div>
    )
}

export default DashboardLayout;