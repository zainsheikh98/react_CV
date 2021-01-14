import {Component} from "react";

class IntroCard extends Component {

    render(){
       const title = this.props.title;
       const subtitle = this.props.subtitle;
       const clr = {
        backgroundColor : this.props.color,
        color : (this.props.color === "white") ? "navy" : "white"
       }
        return(
            <div style={ clr } className="text-center p-5 mt-2">
                <h3 id="intro-card-title">
                    {title}
                    <br/>
                    <small>
                        {subtitle}
                    </small>
                </h3>
            </div>
        );
    }
}

export default IntroCard;