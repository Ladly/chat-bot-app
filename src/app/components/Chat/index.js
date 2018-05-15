import React from 'react' 
import PropTypes from 'prop-types'

export const Chat = (props) => {
	return (
		<div className="chat">
			{props.displayMessages()}
		</div>
	)
}

Chat.propTypes = {
	displayMessages: PropTypes.func
}