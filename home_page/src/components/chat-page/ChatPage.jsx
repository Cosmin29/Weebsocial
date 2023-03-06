import React, { useState } from 'react';
import './chatPage.css';

export default function ChatPage() {
	const [ messages, setMessages ] = useState([]);
	const [ message, setMessage ] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		if (message !== '') {
			setMessages([ ...messages, { sender: 'Me', content: message } ]);
			setMessage('');
		}
	};

	return (
		<div className='chat-container'>
			<div className='chat-header'>
				<h2>Chat Room</h2>
			</div>
			<div className='chat-messages'>
				{messages.map((message, index) => (
					<div key={index} className='message-container'>
						<div className='message-sender'>{message.sender}</div>
						<div className='message-content'>{message.content}</div>
					</div>
				))}
			</div>
			<div className='chat-input'>
				<form onSubmit={handleSubmit}>
					<input
						type='text'
						value={message}
						onChange={(event) => setMessage(event.target.value)}
						placeholder='Type a message...'
					/>
					<button type='submit'>Send</button>
				</form>
			</div>
		</div>
	);
}
