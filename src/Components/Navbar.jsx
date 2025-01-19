import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                   <p>Home</p>
                   <p>Login</p>
                   <p>Register</p>

                        </ul>
                    </div>
                    <a className="flex text-3xl font-bold text-emerald-600">
                        <img className="w-20" src="https://i.ibb.co.com/Bg4GwJQ/png-transparent-dog-tag-cat-pet-pet-footprints-logo-miscellaneous-free-logo-design-template-text-thu.png"></img>
                        <span className="my-6 script">Amazing Pet</span>
                    </a>
                </div>
                <div className="flex-1 gap-5 font-bold text-blue-600">
                  
                 
                  <Link to="/"> <p>Home</p></Link>
                 
                  <Link to="/petListing"> <p>Pet Listing</p></Link>
                  <Link to="/login"><p>Login</p></Link>
                 <Link to="/register"> <p>Register</p></Link>
                </div>

                <div className="flex-none gap-2">

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    
                      
                                </a>
                            </li>
                            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;