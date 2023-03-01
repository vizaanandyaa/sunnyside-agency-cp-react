import { Grid } from "@mui/material";
import { Component } from "react";
import imgDeGra from "../images/desktop/image-graphic-design.jpg"
import imgPhoto from "../images/desktop/image-photography.jpg"
import './stylesheet.css'

class Services extends Component{
    render(){
        return(
            <div className="contServices" >
                <div className="serv1">
                    <div className="servWrapper">
                        <h2>Graphic Design</h2>
                        <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential client's attention</p>
                    </div>
                </div>
                <div className="serv2">
                    <div className="servWrapper">
                        <h2>Photography</h2>
                        <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Services