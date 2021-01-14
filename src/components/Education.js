export default function Education(){
    return(
        <div className="alert bg-success text-dark text-center">
            <h3>
                <i className="fa fa-lg fa-graduation-cap"></i> Education Details
            </h3>
            <div className="mt-5 mb-5 bg-danger text-left p-2 text-light">
                <ul className="list-unstyled">
                    <li className="m-3">
                        <i className="fa fa-lg fa-university"></i>
                        <strong> Bs. Software Engineering</strong>
                        <br/>Government College University, Faisalabad
                        <br/><strong>CGPA   </strong> 3.67
                    </li>
                    <li className="m-3">
                        <i className="fa fa-lg fa-school"></i>
                        <strong> Fsc. Pre-Engineering</strong>
                        <br/>Superior College, Jhang
                        <br/><strong>Obtained Marks   </strong> 890/1100
                        <br/><strong>Percentage   </strong> 81%
                    </li>
                    <li className="m-3">
                        <i className="fa fa-lg fa-chalkboard-teacher"></i>
                        <strong> Matriculation</strong>
                        <br/>Sacred Heart High School, Jhang
                        <br/><strong>Obtained Marks   </strong> 864/1100
                        <br/><strong>Percentage   </strong> 78%
                    </li>
                </ul>
            </div>
        </div>
    );
}