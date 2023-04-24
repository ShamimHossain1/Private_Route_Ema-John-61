import React from 'react';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='bg-slate-800 flex justify-between items-center py-5 px-20 sticky top-0 '>
            <img src={logo} alt="" />

            <div className='text-white text-xl flex gap-10'>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signUp">Sign up</Link>
                
            </div>
        </nav>
        
    );
};

export default Header;