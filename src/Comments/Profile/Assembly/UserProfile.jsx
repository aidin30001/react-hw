import UserPhoto from "../Photo/UserPhoto.jsx";
import Span from "../Span/Span.jsx"
import Email from "../Email/Email.jsx";
import Cards from "../../../UI/Card.jsx";
import "./userProfile.css"

const UserProfile = (props) => {
  return (
    <Cards className="userProfileComment">
      <div className="userProfile">
        <UserPhoto photo={props.photo} name={props.name}/>
        <Span>{props.name}</Span>
      </div>
      <Email email={props.email}/>
    </Cards>
  )
}

export default UserProfile
