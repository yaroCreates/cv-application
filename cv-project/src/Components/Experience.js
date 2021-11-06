import React from 'react'
import ExperienceForm from './ExperienceForm'

function Experience(props) {
	const { experience, handleChange, handleAdd, handleDelete } = props;
    console.log(experience, props)
	const experienceElements = experience.map((object, index) => {
		return (
			<ExperienceForm
				key={object.id}
				id={object.id}
				experience={object}
				handleChange={handleChange}
				handleAdd={handleAdd}
				handleDelete={handleDelete}
				isLast={index === experience.length - 1}
			/>
		)
	})
	return (
		<section className='experience'>
			<p className='pp2'>Provide experience history</p>
			{experience.length === 0 ? (
				<div className='buttons'>
					<button className='btn add-btn' onClick={handleAdd}>
						Add
					</button>
				</div>
			) : null}
			{experienceElements}
		</section>
	)
}

export default Experience