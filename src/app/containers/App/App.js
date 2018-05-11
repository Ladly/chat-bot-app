import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import { LeftPanel } from './../../components/LeftPanel' 

import './style.css'

class App extends Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-4">					
						<LeftPanel />						
					</div>
					<div className="chat col-12">
						<h1 className="text-center">Spartans</h1>
					</div>
					<aside className="col-lg-4"></aside>
				</div>
			</div>
		)
	}
}

export default App
