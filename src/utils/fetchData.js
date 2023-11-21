import wrapPromise from './wrapPromise'

function fetchData(url) {
	const promise = fetch(url)
		.then(res => res.json())
		.catch(err => console.error(err))

	return wrapPromise(promise)
}

export default fetchData

// Helper function to simulate a 2 seconds delay
export function delay(promise) {
	return new Promise(resolve => setTimeout(resolve, 3000)).then(() => promise)
}
