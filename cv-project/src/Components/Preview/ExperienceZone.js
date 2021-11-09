import React from "react";

function ExperienceZone(props) {
    const {experience} = props
    return(
        <div className='block'>
            <div className='time-interval'>
                {experience.from.trim()}-{experience.to.trim()}
            </div>
            <div className='content'>
                <p>{experience.positionTitle.trim()}</p>
                <p>{experience.companyName.trim()}</p>
                <p>{experience.location.trim()}</p>
            </div>
        </div>
    )
}


export default ExperienceZone