import { Component } from "react";
import logo from '../logo.svg';
import arrowDown from '../images/icon-arrow-down.svg'
import './stylesheet.css'


class Header extends Component{
    render(){
        const navBar = [{name :'About', link :'www.aaa'},
                        {name:'Service',link :'www.sasa'},
                        {name:'Projects',link:'www.papa'},
                        {name:'Contact',link:'www.caca'}];
        return(
            <div className="header">
                <div className="headerNav">
                    <img src={logo} alt="" />
                    <ul>
                        {navBar.map((val,index)=>{
                            return(
                                <li><a href={val.link} key={index}>{val.name}</a></li>
                            )
                        })}
                    </ul>
                </div>
                <h1>WE ARE CREATIVES</h1>
                <img className="arrowDown" src={arrowDown} alt="" />
            </div> 
        );
    }
}

export default Header;