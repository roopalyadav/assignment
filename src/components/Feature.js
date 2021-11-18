import React from 'react'
import FeatureBox from './FeatureBox';
import Featureimage from '../images/feature_1.png';
import Featureimage1 from '../images/feature_2.png';
import Featureimage2 from '../images/feature_3.png';

function Feature() {
    return (
        <div id="features">
            <div className="a-container"></div>
            <FeatureBox image={Featureimage} title="Development Course" />
            <FeatureBox image={Featureimage1} title="Money Saving Services" />
            <FeatureBox image={Featureimage2} title="Usability interface" />
        </div>
    )
}

export default Feature
