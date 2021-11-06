import React from 'react'
import EducationForm from './EducationForm'
import EducationHeader from './EducationHeader'


function Education(props) {
    const {education, handleChange, handleAdd, handleDelete} = props
    const educationElements = education.map((object, index) => {
        return (
			<EducationForm
				key={object.id}
				id={object.id}
				education={object}
				handleChange={handleChange}
				handleAdd={handleAdd}
				handleDelete={handleDelete}
				isLast={index === education.length - 1}
			/>
		)
    })
    return (
		<section className='education'>
            <p className='pp2'>Provide education history</p>
			{education.length === 0 ? (
				<div className='buttons'>
					<button className='add-btn' onClick={handleAdd}>
						+ Add Education
					</button>
				</div>
			) : null}
            
			{educationElements}
		</section>
	)
    
}

export default Education