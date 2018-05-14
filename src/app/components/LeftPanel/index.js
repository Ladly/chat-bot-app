import React, { Fragment } from 'react'

import { EditSvg } from './../EditSvg'
import { ProfileSvg } from './../ProfileSvg' 

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