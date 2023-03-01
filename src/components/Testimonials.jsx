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
            profile : jennie,
            quotes : "Sunnyside's enthusiasm coupied with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
            name : 'Thomas S.',
            position: 'Chief Operating Officer'
        },{
            profile : thomas,
            quotes : "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
            name : 'Jennie F.',
            position: 'Business Owner'
        }]
        return(
            <div >
                <Customers profile ={customData.profile} quotes={customData.quotes} name={customData.name} position={customData.position}/>
            </div>
        )
    }
}

export default Testimonials;