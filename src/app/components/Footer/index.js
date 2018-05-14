import React from 'react' 

import { JennaLogoSvg } from './../JennaLogoSvg'

import './style.css'

export const Footer = () => {
	return (
		<footer>
			<p>Terms / Conditions | Privacy Policy | <span className="power-span">Powered by</span> <JennaLogoSvg /></p>
		</footer>
	)
}