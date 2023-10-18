import { useEffect } from 'react'

const Counter = ({ count }) => {
	useEffect(() => {
		if (count === 3) {
			throw Error('Crash')
		}
	})

	return <p>{count}</p>
}

export default Counter
