import React, { useContext } from 'react';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProviders/AuthProviders';
import { Button } from 'flowbite-react';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }

    return (
        <nav className='bg-slate-800 flex justify-between items-center py-5 px-20 sticky top-0 '>
            <img src={logo} alt="" />

            <div className='text-white text-xl flex gap-10'>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                {user ? null : <Link to="/login">Login</Link>}
                {user ? null : <Link to="/signUp">Sign up</Link>}
                {
                    user && <span className='text-sm flex items-center gap-4'>Welcome {user.email} <Link to='/login'><Button onClick={handleLogout}>Sign Out</Button></Link></span>
                }

            </div>
        </nav>

    );
};

export default Header;