import SkillCard from "./SkillCard"
import {Component} from "react";
import front from "../static/frontend.jpg";
import back from "../static/backend.jpg";
import database from "../static/database.jpg";



export default class Skills extends Component{

    render(){
        const cardData = [
            {
                heading: "Front-End",
                skills: ["HTML 5", "CSS 3", "JavaScript", "Bootstrap"],
                img: front
            },
            {
                heading: "Back-End",
                skills: ["Python", "Django", "PHP", "NodeJs"],
                img: back
            },
            {
                heading: "DataBase",
                skills: ["Postgress", "SQL", "SQLite 3", "MongoDB"],
                img: database
            }
        ]

        return(
            <div className="row overflow-hidden full-width">
                {
                cardData.map((val, ind) =>{
                    return(
                        <div id="Skills" key={ind} className="section p-5 mb-5 mt-5 col-md-4 col-12">
                            <SkillCard heading={val.heading} skills={val.skills} colors={val.colors} img={val.img} />
                        </div>
                    )
                })
                }
            </div>
        );
    }
}