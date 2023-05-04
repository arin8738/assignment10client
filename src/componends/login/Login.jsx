/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthPage/AuthProvider";
import Nav from "../header/nav";
// import { FadeLoader } from "react-spinners";

const Login = () => {
  const { Login, LoginWGoogle,LoginWGithub, loader } = useContext(AuthContext);
  const [errorM, setErrorM] = useState("");
  const [isEmail, setEmail] = useState('');
  const [isPassword, setPassword] = useState('');

  const location = useLocation();
  

  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  // console.log(from);

  
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;


    // console.log(email, password);

    Login(email, password)
      .then((result) => {
        console.log(result.user);
        setErrorM("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setErrorM(error.message);
      });

      event.target.reset();
      
      
  };

  

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  const handleWithGoogle = () => {
    LoginWGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
        setErrorM(error.message);
      });
      navigate(from, { replace: true });
  };
  const handleWithGithub = () => {
    LoginWGithub()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
        setErrorM(error.message);
      });

      navigate(from, { replace: true });
  };


 

  return (
   <><Nav></Nav>
    <div className="w-1/3 my-4 md:mb-6 md:mt-24 py-9 px-14 mx-auto text-center rounded-xl border-2 border-black">
        
      <h3 className="text-2xl font-semibold mb-9">Please Log in</h3>
      <form onSubmit={handleLogin} className="text-left">
        <div>
          <h4 className="text-lg font-medium mt-4 mb-1">Your Email</h4>
          <input
          required
            type="email"
            name="email"
            placeholder="Username or Email"
            className="input input-bordered w-full text-black"
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <h4 className="text-lg font-medium mt-4 mb-1">Your Password</h4>
          <input
          required
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered w-full text-black"
            onChange={handlePasswordChange}
          />
        </div>
        <div className="flex justify-between mt-6 mb-10">
          <div>
            <input type="checkbox" name="checkBox" id="" /> Remember me
          </div>
          <p className="text-warning">
            <Link>Forgot Password</Link>
          </p>
        </div>
        <input
          className={`btn bg-my-primary border-none w-full ${(!isPassword || !isEmail) && "btn-disabled"}`}
          type="submit"
          value="Log in"
        />

        {errorM && <p className="my-1 text-danger">{errorM}</p>}
        <p className="my-4">
          Don't have an account?
          <Link to="/register" className="text-warning">
            {" "}
            Create an account
          </Link>
        </p>
      </form>

      <div className="text-center">
          <p className="mt-6 text-warning text-xl font-semibold">Or Sing Up Using</p>
          <div>
            <button
              onClick={handleWithGoogle}
              className="btn bg-my-primary border-none w-full md:w-2/5  mx-3 my-5"
            >
              <Link>Google</Link>
            </button>
            <button
              onClick={handleWithGithub}
              className="btn bg-my-primary border-none w-full md:w-2/5 mx-3 my-5"
            >
              <Link>GitHub</Link>
            </button>
          </div>
        </div>
    </div>
    </> 
  );
};

export default Login;