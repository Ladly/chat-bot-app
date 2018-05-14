import React, { Component } from 'react' 

import { PersistantInactiveSvg } from './../../components/PersistantInactiveSvg'
import { PersistantActiveSvg } from './../../components/PersistantActiveSvg'
import { PlaneSvg } from './../../components/PlaneSvg'

import './style.css'

class UserInput extends Component {
	state = {
		active: true
	}

	displayActive = () => {
		return !this.state.active ? <PersistantInactiveSvg /> : <PersistantActiveSvg />
	}

	displayActiveBg = () => {
		return this.state.active ? 'bg-white' : 'bg-primary'
	}


	render() {
		return (
			<div className="input-group mb-3 input-holder">
				<div className="input-group-prepend">
					<span className={`input-group-text border-primary ${this.displayActiveBg()}`}>{this.displayActive()}</span>
				</div>
				<input type="text" className="form-control border-primary" placeholder="Chat" />
				<div className="input-group-append">
					<span className="input-group-text bg-primary text-white border-primary">Send <span>&nbsp; &nbsp;</span> <PlaneSvg /></span>
				</div>
			</div>
		)
	}
}

export { UserInput }

