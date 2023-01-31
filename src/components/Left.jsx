import { Component } from "react";
import React from "react";
import './stylesheet.css';

class Left extends React.Component{
    render(){
        return(
            <div className="content">
                <div className="contentDesc">
                    <h1>{this.props.title}</h1>
                    <p>{this.props.desc}</p>
                </div>
                <div className="contentImg">
                    <img src={this.props.image} alt="" />
                </div>
            </div>
        )
    }
}
export default Left;