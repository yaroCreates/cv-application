import React from "react"
import EducationZone from "./EducationZone"
import ExperienceZone from "./ExperienceZone"
import Header from "./Header"

function Preview(props) {
    const {personal, education, experience} = props
    const educationBlocks = education.map((block) => {
        return <EducationZone key={block.id} education={block} />

    })

    const experienceBlocks= experience.map((block) => {
        return <ExperienceZone key={block.id} experience={block}/>
    })


    return (

        <div>
            <Header personal={personal} />
            <div className='preview-main'>
                <section className='preview-section'>
                    <h3>Education</h3>
                    {educationBlocks}
                </section>
                <section className='preview-section'>
                    <h3>Experience</h3>
                    {experienceBlocks}
                </section>
            </div>
        </div>

    )
}
export default Preview