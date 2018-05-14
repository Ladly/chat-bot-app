import React from 'react'
import PropTypes from 'prop-types'

import spartansLogo from './../../../utils/assets/spartans_logo.png'

import './style.css'

export const Header = props => {

	const headerType = () => {
		return (props.pageHeader) ? 'page-header' : 'chat-header' // this could be easily done with HOC but atm this looks like good solution
	}

	return (
		<div className={`header-holder ${headerType()}`}>
			<img src={spartansLogo} alt="logo"/>
			<h1>SPARTANS</h1>   
		</div>
	)
}

Header.propTypes = {
	pageHeader: PropTypes.bool,
}