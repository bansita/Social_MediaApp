import "./closeFriend.css"

export default function CloseFriend({user}) {
  const PF=process.env.REACT_APP_PUBLIC_FOLDOR;
  return (
    <li className="sidebarFriend">
        <img className="sidebarFriendImg" src={PF+user.profilePicture}alt="" />
        <span className="sidebarFriendName">{user.username}</span>
    </li>
  )
}
