import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import Chat from './pages/chat/Chat';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path='/' element={<Login />} />
				<Route path='/profile/:username' element={<Profile />} />
				<Route path='/home' element={<Home />} />
				<Route path='/chat' element={<Chat />} />
			</Routes>
		</Router>
	);
}

export default App;
