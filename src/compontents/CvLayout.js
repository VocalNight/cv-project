import { useState } from "react";
import PersonalInformation from "./PersonalInformation";
import Experience from './Experience'
import Education from './Education'

export default function CvLayout() {
    const [experienceList, setExperienceList] = useState([]);
    const [educationList, setEducationList] = useState([]);

    function addExperience(experience) {
        let experienceItem = experienceList.find(xp => xp.key === experience.key);

        if (experienceItem) {
            setExperienceList(experienceList.map(xp => {
                console.log(experienceItem.key);
                if (xp.key === experienceItem.key) {
                    return experience;
                } 
                return xp;
            }))
        } else {
            setExperienceList(experienceList.concat(experience));
        }
    }

    function addEducation(education) {
        let educationItem = educationList.find(xp => xp.key === education.key);

        if (educationItem) {
            setEducationList(educationList.map(xp => {
                if (xp.key === educationItem.key) {
                    return education;
                } 
                return xp;
            }))
        } else {
            setEducationList(educationList.concat(education));
        }
    }

    function checkShit() {
        console.log(experienceList);
    }

    return (
        <div>
            <PersonalInformation />
            <Experience OnSubmit={addExperience} list={experienceList} />
            <Education OnSubmit={addEducation} list={educationList}/>
            <button onClick={checkShit}>Check Shit</button>
        </div>
    )
}
