import { Component } from "react";
import './stylesheet.css';

class Right extends Component{
    render(){
        return(
            <div className="content">
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
        )
    }
}

export default Right;