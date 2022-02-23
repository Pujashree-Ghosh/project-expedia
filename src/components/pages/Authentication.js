// import React, { useState, useEffect } from "react";
// import { LoadingIndicator } from "react-select/dist/declarations/src/components/indicators";
// import fire from "./../../fire";
// function Authenticate() {
//   const [user, setUser] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [emailError, setEmailError] = useState("");
//   const [emailPassword, setPasswordError] = useState("");
//   const [hasAccount, setHasAccount] = useState(false);
//   const clearInputs = () => {
//     setEmail("");
//     setPassword("");
//   };
//   const clearErrors = () => {
//     setEmailError("");
//     setPasswordError("");
//   };
//   const handlelogin = () => {
//     clearErrors();
//     fire
//       .auth()
//       .signInWithEmailAndPassword(email, password)
//       .catch((err) => {
//         switch (err.code) {
//           case "auth/invalid-email":
//           case "auth/user-disabled":
//           case "auth/user-not-found":
//             setEmailError(err.message);
//             break;
//           case "auth/wrong-password":
//             setPasswordError(err.message);
//             break;
//         }
//       });
//   };

//   const handleSignUp = () => {
//     clearErrors();
//     fire

//       .auth()
//       .createUserWithEmailAndPassword(email, password)
//       .catch((err) => {
//         switch (err.code) {
//           case "auth/email-already-in-use":
//           case "auth/invalid-email":
//             setEmailError(err.message);
//             break;
//           case "auth/weak-password":
//             setPasswordError(err.message);
//             break;
//         }
//       });
//   };
//   const handleLogout = () => {
//     fire.auth.signOut();
//   };
//   const authListener = () => {
//     fire.auth.onAuthStateChanged((user) => {
//       if (user) {
//         clearInputs();
//         setUser(user);
//       } else {
//         setUser("");
//       }
//     });
//   };

//   useEffect(() => {
//     authListener();
//   }, []);
//   return (
//     <div>
//       <Login
//         email={email}
//         setEmail={setEmail}
//         password={password}
//         setPassword={setPassword}
//         handlelogin={handlelogin}
//         handleSignUp={handleSignUp}
//         hasAccount={hasAccount}
//         setHasAccount={setHasAccount}
//         emailError={emailError}
//         passwordError={PasswordError}
//       />
//     </div>
//   );
// }
// export default Authenticate;
