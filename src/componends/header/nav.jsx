import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthPage/AuthProvider";


const Nav = () => {
  const { user, Logout } = useContext(AuthContext);
  // console.log(user)
  const handleLogOut = () => {
    Logout()
      .then(() => {
        console.log("Log out successful");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className=" px-2 md:px-32  bg-base-300  text-black text-base">
        <div className="navbar bg-transparent">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box "
              >
                <li className="md:mx-6 text-black">
                  <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? " text-my-primary" : "text-black"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="md:mx-6 text-black">
                  <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                      isActive ? "text-my-primary" : "text-white"
                    }
                  >
                    Blog
                  </NavLink>
                </li>
              </ul>
            </div>
            <Link
              to="/"
              className="px-0  h-14 btn btn-ghost mr-3 normal-case text-xl md:text-3xl text-my-primary"
            >
              {/* <img className="h-10 rounded-full mr-3" src="data:image/jpeg;base64,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" alt="" /> */}
              Chef <span className="text-indigo-600 ml-3"> Master</span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li className="md:mx-6 text-black">
                  <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? " text-my-primary text-xl font-semibold" : "text-white"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="md:mx-6 text-black">
                  <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                      isActive ? "text-my-primary text-xl font-semibold" : "text-white"
                    }
                  >
                    Blog
                  </NavLink>
                </li>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="w-10 rounded-full mx-4">
              {user && (
                <img
                  className="rounded-full"
                  src={user?.photoURL}
                  alt="User img"
                  title={user?.displayName}
                />
              )}
            </div>
            {/* {user && <h3 className="mx-2">{user?.displayName}</h3>} */}
            {user ? (
              <Link
                onClick={handleLogOut}
                className="btn bg-my-primary border-none"
              >
                Log out
              </Link>
            ) : (
              <Link to="/login" className="btn bg-my-primary border-none">
                Login
              </Link>
            )}
            {/* <Link to="/login" className="btn bg-my-primary border-none">
              Login
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
