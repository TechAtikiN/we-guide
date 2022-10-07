import React, { useState } from 'react';
import { useEffect } from 'react';
import { Interests } from './steps/Interests';
import { Preferences } from './steps/Preferences';
import { Skills } from './steps/Skills';

export default function Assesment() {

    const [step, setStep] = useState(1);
    const [mySkills, setSkills] = useState([])
    const [myInterests, setInterests] = useState([])
    const [myPreferences, setPreferences] = useState([])
    const [roadmaps, setRoadmaps] = useState([])
    const userData = []

    useEffect(() => {
        const fetchRoadmaps = async () => {
            const response = await fetch('/roadmap')
            const data = await response.json();

            if (response.ok) {
                setRoadmaps(data)
            }
        }
        fetchRoadmaps()
    }, [])
    // console.log(roadmaps)
    const data = {
        skills: ['Problem-solving', 'Communication skills', 'Interpersonal skills', 'Medicinal', 'scientific research skills', 'Curiosity', 'Persuasive skills', 'marketing', 'organizing', 'Science wizard', 'technical skills', 'identifying problems', 'Computer science', 'Pressure management', 'Teamwork', 'Communication', 'Management', 'Adaptability'],
        interests: ['finding solutions', 'Teamwork', 'Photography', 'Blog Writing', 'Networking', 'Languages', 'Creativity', 'Volunteering', 'Music', 'Investing', 'Art', 'Coding', 'Designing'],
        preferences: ['working with people', 'Communication', 'indoors', 'outdoors', 'travel', 'small team size', 'hybrid', 'Mobility', 'working with data']
    }

    userData.push(mySkills)
    userData.push(myInterests)
    userData.push(myPreferences)

    const presentInRoadmap = (roadmaps, userDataAll) => {
        roadmaps.forEach(roadmap => {
            // const tags = roadmap.tags
            if (userDataAll.every(item => roadmap.tags.includes(item))) {
                console.log(roadmap)
            }
            // tags.find()
            // if (userDataAll.every(item => roadmap.tags.includes(item))) {

            // userDataAll.forEach(item => {
            //     if (tags.find(item)) {
            //         console.log(roadmap)
            //     }
            // })
        });
    }

    const userDataAll = []

    const isMyRoadmap = (userData) => {
        for (let i = 0; i < userData.length; i++) {
            for (let j = 0; j < userData[i].length; j++) {
                userDataAll.push(userData[i][j])
                console.log(userDataAll)
            }
        }
    }

    const isMyRoadmap2 = (userDataAll) => {
        for (let i = 0; i < userDataAll.length; i++) {
            presentInRoadmap(roadmaps, userDataAll)
        }
    }
    isMyRoadmap(userData)
    isMyRoadmap2(userDataAll, roadmaps)

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
            <div className='relative flex justify-center bottom-20'>
                <button className='relative text-2xl p-2 bg-purple-500 rounded-lg px-5 text-white m-3 ' onClick={handleBack}>Back</button>
                <button className='relative text-2xl p-2 bg-purple-500 rounded-lg px-5 text-white m-3 ' onClick={handleNext}>Next</button>
            </div>
        </div>
    );
};