import React from 'react'

function ExperienceForm(props) {
	const { experience, id, handleChange, handleAdd, handleDelete, isLast } =
		props;
	return (
		<div className='field-field'>
			<div className='field'>
				<label>Company</label>
				<input
					type='text'
					name='companyName'
					className='text-input'
					placeholder='Company name'
					autoComplete='off'
					value={experience.companyName}
					onChange={(e) => handleChange(e, id)}
				/>
			</div>
			<div className='field'>
				<label>Position</label>
				<input
					type='text'
					name='positionTitle'
					className='text-input'
					placeholder='Position'
					autoComplete='off'
					value={experience.positionTitle}
					onChange={(e) => handleChange(e, id)}
				/>
			</div>
			<div className='field'>
				<label>Location</label>
				<input
					type='text'
					name='location'
					className='text-input'
					placeholder='Location'
					autoComplete='off'
					value={experience.location}
					onChange={(e) => handleChange(e, id)}
				/>
			</div>
			<div className='double-field'>
				<div className='field'>
					<label>From</label>
					<input
						type='text'
						name='from'
						className='text-input'
						placeholder='From'
						autoComplete='off'
						value={experience.from}
						onChange={(e) => handleChange(e, id)}
					/>
				</div>
				<div className='field'>
					<label>To</label>
					<input
						type='text'
						name='to'
						className='text-input'
						placeholder='To'
						autoComplete='off'
						value={experience.to}
						onChange={(e) => handleChange(e, id)}
					/>
				</div>
			</div>
			<div className='buttons'>
				{isLast ? (
					<button className='add-btn' onClick={handleAdd}>
						+ Add Experience
					</button>
				) : null}
				<button className='delete-btn' onClick={() => handleDelete(id)}>
					Delete
				</button>
			</div>
		</div>
	)
}

export default ExperienceForm