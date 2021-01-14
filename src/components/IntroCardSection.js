import IntroCard from "./IntroCard"
import { Component } from "react";
class IntroCardSection extends Component{

    render(){
        return(
            <div>
                <div className="row align-items-center">
                    <div className="section col-md-6">
                        <IntroCard title={"I'm Zain Sheikh"} subtitle={<i className="fa fa-lg fa-code"></i>} color={"white"} />
                    </div>
                    <div className="section col-md-6">
                        <IntroCard title={<i className="fa fa-lg fa-desktop"></i> } subtitle={"Responsive Design"} color={"navy"} />
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="section col-md-6">
                        <IntroCard title={<i className="fa fa-lg fa-mobile-alt"></i> } subtitle={"Responsive Design"} color={"navy"} />
                    </div>
                    <div className="section col-md-6">
                        <IntroCard title={"Creative Web Developer" } subtitle={<i className="fa fa-lg fa-lightbulb"></i>} color={"white"} />
                    </div>
                </div>
            </div>
        );
    }
}
export default IntroCardSection;