import { Component } from "react";

class Customers extends Component{
    render(){
        return(
            <div className="customer">
                <img src={this.props.photo} alt="" />
                <p>{this.props.quote}</p>
                <h5>{this.props.name}</h5>
                <p>{this.props.position}</p>
            </div>
        )
    }
}

export default Customers;