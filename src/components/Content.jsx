import { Component } from "react";
import React from "react";
import Left from "./Left";
import Right from "./Right";
import imgTrans from "../images/desktop/image-transform.jpg";
import imgStand from "../images/desktop/image-stand-out.jpg";
import './stylesheet.css';

class Content extends Component{
    render(){
        const contents = [{
            images : imgTrans,
            title :"Transform your brands",
            description : "We are full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you",
            links : 'www.google.com'
        },{
            images : imgStand,
            title:"Stand out to the right audience",
            description : "Using a collaborative formula of designers, researches, phototographers,videographers, and copywriters, we'll build and extend your brand in digital places",
            links : 'www.youtube.com'
        }]
        return(
            <div>
                {contents.map((content,index)=>{
                    if(index % 2 === 0){
                        return(
                            <Left key={index} image={content.images} desc={content.description} title={content.title} link={content.links} />
                        )
                    }else{
                        return(
                            <Right key={index} image={content.images} desc={content.description} title={content.title} link={content.links} />
                        )
                    }
                })}
                
            </div>
        )
    }
}

export default Content;