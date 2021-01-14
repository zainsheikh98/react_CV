import { Component } from 'react/cjs/react.production.min';
import Link from 'react-scroll/modules/components/Link';

class Card extends Component{
    render(){
        return(
            <div className="d-flex justify-content-center pt-5 pb-5">
                <h1 id="portfolio_heading" className="text-light text-center">
                    Grow Your
                    <br/>
                    <span id="heading_span">Business</span>
                    <br/>
                    <Link activeClass="active" id="neon" to="contact"  spy={true} smooth={true} offset={-170} duration={500} className="contact_link text-light text-center">
                        Join Us
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </Link>
                </h1>
            </div>
        );
    }
}

export default Card;