import React from 'react'
import ReactDOM from 'react-dom'

import { SocketProvider } from 'socket.io-react'
import io from 'socket.io-client'

import App from './app/containers/App/App'
import { BOT_URL } from './utils/constants'

const socket = io.connect(BOT_URL)

ReactDOM.render(
	<SocketProvider socket={socket}>
		<App />
	</SocketProvider>, 
	document.getElementById('root'))
