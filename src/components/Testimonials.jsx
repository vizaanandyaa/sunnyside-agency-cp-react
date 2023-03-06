import { Component } from "react";
import emily from "../images/image-emily.jpg";
import jennie from "../images/image-jennie.jpg";
import thomas from "../images/image-thomas.jpg";
import Customers from "./Customers";

class Testimonials extends Component{
    render(){
        const customData =[{
            profile : emily,
            quotes : 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit',
            name : 'Emily R.',
            position: 'Marketing Director'
        },{
            profile : thomas,
            quotes : "Sunnyside's enthusiasm coupied with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
            name : 'Thomas S.',
            position: 'Chief Operating Officer'
        },{
            profile : jennie,
            quotes : "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
            name : 'Jennie F.',
            position: 'Business Owner'
        }]
        return(
            <div className="testimoni">
                <h4>CLIENT TESTIMONIALS</h4>
                <div className="client">
                    {customData.map((data,index)=>{
                        return(
                            <Customers key={index} photo ={data.profile} quote={data.quotes} name={data.name} position={data.position}/>
                        )
                        
                    })}
                </div>
            </div>
        )
    }
}

export default Testimonials;