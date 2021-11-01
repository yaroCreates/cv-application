import React from 'react'
import Main from './Components/Main'
import './App.css'

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			flip: false


		}

		this.handleFlip = this.handleFlip.bind(this)


	}

	handleFlip() {
		this.setState({
			flip: !this.state.flip,
		});
	}

	render() {
		return (
			<div>
				{/* <Header handleFlip={this.handleFlip} /> */}
				<Main flip={this.state.flip} />
			</div>
		)
	}
}


export default App