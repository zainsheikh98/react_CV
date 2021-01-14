import "../static/loader.css";

const Loader = ()=>{
    return(
        <div className="main">
            <div className="loader">
                <span style={{"--i":1}}><i>l</i></span>
                <span style={{"--i":2}}><i>o</i></span>
                <span style={{"--i":3}}><i>a</i></span>
                <span style={{"--i":4}}><i>d</i></span>
                <span style={{"--i":5}}><i>i</i></span>
                <span style={{"--i":6}}><i>n</i></span>
                <span style={{"--i":7}}><i>g</i></span>
                <span style={{"--i":8}}><i>.</i></span>
            </div>
            <br/>
            <p className="position-relative text-center text-light mt-5" >Please Wait...</p>
        </div>
    );
}

export default Loader;