import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import LevandLogo from "../../assets/maint.png";
import { AppContextProv } from '../../context/AppContext';

const Navbar = () => {
    const navigate = useNavigate()
    const { theme, setTheme } = useContext(AppContextProv)
    return (
        <div className="navbar bg-base-200 border rounded-3xl border-red-200  w-10/12 mx-auto my-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={() => navigate("/")}><a>Dashboard</a></li>
                        <li onClick={() => navigate("/about")}><a>About Us</a></li>
                        <li onClick={() => navigate("/contact")}><a>Contact Us</a></li>
                        {/* <li tabIndex={0}>
                            <a className="justify-between">
                                Products
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Kuru Meyvalar</a></li>
                                <li><a>Kuruyemişler 2</a></li>
                            </ul>
                        </li> */}
                    </ul>
                </div>
                <p className="btn btn-ghost normal-case text-xl" onClick={() => navigate("/")}>Levand Gıda</p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li onClick={() => navigate("/")}><a>Dashboard</a></li>
                    <li onClick={() => navigate("/about")}><a>About Us</a></li>
                    <li onClick={() => navigate("/contact")}><a>Contact Us</a></li>
                    {/* <li tabIndex={0}>
                        <a>
                            Products
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul className="p-2">
                            <li><a>Kuru Meyvalar</a></li>
                            <li><a>Kuruyemişler</a></li>
                        </ul>
                    </li> */}

                </ul>
            </div>
            <div className="navbar-end" >
                <form className='w-2 max-w-xs mr-28' >
                    <select className="select select-ghost " onChange={(e) => setTheme(e.target.value)}>
                        <option disabled selected>Theme</option>
                        <option value={'dark'}>dark</option>
                        <option value={'light'}>light</option>
                    </select>
                </form>
                <div onClick={() => navigate("/")}>
                    <a className="btn btn-outline border-none xs:hidden sm:inline-block"> <img src={LevandLogo} alt="levand-logo" width={50} /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar