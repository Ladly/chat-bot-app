import React, { Component } from 'react'
import PropTypes from 'prop-types'

import 'bootstrap/dist/css/bootstrap.css'

import { socketConnect } from 'socket.io-react'

import { LeftPanel } from './../../components/LeftPanel' 
import { Footer } from './../../components/Footer' 
import { Header } from './../../components/Header'
import { BotOutput } from './../../components/BotOutput'
import { UserOutput } from '../../components/UserOutput'

import { UserInput } from './../UserInput'

import './style.css'

class App extends Component {
	state = {
		messages: []
	}
	
	componentDidMount() {
		this.props.socket.on('bot message', msg => {
			this.addMessage(msg)
		})
	}

	addMessage = data => {
		this.setState({messages: [...this.state.messages, data]})
	}
	
	sendMessageToBot = (data) =>  {
		const sendJSON = { text: data }
		this.props.socket.emit('send message', sendJSON)
		this.props.socket.on('bot message', msg => console.log(msg))
	}

	displayMessages = () => {
		if(this.state.messages !== []) {
			return this.state.messages.map((message, i) => {
				if(i % 2 === 0) {
					return <BotOutput key={i} text={message.message.text} options={message.message.options} />
				} else {
					return <UserOutput key={i} text={message} />
				}
			})
		}
	}
	
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
							{this.displayMessages()}
						</div>
						<UserInput sendMessage={this.sendMessageToBot} addMessage={this.addMessage}/>
						<Footer />
					</div>
					<div className="col-md-2 col-lg-3 right-panel panel"></div>
				</div>
			</div>
		)
	}
}

App.propTypes = {
	socket: PropTypes.object
}

export default socketConnect(App)
