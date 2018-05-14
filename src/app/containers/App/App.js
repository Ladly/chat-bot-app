import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import { LeftPanel } from './../../components/LeftPanel' 
import { Footer } from './../../components/Footer' 

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
					<div className="chat col-12 col-md-8 col-lg-6">
						<h1 className="text-center">Spartans</h1>
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
