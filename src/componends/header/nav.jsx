import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="navbar bg-base-300 flex justify-between">
            <a className="btn btn-ghost normal-case text-xl pl-16">chef Master</a>
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