import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// function ScrimbaHeader(){
//   return(
//     <header>
//       <nav>
//         <img src="./img/logo.svg" width="40px" alt=""/>
//       </nav>
//     </header>
//   )
// }
// function ScrimbaIndex(){
//   return(
//     <div>
//       <ScrimbaHeader />
//       <h1>Fun Facts About React</h1>
//       <ul>
//         <li>Was first released in 2013</li>
//         <li>Was originally created by Jordan Walker</li>
//         <li>Has over 100k stars on githugb </li>
//         <li>Is maintaned by facebook</li>
//         <li>Powers thousands of enterprise apps</li>
//       </ul>
//     </div>
//   )
// }
// root.render(<ScrimbaIndex />, document.getElementById('root'));
