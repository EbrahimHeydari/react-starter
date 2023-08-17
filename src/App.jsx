// portals
// import ReactDOM from 'react-dom'
// function App() {
//   // Creating a portal
//   return ReactDOM.createPortal(
//     <h1>Portal demo</h1>,
//     document.getElementById('portal')
//  )
// }

// export default App

// Practice (Router)
// import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom'
// import Home from './Practice/Router/Home'
// import About from './Practice/Router/About'
// import Contact from './Practice/Router/Contact'
// import Support from './Practice/Router/Support'
// import './App.css'

// function App() {
//   return (
//     <Router>
//       <div className='App'>
//         <nav>
//           <ul>
//             <li>
//               <NavLink to='/'>Home</NavLink>
//             </li>
//             <li>
//               <NavLink to='/About'>About</NavLink>
//             </li>
//             <li>
//               <NavLink to='/Contact'>Contact</NavLink>
//             </li>
//             <li>
//               <NavLink to='/Support'>Support</NavLink>
//             </li>
//           </ul>
//         </nav>
//         <p>Let's Add Routing</p>
//         <Routes>
//           <Route path='/About' element={<About />} />
//           <Route path='/support' element={<Support />} />
//           <Route path='/Contact' element={<Contact />} />
//           <Route path='/' element={<Home />} />
//         </Routes>
//       </div>
//     </Router>
//   )
// }

// export default App

// Practice (Hooks) & (ContextAPI)
// import './App.css'
// import LoginProvider from './Practice/ContextAPI/contexts/LoginContext'
// import ThemeProvider from './Practice/ContextAPI/contexts/ThemeContext'
// import BookListHook from './Practice/Hooks/components/BookListHook'
// import NavbarHook from './Practice/Hooks/components/NavbarHook'
// import ChangeThemeHook from './Practice/Hooks/components/ChangeThemeHook'
// import BookListProvider from './Practice/Hooks/context/BookContextHook'

// function App() {
//   return (
//     <div className='App'>

//       {/* (Context in Hooks) */}
// <ThemeProvider>
//   <LoginProvider>
//     <NavbarHook />
//     <BookListProvider>
//       <BookListHook />
//     </BookListProvider>
//     <ChangeThemeHook />
//   </LoginProvider>
// </ThemeProvider>
//     </div>
//   )
// }

// export default App

// // UseImperativeHandle Example
// import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'

// // Parent Component
// const App = () => {
// 	const ref = useRef()

// 	return (
// 		<div>
// 			<Button ref={ref} />
// 			<button onClick={() => ref.current.increment()}>another button</button>
// 		</div>
// 	)
// }

// export default App

// // Child Component
// const Button = forwardRef((props, ref) => {
// 	useImperativeHandle(ref, () => ({ increment }))

// 	const [count, setCount] = useState(0)
// 	const increment = () => setCount(count + 1)
// 	return (
// 		<div>
// 			<button onClick={increment}>click</button>
// 			<h2>Count: {count}</h2>
// 		</div>
// 	)
// })


// Library (state)
// import React from 'react'
// import BookTheme from './Project/Library/contexts/theme'
// import BookProvider from './Project/Library/contexts/book'
// import BookForm from './Project/Library/components/bookForm'
// import BookList from './Project/Library/components/bookList'
// import BookNavbar from './Project/Library/components/bookNavbar'
// import ToggleTheme from './Project/Library/components/toggleTheme'

// function App() {
//   return (
//     <div className='App'>
//       <BookTheme>
//         <BookProvider>
//           <BookNavbar/>
//           <BookList/>
//           <BookForm/>
//           <ToggleTheme/>
//         </BookProvider>
//       </BookTheme>
//     </div>
//   )
// }

// export default App

// Favorites (Reducer)
import React from 'react'
import FavoriteTheme from './Project/Favorites/contexts/theme'
import FavoriteProvider from './Project/Favorites/contexts/favorite'
import ChangeTheme from './Project/Favorites/components/changeTheme'
import FavoriteForm from './Project/Favorites/components/favoriteForm'
import FavoriteList from './Project/Favorites/components/favoriteList'
import FavoriteNavbar from './Project/Favorites/components/favoriteNavbar'

const App = () => {
  return (
    <div className='App'>
      <FavoriteTheme>
        <FavoriteProvider danger>
          <FavoriteNavbar />
          <FavoriteList />
          <FavoriteForm />
          <ChangeTheme />
        </FavoriteProvider>
      </FavoriteTheme>
    </div>
  )
}

export default App
