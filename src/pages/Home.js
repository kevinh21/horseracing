import React from "react";
import "../components/styles/Home.css";

function WelcomePage() {
  return (
    <div>
      <h1>Welcome to our Horse Racing Application</h1>
      <p>
        We're excited to bring you the ultimate horse racing experience online.
      </p>
      <p>
        With our application, you'll be able to watch live horse races, place
        bets, and view race results in real-time.
      </p>
      <p>
        Our application is designed to be user-friendly, so you can easily
        navigate through the different features and get the most out of your
        experience.
      </p>
      <p>
        Whether you're a seasoned horse racing enthusiast or new to the sport,
        we have something for everyone.
      </p>
      <p>
        So what are you waiting for? Sign up today and start your journey into
        the world of horse racing with our cutting-edge React.js application.
      </p>
      <p> PLEASE STAY TUNED.....</p>
    </div>
  );
}

export default WelcomePage;

// add a login and registration using react redux latest version

// First, you need to install the required packages. You can use the following commands in your terminal:

// Copy code
// npm install react-redux redux
// Next, create a new file called authReducer.js to manage the state of your authentication process. Here's a sample code snippet:

// javascript
// Copy code
// const initialState = {
//   loggedIn: false,
//   user: null,
// };

// const authReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'LOGIN':
//       return {
//         ...state,
//         loggedIn: true,
//         user: action.payload,
//       };
//     case 'LOGOUT':
//       return {
//         ...state,
//         loggedIn: false,
//         user: null,
//       };
//     default:
//       return state;
//   }
// };

// export default authReducer;
// Next, create a new file called authActions.js to define your authentication actions. Here's a sample code snippet:

// javascript
// Copy code
// export const login = (user) => {
//   return {
//     type: 'LOGIN',
//     payload: user,
//   };
// };

// export const logout = () => {
//   return {
//     type: 'LOGOUT',
//   };
// };
// Next, create a new file called LoginForm.js to handle the login form. Here's a sample code snippet:

// javascript
// Copy code
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { login } from './authActions';

// function LoginForm() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Perform authentication and get user object
//     const user = { username: username, password: password };
//     dispatch(login(user));
//   };

//   return (
//     <form onSubmit={handleLogin}>
//       <div>
//         <label>Username</label>
//         <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//       </div>
//       <div>
//         <label>Password</label>
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       </div>
//       <button type="submit">Login</button>
//     </form>
//   );
// }

// export default LoginForm;
// Next, create a new file called RegistrationForm.js to handle the registration form. Here's a sample code snippet:

// javascript
// Copy code
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { login } from './authActions';

// function RegistrationForm() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();

//   const handleRegistration = (e) => {
//     e.preventDefault();
//     // Perform registration and get user object
//     const user = { username: username, password: password };
//     dispatch(login(user));
//   };

//   return (
//     <form onSubmit={handleRegistration}>
//       <div>
//         <label>Username</label>
//         <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//       </div>
//       <div>
//         <label>Password</label>
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       </div>
//       <button type="submit">Register</button>
//     </form>
//   );
// }

// export default RegistrationForm;
// Finally, in your main App.js file, you can render the LoginForm and RegistrationForm components as needed. Here's a
