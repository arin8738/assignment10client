import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="navbar bg-base-300 flex justify-between pb-5 pt-5 pl-16">
            <p className=" font-semibold normal-case text-4xl ">Chef <span className='text-indigo-600 ml-3 text-4xl'>Master</span></p>
            <div>
            <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/Blog'>Blog</Link>
            </div>
            <div className='pr-16'>
            <Link className="btn btn-ghost normal-case text-xl" to='/login'> LogIn</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
            </div>
        </div>
    );
};

export default Nav;