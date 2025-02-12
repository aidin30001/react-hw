import "./cards.css"

const Cards = (props) => {
  return <div className={`container ${props.className}`}>{props.children}</div>
}

export default Cards
