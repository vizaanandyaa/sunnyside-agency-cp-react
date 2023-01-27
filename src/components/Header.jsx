import { Component } from "react";
import logo from '../logo.svg';
import arrowDown from '../images/icon-arrow-down.svg'
import './stylesheet.css'


class Header extends Component{
    render(){
        return(
            <div className="header">
                <div className="headerNav">
                    <img src={logo} alt="" />
                    <ul>
                        <li><a href="">About</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">Projects</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
                <h1>WE ARE CREATIVES</h1>
                <img src={arrowDown} alt="" />
            </div> 
        );
    }
}

export default Header;