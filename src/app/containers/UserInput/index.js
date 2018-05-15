import React, { Component } from 'react' 
import PropTypes from 'prop-types'

import { PersistantActiveSvg } from './../../components/Svg'
import { PlaneSvg } from './../../components/Svg'

import './style.css'

class UserInput extends Component {
	state = {
		active: true,
		inputValue: ''
	}

	handleChange = e => {
		const { value } = e.target
		this.setState({inputValue: value})
	}

	sendData = () => {		
		this.props.sendMessage(this.state.inputValue)
		this.props.addMessage(this.state.inputValue)
	}

	handleKeyPress = e => {
		if(e.key === 'Enter') {
			this.sendData()
		}
	}

	render() {
		return (
			<div className="main-input-holder">
				<div className="input-group mb-3 input-holder">
					<div className="input-group-prepend">
						<span className="input-group-text border-primary bg-white"><PersistantActiveSvg /></span>
					</div>
					<input type="text" onKeyPress={this.handleKeyPress} className="form-control border-primary" value={this.state.value} onChange={this.handleChange} placeholder="Type answer here..." />
					<div className="input-group-append">
						<span onClick={this.sendData} className="input-group-text bg-primary text-white border-primary">Send <span>&nbsp; &nbsp;</span> <PlaneSvg /></span>
					</div>
				</div>
			</div>
		)
	}
}

UserInput.propTypes = {
	sendMessage: PropTypes.func,
	addMessage: PropTypes.func
}

export { UserInput }

