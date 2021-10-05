import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById('root')
);

reportWebVitals();



// import React from 'react';
// import reactDom from 'react-dom';
// import { createStore } from 'redux';
// import Reducer from './Practice/Redux/reducers'
// import Counter from './Practice/Redux/components/counter';
// import './index.css';

// const store = createStore(Reducer)
// const rootElement = document.getElementById('root');

// const render = () => reactDom.render(
//   <Counter
//     value={store.getState()}
//     onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
//     onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
//   />, rootElement
// )

// render()
// store.subscribe(render)