import { useRef } from 'react'

function UseRefExample1() {
	const inputRef = useRef()
	const paraRef = useRef()

	const onSubmit = e => {
		e.preventDefault()
		console.log(inputRef.current.value)
		inputRef.current.value = 'Hello'
		inputRef.current.style.backgroundColor = 'red'
		paraRef.current.innerText = 'Goodbye'
	}

	return (
		<div>
			<form onSubmit={onSubmit}>
				<label htmlFor='name'>Name: </label>
				<input
					type='text'
					ref={inputRef}
					id='name'
				/>
				<button type='submit'>Submit</button>
				<p
					onClick={() => inputRef.current.focus()}
					ref={paraRef}>
					Hello
				</p>
			</form>
		</div>
	)
}

export default UseRefExample1
