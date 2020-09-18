import React from 'react'; 
import './header.css';
import './_mobile-header.css';
import Logo from '../../images/jubileeLogo-removebg.png';
import SearchBar from '../search-bar/index';
const Header = () =>{
const title = "JUBILEE";
const subTitle = "Find the names of songs playing around you";
    return(
        <div>
           <div className = "header">
                <img className = "header-logo" src={Logo} alt="Jubilee Logo"/>
               <div className = "header-title">
                   {title}
               </div>
               <div className = "header-subtitle">
                   {subTitle}
               </div>
               <div  className = "header-search-bar">
                    {/* <SearchBar/> */}
               </div>
               
           </div>
        </div>
    );
}
export default Header;