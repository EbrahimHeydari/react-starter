import { useRef, forwardRef, useImperativeHandle, useState } from 'react'

const UseImperativeHandleExample = () => {
	const ref = useRef()

	return (
		<div>
			<Button ref={ref} />
			<button onClick={() => ref.current.increment()}>another button</button>
		</div>
	)
}

export default UseImperativeHandleExample

const Button = forwardRef((props, ref) => {
	useImperativeHandle(ref, () => ({ increment }))

	const [count, setCount] = useState(0)
	const increment = () => setCount(count + 1)
	return (
		<div>
			<button onClick={increment}>click</button>
			<h2>Count: {count}</h2>
		</div>
	)
})
