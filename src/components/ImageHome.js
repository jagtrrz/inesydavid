import React from "react";
import backgroundImage from "../../static/images/ines-mesa/ines-mesa.jpg";
import { Link } from 'gatsby';

const ImageHome = () => (
    <div className="image-home">
        <div className="background-image" style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className="content">
                <h2>¡NOS CASAMOS!</h2>
            </div>
        </div>
    </div>
);

export default ImageHome