// portals
// import ReactDOM from 'react-dom'
// function App() {

//   // Creating a portal
//   return ReactDOM.createPortal(
//     <h1>Portal demo</h1>,
//     document.getElementById('portal')
//  )
// }

// export default App;





// Practice (Router)
// import { BrowserRouter as Router, Route, NavLink, Routes } from "react-router-dom";
// import Home from './Practice/Router/Home';
// import About from './Practice/Router/About';
// import Contact from './Practice/Router/Contact';
// import Support from './Practice/Router/Support';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <nav>
//           <ul>
//             <li>
//               <NavLink to="/">Home</NavLink>
//             </li>
//             <li>
//               <NavLink to="/About">About</NavLink>
//             </li>
//             <li>
//               <NavLink to="/Contact">Contact</NavLink>
//             </li>
//             <li>
//               <NavLink to="/Support">Support</NavLink>
//             </li>
//           </ul>
//         </nav>
//         <p>Let's Add Routing</p>
//         <Routes>
//           <Route path="/About" element={<About />} />
//           <Route path="/support" element={<Support />} />
//           <Route path="/Contact" element={<Contact />} />
//           <Route path="/" element={<Home />} />
//         </Routes>
//       </div>
//     </Router>
//   )
// }

// export default App;





// Practice (Hooks) & (ContextAPI)
// import './App.css';
// import LoginProvider from "./Practice/ContextAPI/contexts/LoginContext";
// import ThemeProvider from "./Practice/ContextAPI/contexts/ThemeContext";
// import BookListHook from './Practice/Hooks/components/BookListHook';
// import NavbarHook from './Practice/Hooks/components/NavbarHook';
// import ChangeThemeHook from './Practice/Hooks/components/ChangeThemeHook';
// import BookListProvider from './Practice/Hooks/context/BookContextHook';

// function App() {
//   return (
//     <div className="App">

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

// export default App;





// Library (state)
// import React from 'react';
// import BookForm from './Project/Library/components/bookForm';
// import BookList from './Project/Library/components/bookList';
// import ToggleTheme from './Project/Library/components/toggleTheme';
// import BookProvider from './Project/Library/contexts/book';
// import BookTheme from './Project/Library/contexts/theme';
// import BookNavbar from './Project/Library/components/bookNavbar';

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

// export default App;





// Favorites (Reducer)
// import React from 'react';
// import FavoriteProvider from './Project/Favorites/contexts/favorite';
// import FavoriteTheme from './Project/Favorites/contexts/theme';
// import FavoriteNavbar from './Project/Favorites/components/favoriteNavbar';
// import FavoriteForm from './Project/Favorites/components/favoriteForm';
// import FavoriteList from './Project/Favorites/components/favoriteList';
// import ChangeTheme from './Project/Favorites/components/changeTheme';

// const App = () => {
//   return (
//     <div className='App'>
//       <FavoriteTheme>
//         <FavoriteProvider>
//             <FavoriteNavbar />
//             <FavoriteList />
//             <FavoriteForm />
//             <ChangeTheme />
//         </FavoriteProvider>
//       </FavoriteTheme>
//     </div>
//   )
// }

// export default App;