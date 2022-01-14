import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
	  <div style={{ 
		backgroundColor: `#15202B`, 
	  }}>
	   <Home />
	  </div>
	 
	);
  }

export default App;

