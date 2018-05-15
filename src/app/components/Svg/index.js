import React from 'react'

import profile from './../../../utils/assets/profile.svg'
import plane from './../../../utils/assets/plane.svg'
import persistantInactive from './../../../utils/assets/persistantInactive.svg'
import persistantActive from './../../../utils/assets/persistantActive.svg'
import menu from './../../../utils/assets/menu.svg'
import jennaLogo from './../../../utils/assets/jenna_logo_small.svg'
import edit from './../../../utils/assets/edit.svg'

export const ProfileSvg = () => <img className="profile-svg-img" src={profile} alt="profile svg"/>

export const PlaneSvg = () => <img src={plane} alt="plane svg"/>

export const PersistantInactiveSvg = () => <img src={persistantInactive} alt="Persistant Inactive Svg"/>

export const PersistantActiveSvg = () => <img src={persistantActive} alt="Persistant Active Svg"/>

export const MenuSvg = () => <img src={menu} alt="menu svg"/>

export const JennaLogoSvg = () => <img src={jennaLogo} alt="jenna logo"/>

export const EditSvg = () => <img src={edit} alt="edit svg"/>