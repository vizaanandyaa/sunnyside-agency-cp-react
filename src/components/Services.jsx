import { Component } from "react";
import imgDeGra from "../images/desktop/image-graphic-design.jpg"
import imgPhoto from "../images/desktop/image-photography.jpg"

class Services extends Component{
    render(){
        return(
            <div className="contentServe">
                <div className="conImgDesc">
                    <img src={imgDeGra} alt="" />
                    <h4>{this.props.title}</h4>
                </div>
            </div>
        )
    }
}
export default Services