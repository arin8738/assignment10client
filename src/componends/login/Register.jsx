

/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthPage/AuthProvider";
import Nav from "../header/nav";


const Register = () => {
  const [errorM, setErrorM] = useState("");
  const [passError, setPassError] = useState("");

  const { loader, Register, LoginWGoogle, LoginWGithub, handleUpdateProfile } = useContext(AuthContext);

  const [isEmail, setEmail] = useState("");
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const [isPassword, setPassword] = useState("");
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const [isConfirmPassword, setConfirmPassword] = useState("");
  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const navigate = useNavigate();

  // const from = useLocation();
  // console.log(from)
  // console.log(createPath)


  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password.length < 6 || confirmPassword.length < 6) {
      setErrorM("Password must be at least 6 digits!");
      return;
    }

    if (password != confirmPassword) {
      setErrorM("Password does not match!");
      setPassError("Password does not match!");
      return;
    } else {
      setErrorM("");
      setPassError("");
    }
    
    console.log(name, photoURL, email, password, confirmPassword);

    Register(email, password)
      .then((result) => {
        handleUpdateProfile(name, photoURL);
        console.log("Register Successful", result.user);
        setErrorM("");
        navigate("/login")
      })
      .catch((error) => {
        console.log(error);
        setErrorM(error.message);
      });
      
    event.target.reset();
  };

  const handleWithGoogle = () => {
    LoginWGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
        setErrorM(error.message);
      });

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
  };


  return (
    <div>
        <Nav></Nav>
      <div className="md:w-1/3 my-4 md:mb-6 md:mt-24 py-4 px-14 mx-auto text-center rounded-xl border-2 border-black">
        <h3 className="text-2xl font-semibold mb-5">Please Register</h3>
        <form onSubmit={handleRegister} className="text-left">
          <div>
            <h4 className="text-lg font-medium mt-2 mb-1">Your Name</h4>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered w-full text-black"
            />
          </div>
          <div>
            <h4 className="text-lg font-medium mt-2 mb-1">Photo URL</h4>
            <input
              type="text"
              name="photoURL"
              placeholder="Enter photo URL"
              className="input input-bordered w-full text-black"
            />
          </div>

          <div>
            <h4 className="text-lg font-medium mt-2 mb-1">Your Email</h4>
            <input
              required
              type="email"
              name="email"
              placeholder="Username or Email"
              className="input input-bordered w-full text-black"
              onChange={handleEmail}
            />
          </div>
          <div>
            <h4 className="text-lg font-medium mt-2 mb-1">Your Password</h4>
            <input
              required
              type="password"
              name="password"
              placeholder="Password"
              // className="input input-bordered w-full text-black"
              className={`input input-bordered w-full text-black ${
                passError && "border-danger"
              }`}
              onChange={handlePassword}
            />
          </div>
          <div>
            <h4 className="text-lg font-medium mt-2 mb-1">Confirm Password</h4>
            <input
              required
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className={`input input-bordered w-full text-black ${
                passError && "border-danger"
              }`}
              onChange={handleConfirmPassword}
            />
          </div>

          <input
            className={`btn bg-my-primary border-none w-full mt-3 ${
              (!isEmail || !isPassword || !isConfirmPassword) && "btn-disabled"
            }`}
            type="submit"
            value="Register"
          />

          {errorM && <p className="my-1 text-danger">{errorM}</p>}
          <p className="my-2">
            Already have an account?
            <Link to="/login" className="text-warning">
              {" "}
              Login
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
    </div>
  );
};

export default Register;