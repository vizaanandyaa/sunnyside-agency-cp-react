import { Component } from "react";
import logo from '../logo.svg';
import arrowDown from '../images/icon-arrow-down.svg'
import menu from '../images/icon-hamburger.svg'
import './stylesheet.css'


class Header extends Component{
    render(){
        document.title = 'SunnySide';
        const navBar = [{name :'About', link :'www.aaa'},
                        {name:'Service',link :'www.sasa'},
                        {name:'Projects',link:'www.papa'},
                        {name:'Contact',link:'www.caca'}];
        return(
            <div className="header">
                <div className="headerWrapper">
                    <img className="logo" src={logo} alt="" />
                    <div className="headerNav">
                        <ul>
                            {navBar.map((val,index)=>{
                                return(
                                    <li key={index}><a href={val.link} >{val.name}</a></li>
                                )
                            })}
                        </ul>
                    </div>
                    <button className="hamburger-menu"><img src={menu} alt="" /></button>
                </div>
                
                <h1>WE ARE CREATIVES</h1>
                <img className="arrowDown" src={arrowDown} alt="" />
            </div> 
        );
    }
}

export default Header;