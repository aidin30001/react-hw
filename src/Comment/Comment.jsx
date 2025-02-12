import './comment.css'

const Comment = props => {
	return (
		<div className='container'>
			<div className='comment'>
				<div className='profile'>
					<img src={props.photo} alt={props.user.name} />
					<span>{props.user.name}</span>
				</div>
				<span className='email'>{props.user.email}</span>
			</div>
			<div className='message'>
				<span>{props.message}</span>
			</div>
		</div>
	)
}

export default Comment
