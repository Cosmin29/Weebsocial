import { Search, Person, Chat, Notifications } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { DarkMode } from '@mui/icons-material';
import './topbar.css';

export default function Topbar() {
	return (
		<div className='topbarContainer'>
			<div className='topbarLeft'>
				<Link to='/home' style={{ textDecoration: 'none' }}>
					<img className='logoPic' src='/assets/Weebsocial-logo.png' alt='' />
				</Link>
			</div>
			<div className='topbarCenter'>
				<div className='searchbar'>
					<Search className='searchIcon' />
					<input placeholder='Search for friend, post or video' className='searchInput' />
				</div>
			</div>
			<div className='topbarRight'>
				<div className='topbarLinks'>
					<span className='topbarLink'>Homepage</span>
					<span className='topbarLink'>Timeline</span>
				</div>
				<div className='topbarIcons'>
					<div className='topbarIconItem'>
						<Person />
						<span className='topbarIconBadge'>1</span>
					</div>
					<div className='topbarIconItem'>
						<Link to='/chat' style={{ textDecoration: 'none' }}>
							<Chat />
							<span className='topbarIconBadge'>2</span>
						</Link>
					</div>
					<div className='topbarIconItem'>
						<Notifications />
						<span className='topbarIconBadge'>1</span>
					</div>
					<div className='topbarIconItem'>
						<DarkMode />
					</div>
				</div>
				<Link to='/profile/:Cosmin Mihai' style={{ textDecoration: 'none' }}>
					<img src='/assets/person/cosmin.jpg' alt='' className='topbarImg' />
				</Link>
			</div>
		</div>
	);
}
