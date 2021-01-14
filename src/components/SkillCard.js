import { Component } from "react";
import {Link} from "react-router-dom"

export default class SkillCard extends Component{
    render(){
        const skills = this.props.skills;
        return(
            <div className="card middle">
                <div className="front">
                    <div className="">
                        <h3 className="front-heading text-center bg-white text-dark font-weight-bold">{this.props.heading}</h3>
                    </div>
                    <img src={this.props.img} alt="card" />
                </div>	
                <div className="back">
                    <h5 className="text-center text-light bg-danger p-5">My Skills</h5>
                    <div className="back-content middle">
                        {
                            skills.map(
                                (skill, ind)=> {
                                    return(
                                        <h6 key={ind} id="text" className="font-weight-bold">
                                            {skill}
                                        </h6>
                                    )
                                }
                            )
                        }
                        <div className="sm">
                            <Link to="#" className="nav-link"><i className="fab fa-facebook-f"></i></Link>
                            <Link to="#" className="nav-link"><i className="fab fa-twitter"></i></Link>
                            <Link to="#" className="nav-link"><i className="fab fa-youtube"></i></Link>
                            <Link to="#" className="nav-link"><i className="fab fa-instagram"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}