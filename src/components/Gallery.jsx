import { Component } from "react";
import milk from "../images/desktop/image-gallery-milkbottles.jpg";
import orange from "../images/desktop/image-gallery-orange.jpg"
import cone from "../images/desktop/image-gallery-cone.jpg"
import sugar from "../images/desktop/image-gallery-sugarcubes.jpg"

class Gallery extends Component{
    render(){
        const images = [milk,orange,cone,sugar]
        return(
            <div className="gallery">
                {images.map((image,index)=>{
                    return(
                        <img key={index} src={image} alt="" />
                    )
                })}
            </div>
        )
    }
}

export default Gallery;