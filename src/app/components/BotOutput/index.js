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
			<div className="output-header">
				<Header pageHeader={false}/>
			</div>
			<div className="text-container bot-text">{props.text}</div>
			<div>
				{displayOptions()}
			</div>			
		</div>
	)
}

BotOutput.propTypes = {
	text: PropTypes.string,
	options: PropTypes.array
}