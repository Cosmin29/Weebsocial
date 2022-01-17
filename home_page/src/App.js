import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
	   <Router>
		   <Routes>
			   <Route exact path="/" element={<Home />}>
			   </Route>
			   <Route path="/profile/:username" element={<Profile />}>
			   </Route>
			   <Route path="/login" element={<Login />}>
			   </Route>
		   </Routes>
	   </Router>
	);
  }

export default App;

