import React from 'react';
import {Header} from "../components/Header";
import IntroSection from "../components/landing/IntroSection";

export default function () {
    return (
        <div className="min-h-screen">
            <Header/>
            <IntroSection/>
        </div>
    )
}
