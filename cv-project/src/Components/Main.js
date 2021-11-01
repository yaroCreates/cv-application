import React from 'react'
import Form from './Form'
import uniqid from 'uniqid'
// import Preview from './Preview'
import { personalField, educationField, experienceField } from "./Information"




class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            personal: {
                ...personalField
            },

            edu: [
                {
                    ...educationField,
                    id: uniqid()
                }
            ],
            exp: [
                {
                    ...experienceField,
                    id: uniqid()
                }

            ],
            flip: false

        }
        this.handleChangePersonal = this.handleChangePersonal.bind(this)
        this.handleChangeEducation = this.handleChangeEducation.bind(this)
        this.handleAddEducation = this.handleAddEducation.bind(this)
        this.handleDeleteEducation = this.handleDeleteEducation.bind(this)
        this.handleChangeExperience = this.handleChangeExperience.bind(this)
        this.handleAddExperience = this.handleAddExperience.bind(this)
        this.handleDeleteExperience = this.handleDeleteExperience.bind(this)

    }
    

    handleChangePersonal(event) {
        const { name, value } = event.target
        this.setState({
            personal: {
                ...this.state.personal,
                [name]: value
            }
            
        })
    }

    handleChangeEducation(event, id) {
        const { name, value } = event.target
        const newEducation = this.state.edu.map((educationObj) => {
            if (educationObj.id === id) {
                return {
                    ...educationObj,
                    [name]: value
                }
            }

            return educationObj

        })
        this.setState({
            edu: newEducation
        })
    }

    handleAddEducation() {
        const newEducation = {
            ...educationField,
            id: uniqid()
        }

        this.setState({
            edu: this.state.edu.concat(newEducation)
        })
    }

    handleDeleteEducation(id) {
        const newEducation = this.state.edu.filter((educationObj) => educationObj.id !== id
        )
        this.setState({
            edu: newEducation
        })
    }



    handleChangeExperience(event, id) {
        const { name, value } = event.target
        const newExperience = this.state.exp.map((experienceObj) => {
            if (experienceObj.id === id) {
                return {
                    ...experienceObj,
                    [name]: value
                }
            }

            return experienceObj

        })
        this.setState({
            exp: newExperience
        })
    }

    handleAddExperience() {
        const newExperience = {
            ...experienceField,
            id: uniqid()
        }

        this.setState({
            exp: this.state.exp.concat(newExperience)
        })
    }

    handleDeleteExperience(id) {
        const newExperience = this.state.exp.filter((experienceObj) => experienceObj.id !== id
        )
        this.setState({
            exp: newExperience
        })
    }


    render() {
        const { flip } = this.props
        const className = flip ? 'flip-container flipped' : 'flip-container'

        return (
            <main>
                <div className={className}>
                    <div className='front'>
                        <Form
                            personal={this.state.personal}
							handleChangePersonal={this.handleChangePersonal}
							education={this.state.edu}
							handleChangeEducation={this.handleChangeEducation}
							handleAddEducation={this.handleAddEducation}
							handleDeleteEducation={this.handleDeleteEducation}
							experience={this.state.exp}
							handleChangeExperience={this.handleChangeExperience}
							handleAddExperience={this.handleAddExperience}
							handleDeleteExperience={this.handleDeleteExperience}
                        

                        />
                    </div>

                    <div className='back'>
                        {/* <preview 
                            personal={this.state.personal}
							education={this.state.education}
							experience={this.state.experience}
                        
                        /> */}
                    </div>
                </div>
            </main>
        )
    }

}

export default Main