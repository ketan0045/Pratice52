import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./components/Card";
import Llogin from "./components/Llogin";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/card" element={<Card/>} />
          <Route path="/login" element={<Llogin/>} />
     
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

// json-server --watch db.json --port 3500
// json-server --watch db1.json --port 4500




// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Llogin = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const login = async () => {
//     let item = { email, password };
//         let result = await fetch("http://localhost:3500/products", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify(item),
//     });
//     result = await result.json();
//     localStorage.setItem("user", JSON.stringify(result));
//     navigate("/main");
//   };
//   return (
//     // sachu main che
//     <div>
//         <h1>Login User</h1>
//         {/* <input className='inputfiled' type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}  placeholder='Email'/><br/><br/>
//         <input className='inputfiled'  type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}}  placeholder='Password'/><br/><br/>
//         <button className='loginbtn' onClick={login}>Login</button> */}
//         {/* ** */}
//                 {/* <input
//             type="text"
//             id="inputEmail"
//             className="form-control"
//             placeholder="Email Address"
//             onChange={(e)=>{setEmail(e.target.value)}}
//            value={email} 
//             required
//           /><br/>
//           <input
//             type="text"
//             id="inputpassword"
//             className="form-control"
//             placeholder=" password"
         
//            onChange={(e)=>{setPassword(e.target.value)}}
//             value={password}
//             required
//           />
//           <button className="btn btn-secondry btn-block" type="submit">
//         Sign in
//           </button> */}
//         {/* ** */}
        
//     </div>
//         // sachu main che
//   )
// }

// export default Llogin



// // import "./Login.css";






// //   return (
// //     <div>
// //       <div id="logreg-forms">
// //         <form className="form-signin" onSubmit={handleSubmit}>
// //           <h1
// //             className="h3 mb-3 font-weight-normal"
// //             style={{ textAlign: "center" }}
// //           >
// //             Sign in
// //           </h1>
// //           <div className="social-login">
// //             <button
// //               className="btn google-btn social-btn"
// //               type="button"
// //               onClick={handleGoogleSignin}
// //             >
// //               <span>
// //                 <i className="fab fa-google-plus-g"></i> Sign in with Google+
// //               </span>
// //             </button>
// //             <button
// //               className="btn google-btn social-btn"
// //               type="button"
// //               onClick={handleFBSignin}
// //             >
// //               <span>
// //                 <i className="fab fa-google-plus-g"></i> Sign in with Facebook
// //               </span>
// //             </button>
// //           </div>
// //           <p style={{ textAlign: "center" }}>OR</p>
// // <input
// // type="text"
// // id="inputEmail"
// // className="form-control"
// // placeholder="Email Address"
// // onChange={(e)=>{setEmail(e.target.value)}}
// // value={email} 
// // required
// // /><br/>
// // <input
// // type="text"
// // id="inputpassword"
// // className="form-control"
// // placeholder=" password"

// // onChange={(e)=>{setPassword(e.target.value)}}
// // value={password}
// // required
// // />
// // <button className="btn btn-secondry btn-block" type="submit">
// // Sign in
// // </button>
// //           <button className="btn btn-secondry btn-block" type="submit">
// //           <i className="fas fa-sign-in-alt"></i>Sign in
// //           </button>
// //           <hr />
// //           <p>Don't have any account</p>
// //           <Link to="/register">
// //             <button
// //               className="btn btn-primary btn-block"
// //               type="button"
// //               id="btn-signup"
// //             >
// //               <i className="fas fa-user-plus"></i>Sign up New account
// //             </button>
// //           </Link>
// //         </form>
// //       </div>
// //     </div>
// //   );


// // export default Login;




