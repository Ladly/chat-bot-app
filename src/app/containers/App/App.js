import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import { LeftPanel } from './../../components/LeftPanel' 
import { Footer } from './../../components/Footer' 
import { Header } from './../../components/Header'
import { BotOutput } from './../../components/BotOutput'
import { UserOutput } from '../../components/UserOutput'

import { UserInput } from './../UserInput'

import './style.css'

class App extends Component {
	
	render() {
		return (
			<div className="container-fluid">
				<div className="row no-gutters">
					<div className="col-md-2 col-lg-3 left-panel panel">					
						<LeftPanel />						
					</div>
					<div className="main-holder col-12 col-md-8 col-lg-6">
						<Header pageHeader={true} logoType={true}/>
						<div className="chat">
							<BotOutput text={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultrici'}/>
							<UserOutput  text={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultrici'}/>
						</div>
						<UserInput />
						<Footer />
					</div>
					<div className="col-md-2 col-lg-3 right-panel panel"></div>
				</div>
			</div>
		)
	}
}

export default App
