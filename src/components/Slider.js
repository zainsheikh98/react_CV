import P1 from "../static/Carousel/portfolio-1.jpg";
import P2 from "../static/Carousel/portfolio-2.jpg";
import P3 from "../static/Carousel/portfolio-3.jpg";
import P4 from "../static/Carousel/portfolio-4.jpg";
import P5 from "../static/Carousel/portfolio-5.jpg";

const Slider = ()=>{
    return(
        <div>
            <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-interval="10000">
                    <img src={P1} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item" data-interval="2000">
                    <img src={P2} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src={P3} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src={P4} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src={P5} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
}

export default Slider;