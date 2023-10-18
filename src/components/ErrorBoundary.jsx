import { Component } from 'react'

class ErrorBoundary extends Component {
	state = { error: null }

	static getDerivedStateFromError(error) {
		// Update state so the next render will show the fallback UI.
		return { error }
	}

	componentDidCatch(error, errorInfo) {
		console.log('logErrorToService: ', errorInfo)
	}

	render() {
		const { error } = this.state

		if (error) {
			return <this.props.FallbackComponent error={error} />
		}

		return this.props.children
	}
}

export default ErrorBoundary

/* Error boundaries are implemented as class components and
do not work with functional components.
This limitation may change in future versions of React as
new error-handling features are introduced. */
