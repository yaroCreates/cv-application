import React from "react"
function Header(props) {
    const {personal} = props
    return(
        <div className='header'>
            <h2>
                {personal.firstName.trim()} {personal.middleName.trim()} {personal.lastName.trim()}
            </h2>
            <p>{personal.address.trim()}</p>
            <p>{personal.phone.trim()}</p>
            <p>{personal.email.trim()}</p>
        </div>
    )
}

export default Header