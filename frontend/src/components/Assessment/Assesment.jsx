import React, { useState } from "react";
import { Interests } from "./steps/Interests";
import { Preferences } from "./steps/Preferences";
import { Skills } from "./steps/Skills";

export default function Assesment() {

    const [step, setStep] = useState(1);
    const [mySkills, setSkills] = useState([])
    const [myInterests, setInterests] = useState([])
    const [myPreferences, setPreferences] = useState([])

    const data = {
        skills: ['Communication', 'Problem-Solving', 'HTML-CSS', 'Marketing', 'Creativity', 'Sales', 'Business', 'Public Speaking', 'Editing', 'Data Entry'],
        interests: ['Photography', 'Blog Writing', 'Networking', 'Languages', 'Volunteering', 'Music', 'Investing', 'Art', 'Coding', 'Designing'],
        preferences: ['working with people', 'indoors', 'outdoors', 'travel', 'small team size', 'hybrid', 'Mobility', 'working with data']
    }

    const handleNext = () => {
        setStep(step => step + 1);
    };
    const handleBack = () => {
        setStep(step => step - 1);
    };

    if (step >= 4) {
        setStep(3)
    } else if (step <= 0) {
        setStep(1)
    }

    return (
        <div>
            {step === 1 && <Skills mySkills={mySkills} data={data} setSkills={setSkills} />}
            {step === 2 && <Interests myInterests={myInterests} data={data} setInterests={setInterests} />}
            {step === 3 && <Preferences myPreferences={myPreferences} data={data} setPreferences={setPreferences} />}
            <div className="relative flex justify-center bottom-20">
                <button className="relative text-2xl p-2 bg-purple-500 rounded-lg px-5 text-white m-3 " onClick={handleBack}>Back</button>
                <button className="relative text-2xl p-2 bg-purple-500 rounded-lg px-5 text-white m-3 " onClick={handleNext}>Next</button>
            </div>
        </div>
    );
};

