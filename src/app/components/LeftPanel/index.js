import React, { Fragment } from 'react'

import { EditSvg } from './../Svg'
import { ProfileSvg } from './../Svg' 

import './style.css'

export const LeftPanel = () => {
	return (
		<Fragment>
			<div className="profile-svg-holder">  
				<ProfileSvg />
			</div> 
			<div className="edit-svg-holder float-right">   
				<EditSvg />	
			</div>
		</Fragment>
	)
}