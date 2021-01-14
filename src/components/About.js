import { Component } from "react";
import Slider from "./Slider";
import Card from './Card';

class About extends Component {
    render(){
        return(
            <div className="row">
                <div className="col-md-6 mb-5 mt-5">
                    <Card />    
                </div>
                <div className="col-md-6 mb-5 mt-5">
                    <Slider />
                </div>
            </div>
        );
    }
}

export default About;