import './online.css';

export default function Online({ user }) {
	const publicFolder = process.env.React_APP_Public_Folder;
	return (
		<li className='rightbarFriend'>
			<div className='rightbarProfileImgContainer'>
				<img className='rightbarProfileImg' src={publicFolder + user.profilePicture} alt='' />
				<span className='rightbarOnline' />
			</div>
			<span className='rightbarUsername'>{user.username}</span>
		</li>
	);
}
