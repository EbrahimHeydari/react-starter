import fetchData from '../utils/fetchData'

const resource = fetchData('http://localhost:5000/names')

const Names = () => {
	const namesList = resource.read()

	return (
		<div>
			<h2>List of names</h2>
			<ul>
				{namesList.map(item => (
					<li key={item.id}>{item.name.toUpperCase()}</li>
				))}
			</ul>
		</div>
	)
}

export default Names
