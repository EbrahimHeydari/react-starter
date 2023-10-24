// portals example
// import ReactDOM from 'react-dom'
// function App() {
//   // Creating a portal
//   return ReactDOM.createPortal(
//     <h1>Portal demo</h1>,
//     document.getElementById('portal')
//  )
// }

// export default App

// Routing example
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Home from './Router/Home'
// import About from './Router/About'
// import Contact from './Router/Contact'
// import Support from './Router/Support'
// import Navbar from './Router/Navbar'

// function App() {
// 	return (
// 		<BrowserRouter>
// 			<div className='App'>
// 				<Navbar />

// 				<p>Let's Add Routing</p>
// 				<Routes>
// 					<Route
// 						path='/About'
// 						element={<About />}
// 					/>
// 					<Route
// 						path='/support'
// 						element={<Support />}
// 					/>
// 					<Route
// 						path='/Contact'
// 						element={<Contact />}
// 					/>
// 					<Route
// 						path='/'
// 						element={<Home />}
// 					/>
// 				</Routes>
// 			</div>
// 		</BrowserRouter>
// 	)
// }

// export default App

// Zustand example {Library}
// import BookWrapper from './Project/Library/components/BookWrapper'
// import BookForm from './Project/Library/components/bookForm'
// import BookList from './Project/Library/components/bookList'
// import BookNavbar from './Project/Library/components/bookNavbar'
// import ToggleTheme from './Project/Library/components/toggleTheme'

// function App() {
// 	return (
// 		<BookWrapper>
// 			<BookNavbar />
// 			<BookList />
// 			<BookForm />
// 			<ToggleTheme />
// 		</BookWrapper>
// 	)
// }

// export default App

// Context with useReducer example (Favorites)
// import FavoriteTheme from './Project/Favorites/contexts/theme'
// import FavoriteProvider from './Project/Favorites/contexts/favorite'
// import ChangeTheme from './Project/Favorites/components/changeTheme'
// import FavoriteForm from './Project/Favorites/components/favoriteForm'
// import FavoriteList from './Project/Favorites/components/favoriteList'
// import FavoriteNavbar from './Project/Favorites/components/favoriteNavbar'

// const App = () => {
//   return (
//     <div className='App'>
//       <FavoriteTheme>
//         <FavoriteProvider>
//           <FavoriteNavbar />
//           <FavoriteList />
//           <FavoriteForm />
//           <ChangeTheme />
//         </FavoriteProvider>
//       </FavoriteTheme>
//     </div>
//   )
// }

// export default App

// intersection observer api hook example
// import useElementOnScreen from './hooks/useElementOnScreen'

// const App = () => {
// 	const [containerRef, isVisible] = useElementOnScreen({
// 		root: null,
// 		rootMargin: '0px',
// 		threshold: 1.0,
// 	})

// 	return (
// 		<div className='App'>
// 			<div className='isVisible'>
// 				{isVisible ? 'IN VIEWPORT' : 'NOT IN VIEWPORT'}
// 			</div>
// 			<div className='section'></div>
// 			<div
// 				className='box'
// 				ref={containerRef}>
// 				<img
// 					src='/logo192.png'
// 					alt='logo'
// 				/>
// 			</div>
// 		</div>
// 	)
// }

// export default App

// Hooks (built-in & custom) example
// import UseRefExample1 from './hooks/examples/UseRefExample1'
// import UseRefExample2 from './hooks/examples/UseRefExample2'
// import UseRefExample3 from './hooks/examples/UseRefExample3'
// import UseMemoExample from './hooks/examples/UseMemoExample'
// import UseCallbackExample from './hooks/examples/UseCallbackExample'
// import CustomHookExample1 from './hooks/examples/CustomHookExample1'
// import CustomHookExample2 from './hooks/examples/CustomHookExample2'
// import UseImperativeHandleExample from './hooks/examples/UseImperativeHandleExample'

// const App = () => {
// 	return (
// 		<div>
// 			{/* <UseRefExample1 />
// 			<UseRefExample2 />
// 			<UseRefExample3 /> */}

// 			{/* <UseMemoExample /> */}

// 			{/* <UseCallbackExample /> */}

// 			{/* <UseImperativeHandleExample /> */}

// 			{/* <CustomHookExample1 /> */}

// 			<CustomHookExample2 />
// 		</div>
// 	)
// }

// export default App

// Suspense & lazy() example
import { Suspense, lazy } from 'react'
const Names = lazy(() => import('./components/Names'))

const App = () => {
	return (
		<Suspense fallback={<h1>Loading...</h1>}>
			<Names />
		</Suspense>
	)
}

export default App

// Error Boundary example
// import ErrorBoundary from './components/ErrorBoundary'
// import ErrorFallback from './components/ErrorFallback'
// import ErrorCounter from './components/ErrorCounter'
// import { useState } from 'react'

// const App = () => {
// 	const [count, setCount] = useState(0)

// 	return (
// 		<div>
// 			<button onClick={() => setCount(count => count + 1)}>click</button>
// 			<ErrorBoundary
// 				key={count}
// 				FallbackComponent={ErrorFallback}>
// 				<ErrorCounter count={count} />
// 			</ErrorBoundary>
// 		</div>
// 	)
// }

// export default App
