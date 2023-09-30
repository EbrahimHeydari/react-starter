import wrapPromise from './wrapPromise'

function fetchData(url) {
	const promise = fetch(url)
		.then(res => res.json())
		.catch(err => console.error(err))

	return wrapPromise(promise)
}

export default fetchData
