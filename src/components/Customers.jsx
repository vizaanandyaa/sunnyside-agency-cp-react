import { Component } from "react";

class Customers extends Component{
    render(){
        return(
            <div className="person">
                <img src={this.props.photo} alt="" />
                <p className="quote">{this.props.quote}</p>
                <h5>{this.props.name}</h5>
                <p className="position">{this.props.position}</p>
            </div>
        )
    }
}

export default Customers;