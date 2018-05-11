import React, { Fragment } from 'react'

import { EditSvg } from './../EditSvg'
import { ProfileSvg } from './../ProfileSvg'  

export const LeftPanel = () => {
	return (
		<Fragment>  
			<ProfileSvg />
			<EditSvg />	
		</Fragment>
	)
}