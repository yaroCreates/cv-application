   
import React from 'react'
import PersonalInfo from './PersonalInfo'
import Education from './Education'
import Experience from './Experience'

function Form(props) {
	const {
		personal,
		handleChangePersonal,
		education,
		handleChangeEducation,
		handleAddEducation,
		handleDeleteEducation,
		experience,
		handleChangeExperience,
		handleAddExperience,
		handleDeleteExperience,
	} = props;


	return (
		<div className='cv-form'>
			<PersonalInfo personal={personal} handleChange={handleChangePersonal} />
			<Education
				education={education}
				handleChange={handleChangeEducation}
				handleAdd={handleAddEducation}
				handleDelete={handleDeleteEducation}
			/>
			<Experience
				experience={experience}
				handleChange={handleChangeExperience}
				handleAdd={handleAddExperience}
				handleDelete={handleDeleteExperience}
			/>
		</div>
	);
}

export default Form