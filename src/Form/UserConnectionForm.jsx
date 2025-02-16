import React, { useState } from 'react'

const UserConnentionForm = props => {
	const [userInput, setUserInput] = useState({
		name: '',
		surname: '',
		desc: '',
	})

	const [userEmail, setUserEmail] = useState('')

	const [show, setShow] = useState(false)

	const emailChangeHandler = e => {
		setUserEmail(e.target.value)
	}

	const inputChangeHandler = e => {
		switch (e.target.name) {
			case 'name':
				setUserInput({
					...userInput,
					name: e.target.value,
				})
				break
			case 'surname':
				setUserInput({
					...userInput,
					surname: e.target.value,
				})
				break
			case 'desc':
				setUserInput({
					...userInput,
					desc: e.target.value,
				})
				break
		}
	}

  const showHandler = () => {
    setShow((prevState) => !prevState)
  }

  const submitHandler = e => {
    e.preventDefault()
  }

	return (
		<form className='form' onSubmit={submitHandler}>
			{show && (
				<div>
					<div>
						<label>имя </label>
						<input type='name' name='name' onChange={inputChangeHandler} />
					</div>
					<br />
					<div>
						<label>фамилия </label>
						<input type='surname' name='surname' onChange={inputChangeHandler} />
					</div>
					<br />
					<div>
						<label>email </label>
						<input type='email' name='email' onChange={emailChangeHandler} />
					</div>
					<br />
					<div>
						<label>описание </label>
						<input type='text' name='desc' onChange={inputChangeHandler} />
					</div>
					<br />
				</div>
			)}
			<button onClick={showHandler}>{show ? 'скрыть' : 'показать'}</button>
			<div>
				<label>{userInput.name}</label>
			</div>
			<div>
				<label>{userInput.surname}</label>
			</div>
			<div>
				<label>{userEmail}</label>
			</div>
			<div>
				<label>{userInput.desc}</label>
			</div>
		</form>
	)
}

export default UserConnentionForm
