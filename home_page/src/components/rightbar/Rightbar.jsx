import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

const Rightbar = ({ profile }) => {
  const PF = 'assets/';

  const birthdayContainer = (
    <div className="birthdayContainer">
      <img className="birthdayImg" src={`${PF}gift.png`} alt="" />
      <span className="birthdayText">
        <b>Person 1</b> and <b>3 other friends</b> have a birhday today.
      </span>
    </div>
  );

  const rightbarAd = (
    <img className="rightbarAd" src={`${PF}National-Burger-Day.png`} alt="" />
  );

  const onlineFriends = (
    <>
      <h4 className="rightbarTitle">Online Friends</h4>
      <ul className="rightbarFriendList">
        {Users.map((user) => (
          <Online key={user.id} user={user} />
        ))}
      </ul>
    </>
  );

  const userInfo = (
    <>
      <h4 className="rightbarTitle">User information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">Bucharest</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Romania</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
    </>
  );

  const userFriends = (
    <>
      <h4 className="rightbarTitle">User friends</h4>
      <div className="rightbarFollowings">
        {[1, 2, 3, 4, 5, 6].map((id) => (
          <div className="rightbarFollowing" key={id}>
            <img
              src={`${PF}person/Person ${id}.jpeg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">User {id}</span>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? (
          <>
            {userInfo}
            {userFriends}
          </>
        ) : (
          <>
            {birthdayContainer}
            {rightbarAd}
            {onlineFriends}
          </>
        )}
      </div>
    </div>
  );
};

export default Rightbar;
