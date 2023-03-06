import './closeFriends.css';

export default function CloseFriend({ user }) {
	const publicProfile = process.env.React_APP_Public_Folder;

	return (
		<li className='sidebarFriend'>
			<img className='sidebarFriendImg' src={`${publicProfile}${user.profilePicture}`} alt='' />
			<span className='sidebarFriendName'>{user.username}</span>
		</li>
	);
}
