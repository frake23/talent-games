import React from 'react';
import {Header} from "../components/Header";
import IntroSection from "../components/landing/IntroSection";

const LandingPage: React.FC = () => {
    return (
        <div className="min-h-screen">
            <Header/>
            <IntroSection/>
        </div>
    )
}

export default LandingPage;
