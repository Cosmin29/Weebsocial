import "./closeFriend.css";

export default function CloseFriend({user}) {
  const PF = process.env.React_APP_Public_Folder;
  return (
    <li className="sidebarFriend">
      <img className="sidebarFriendImg" src={PF + user.profilePicture} alt="" />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}