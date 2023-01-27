import { Component } from "react";
import logo from '../logo.svg';


class Header extends Component{
    render(){
        return(
            <div>
                <img src={logo} alt="" />
                <div className="headerNav">
                    <ul>
                        <li></li>
                    </ul>
                </div>
            </div> 
        );
    }
}

export default Header;