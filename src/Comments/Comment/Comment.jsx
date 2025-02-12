import Cards from "../../UI/Card.jsx"
import UserProfile from "../Profile/Assembly/UserProfile.jsx"
import Message from "../Message/Message.jsx"


const Comment = (props) => {
  return (
    <Cards>
      <UserProfile photo={props.photo} name={props.user.name} email={props.user.email}/>
      <Message message={props.message}/>
    </Cards>
  )
}

export default Comment
