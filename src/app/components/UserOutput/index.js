import React from 'react'
import PropTypes from 'prop-types'

import { JennaLogoSvg } from './../Svg'

import './style.css'

export const UserOutput = props => {
	return (
		<div className="user-output-holder">
			<p className="text-container user-text">{props.text}</p>
			<div className="user-output-header">
				<JennaLogoSvg />
			</div>
		</div>
	)
}

UserOutput.propTypes = {
	text: PropTypes.string,
}