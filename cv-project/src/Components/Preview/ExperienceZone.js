import React from "react";

function ExperienceZone(props) {
    const {experience} = props
    return(
        <div className='exp-block'>
            <div className='time-interval'>
                {experience.from.trim()}-{experience.to.trim()}
            </div>
            <div className='content'>
                {experience.positionTitle.trim()}
                {experience.companyName.trim()}
                {experience.location.trim()}
            </div>
        </div>
    )
}


export default ExperienceZone