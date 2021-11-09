import React from "react"

function EducationZone(props){
    const {education} = props
    return(
        <div className='block'>
            <div className='time-interval'>
                {education.from.trim()}-{education.to.trim()}
            </div>

            <div className='content'>
                <p>{education.schoolName.trim()}</p>
                <p>{education.schoolCity.trim()}</p>
                <p>{education.titleOfStudy.trim()}</p>
            </div>
        </div>
    )
}

export default EducationZone