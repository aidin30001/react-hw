import Span from "../Profile/Span/Span"
import "./message.css"

const Message = (props) => {
  return (
    <div className="message">
      <Span>{props.message}</Span>
    </div>
  )
}

export default Message
