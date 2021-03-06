import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

import { Header } from './../Header'

export const BotOutput = (props) => {

	const displayOptions = () => {
		if(props.options) {
			return props.options.map((option, i) => {
				return <span className="options" key={i}>{option}</span>
			})
		}
	}

	return (
		<div className="bot-output-holder">
			<div className="output-headers">
				<Header pageHeader={false}/>
			</div>
			<div>
				<p className="text-container bot-text">{props.text}</p>
				<p className="options-holder">{displayOptions()}</p>
			</div>
		</div>	
	)
}

BotOutput.propTypes = {
	text: PropTypes.string,
	options: PropTypes.array
}