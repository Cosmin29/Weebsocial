import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useForm } from 'react-hook-form';
import styles from './login.css';

export default function LoginForm() {
	const { register, handleSubmit, errors } = useForm();

	const onSubmit = (data) => {
		// Handle form submission
	};

	return (
		<div className={styles.body}>
			<img className={styles.logo} src='/assets/Weebsocial-logo.png' alt='' />
			<div className={styles.wrapper}>
				<div className={styles.titleText}>
					<div className={`${styles.title} ${styles.login}`}>Login</div>
				</div>

				<div className={styles.formContainer}>
					<div className={styles.formInner}>
						<form onSubmit={handleSubmit(onSubmit)} className={styles.login}>
							<div className={styles.field}>
								<input
									type='text'
									placeholder='Email Address'
									name='email'
									ref={register({ required: true })}
								/>
								{errors.email && <span className={styles.error}>Email is required</span>}
							</div>
							<div className={styles.field}>
								<input
									type='password'
									placeholder='Password'
									name='password'
									ref={register({ required: true })}
								/>
								{errors.password && <span className={styles.error}>Password is required</span>}
							</div>
							<div className={styles.passLink}>
								<Link to='#'>Forgot password?</Link>
							</div>
							<div className={`${styles.field} ${styles.btn}`}>
								<button type='submit' className={styles.btnLayer}>
									Login
								</button>
							</div>
							<div className={styles.signupLink}>Not a member? Signup now with:</div>
							<div className={styles.socialContainer}>
								<Link to='/home'>
									<div className={`${styles.facebook} ${styles.social}`}>
										<FontAwesomeIcon icon={faFacebook} size='3x' />
									</div>
									<div className={`${styles.google} ${styles.social}`}>
										<FontAwesomeIcon icon={faGoogle} size='3x' />
									</div>
									<div className={`${styles.instagram} ${styles.social}`}>
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
