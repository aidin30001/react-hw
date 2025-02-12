import "./userPhoto.css"

const UserPhoto = (props) => {
  return <img className={`photoUserComment ${props.className}`} src={props.photo} alt={props.name} />
}

export default UserPhoto
