import "./online.css"

export default function Online({user}) {
  const PF=process.env.REACT_APP_PUBLIC_FOLDOR;
  return (
    <li className="rightbarFriend">
    <div className="rightbarProfileContainer">
      <img className="rightbarProfileImg" src={PF+user.profilePicture} alt="" />
    <span className="rightbarOnline"> </span>
    </div>
    <span className="rightbarUsername">{user.username}</span>
    </li>
  )
}
