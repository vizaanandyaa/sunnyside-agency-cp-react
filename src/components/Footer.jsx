import { Component } from "react";
import logo from '../logo.svg';
import './stylesheet.css';

class Footer extends Component{
    render(){
        const footbar = [{name :'About', link :'www.aaa'},
        {name:'Service',link :'www.sasa'},
        {name:'Projects',link:'www.papa'}];

        const socmed =[{icon :'facebook', link : 'www.facebook.com'},
        {icon :'instagram', link :'www.instagram.com'},
        {icon : 'twitter', link :'www.twitter.com'},
        {icon :'pinterest', link:'www.pinterest.com'}]
        return(
            <div className="footer">
                <img src={logo} alt="" />
                <ul>
                    <li><a href="">About</a></li>
                </ul>
                <ul>
                    <a href=""><img src="" alt="" /></a>
                </ul>
            </div>
        )
    }
}

export default Footer;