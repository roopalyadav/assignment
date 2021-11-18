import React from 'react';
import About from './About';
import aboutImage from '../images/about.png';
import aboutImage1 from '../images/download.png';
import Presentation from './Presentation';
import { Link } from "react-router-dom";
import Feature from './Feature';

export default function Home() {


    return (
        <section>
            <div className="landing-box">
                <div>
                    <h1>Everything you need. Delivered right to your door. We ship you happiness.</h1>
                    <p>We are India's fastest growing Ecommerce Store.</p>
                    <Link to="/products">Shop Now</Link>
                </div>

                <img src="bg.png" alt="landing-pic" />
            </div>

            <Feature />
            <About image={aboutImage} title="Come with all you need for daily life" button="Get the App"  />
            <Presentation />
            <About image={aboutImage1} title="Download and Get the app now" button="Download"  />
        </section>
    )
}
