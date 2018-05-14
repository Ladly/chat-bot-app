import React from 'react'
import PropTypes from 'prop-types'

import { JennaLogoSvg } from '../JennaLogoSvg'

import './style.css'

export const UserOutput = props => {
	return (
		<div className="user-output-holder">
			<div className="text-container user-text">{props.text}</div>
			<div className="user-output-header">
				<JennaLogoSvg />
			</div>
		</div>
	)
}

UserOutput.propTypes = {
	text: PropTypes.string,
}