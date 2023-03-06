import { Link } from 'react-router-dom';
import { signin } from './signin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './login.css';

export default function Login() {
	return (
		<div className='body'>
			<img className='logo' src='/assets/Weebsocial-logo.png' alt='' />
			<div className='wrapper'>
				<div className='title-text'>
					<div className='title login'>Login</div>
				</div>
				<div className='form-container'>
					<div className='form-inner'>
						<form action='#' className='login'>
							<div className='field'>
								<input type='text' placeholder='Email Address' required />
							</div>
							<div className='field'>
								<input type='password' placeholder='Password' required />
							</div>
							<div className='pass-link'>
								<a href='#'>Forgot password?</a>
							</div>
							<div className='field btn'>
								<Link to='/home' style={{ textDecoration: 'none' }}>
									<div className='btn-layer' />
									<input type='submit' onClick={signin} value='Login' />
								</Link>
							</div>
							<div className='signup-link'>Not a member? Signup now with:</div>
							<div className='social-container'>
								<Link to='/home' style={{ textDecoration: 'none' }}>
									<div className='facebook social'>
										<FontAwesomeIcon icon={faFacebook} size='3x' />
									</div>
									<div className='google social'>
										<FontAwesomeIcon icon={faGoogle} size='3x' />
									</div>
									<div className='instagram social'>
										<FontAwesomeIcon icon={faInstagram} size='3x' />
									</div>
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
