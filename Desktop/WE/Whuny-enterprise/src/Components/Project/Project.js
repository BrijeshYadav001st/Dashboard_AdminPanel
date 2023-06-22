import React from "react";
import "./Project.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from '../Core/Carousel/Carousel';
import { CarouselData as data } from '../Core/Carousel/CarouselData';
const Projects = () => {

    return (
        <div>
            <h1>Projects</h1>
            <h4>We have done many projects and on going on projects.</h4>
             <div className="carousel-body">
                
             <Carousel 
            data={data} 
            slide={false}
            delay={3000}
            arrow={false}
            next={true}
            previous={true} 
            dots={true}
            width={"700px"}
            height={"400px"}
            // captionHeader={"Projects"}
            // captionText={"Favourite Travel Pictures"} 
            // dark={false}

          />
             </div>
        </div>
       
    )
};

export default Projects;