import { Component } from "react";
import React from "react";
import './stylesheet.css';

class Left extends Component{
    render(){
        return(
            <div>
                <div className="contentLeft">
                    <div className="contentDesc">
                        <div className="wrapper">
                            <h1>{this.props.title}</h1>
                            <p>{this.props.desc}</p>
                            <a href={this.props.link}>LEARN MORE</a>
                        </div>
                    </div>
                    <div className="contentImg">
                        <img src={this.props.image} alt="" />
                    </div>
                </div>

                <div className="contentSwitch">
                 <div className="contentImg">
                    <img src={this.props.image} alt="" />
                </div>
                <div className="contentDesc">
                    <div className="wrapper">
                        <h1>{this.props.title}</h1>
                        <p>{this.props.desc}</p>
                        <a href={this.props.link}>LEARN MORE</a>
                    </div>
                </div>
            </div>
            </div>
            
        )
    }
}
export default Left;