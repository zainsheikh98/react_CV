export default function PersonalInfo(){
    return(
        <div className="alert bg-warning text-dark text-center">
            <h3>
                <i className="fa fa-lg fa-id-card"></i> Personal Information
            </h3>
            <div className="mt-5 mb-5 bg-primary text-left text-light p-2">
                <ul className="list-unstyled">
                    <li className="m-3">
                        <i className="fa fa-lg fa-signature"></i><strong> Name</strong><br/>Sheikh Zain Ul Abidin
                    </li>
                    <li className="m-3">
                        <i className="fa fa-lg fa-user-graduate"></i><strong> Eduaction</strong><br/>Bs Software Engineering
                    </li>
                    <li className="m-3">
                        <i className="fa fa-lg fa-laptop-code"></i><strong> Domain</strong><br/>Full Stack Web Developer
                    </li>
                    <li className="m-3">
                        <i className="fa fa-lg fa-flag"></i><strong> Nationality</strong><br/>Pakistani
                    </li>
                    <li className="m-3">
                        <i className="fa fa-lg fa-calendar-check"></i><strong> Date Of Birth</strong><br/>28<sup>th</sup> of November, 1998
                    </li>
                </ul>
            </div>
        </div>
    );
}