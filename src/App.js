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
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import Home from './Practice/Router/pages/Home';
// import About from './Practice/Router/pages/About';
// import Contact from './Practice/Router/pages/Contact';
// import Support from './Practice/Router/pages/Support';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <nav>
//             <ul>
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="/About">About</Link>
//               </li>
//               <li>
//                 <Link to="/Contact">Contact</Link>
//               </li>
//               <li>
//                 <Link to="/Support">Support</Link>
//               </li>
//             </ul>
//           </nav>
//           <p>Let's Add Routing</p>
//           <Switch>
//           <Route path="/About" component={About}/>
//           <Route path="/support" component={Support}/>
//           <Route path="/Contact" component={Contact}/>
//           <Route path="/" component={Home}/>
//           </Switch>
//       </div>
//     </Router>
//   );
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





// Library (both)
// import React from 'react';
// import BookForm from './Project/Library/components/bookForm';
// import BookList from './Project/Library/components/bookList';
// import ToggleTheme from './Project/Library/components/toggleTheme';
// import BookProvider from './Project/Library/contexts/book';
// import BookTheme from './Project/Library/contexts/theme';
// import BookNavbar from './Project/Library/components/bookNavbar';

// function App() {
//   return (
//     <div className="App">
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





// Play List (useState)
// import React from 'react';
// import SwitchTheme from './Project/PlayList/components/switchTheme';
// import MusicForm from './Project/PlayList/components/musicForm';
// import MusicList from './Project/PlayList/components/musicList';
// import MusicProvider from './Project/PlayList/contexts/music';
// import MusicTheme from './Project/PlayList/contexts/theme';
// import MusicLogin from './Project/PlayList/contexts/login';
// import MusicNavbar from './Project/PlayList/components/musicNavbar';

// function App() {
//   return (
//     <div className="App">
//       <MusicTheme>
//         <MusicProvider>
//           <MusicLogin>
//             <MusicNavbar />
//             <MusicList />
//             <MusicForm />
//             <SwitchTheme />
//           </MusicLogin>
//         </MusicProvider>
//       </MusicTheme>
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
//     <div className="App">
//       <FavoriteTheme>
//         <FavoriteProvider>
//             <FavoriteNavbar />
//             <FavoriteList />
//             <FavoriteForm />
//             <ChangeTheme />
//         </FavoriteProvider>
//       </FavoriteTheme>
//     </div>
//   );
// }

// export default App;





// Game List
import React from 'react';
import GameTheme from './Project/GameList/contexts/theme';
import GameProvider from './Project/GameList/contexts/game';
import GameForm from './Project/GameList/components/gameForm';
import GameList from './Project/GameList/components/gameList';
import GameNavbar from './Project/GameList/components/gameNavbar';
import ThemeChange from './Project/GameList/components/themeChange';

const App = () => {
  return (
    <div className="App">
      <GameTheme>
        <GameProvider>
          <GameNavbar />
          <GameList />
          <GameForm />
          <ThemeChange/>
        </GameProvider>
      </GameTheme>
    </div>
  )
}

export default App;