import React from 'react'


function PersonalInfo(props) {
    const { personal, handleChange } = props
    return (
        <section>
            <p className='pp'>Provide your personal information</p>
            <div className='field-field'>
                <div className='field-row'>
                    <div className='field'>
                        <label>First Name</label>
                        <input
                            type='text'
                            name='firstName'
                            className='text-input'
                            placeholder='First name'
                            autoComplete='off'
                            value={personal.firstName}
                            onChange={handleChange}

                        />

                    </div>
                    <div className='field'>
                        <label>Middle Name</label>
                        <input
                            type='text'
                            name='middleName'
                            className='text-input'
                            placeholder='Middle name'
                            autoComplete='off'
                            value={personal.middleName}
                            onChange={handleChange}

                        />

                    </div>
                    <div className='field'>
                        <label>Last Name</label>
                        <input
                            type='text'
                            name='lastName'
                            className='text-input'
                            placeholder='Last name'
                            autoComplete='off'
                            value={personal.lastName}
                            onChange={handleChange}

                        />

                    </div>
                </div>
               <div className='field-row'>
               <div className='field'>
                    <label>Address</label>
                    <textarea
                        name='address'
                        rows='5'
                        cols='20'
                        placeholder='Enter address'
                        autoComplete='off'
                        value={personal.address}
                        onChange={handleChange}

                    ></textarea>

                </div>
                <div className='field'>
                    <label>Phone Number</label>
                    <input
                        type='text'
                        name='phone'
                        className='text-input'
                        placeholder='Phone Number'
                        autoComplete='off'
                        value={personal.email}
                        onChange={handleChange}

                    />

                </div>
                <div className='field'>
                    <label>Email</label>
                    <input
                        type='text'
                        name='email'
                        className='text-input'
                        placeholder='Email'
                        autoComplete='off'
                        value={personal.email}
                        onChange={handleChange}

                    />

                </div>
               </div>
            </div>
        </section>

    )



}

export default PersonalInfo;
