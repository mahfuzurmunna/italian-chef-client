import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo-2.png";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Header = () => {

  const { user, logOutUser } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(user?.email);

  const handleLogOut = () => {
    logOutUser().then().catch(error => console.log(error.message))
  }
  // const [cart, setCart] = useContext()
  return (
    // header starts
    <div className="bg-bg-nav min-h-[262px] object-cover ">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 max-w-[1024px] pt-14 ">
        <div className=" relative flex items-center justify-between ">
          {/* logo here */}

          <Link to="/" aria-label="Vecchio" title="Vecchio" className="">
            <img src={logo} alt="" className=" lg:w-[200px]" />
          </Link>

          {/* nav ul li */}

          <ul className="items-center hidden space-x-8 lg:flex text-xl">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              <li>Blog</li>
            </NavLink>

            <NavLink
              to="register"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              <li>Register</li>
            </NavLink>

            {user ? (
              <>
                <span className="default">{user.email}</span>
                <li>
                  <button
                    href="#_"
                    className="relative inline-block text-lg group"
                    onClick={handleLogOut}
                  >
                    <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out border-2 border-accent  group-hover:text-white">
                      <span className="absolute inset-0 w-full h-full px-5 py-3  bg-primary"></span>
                      <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-accent group-hover:-rotate-180 ease "></span>
                      <span className="relative text-xl font-bold ">
                        Log Out
                      </span>
                    </span>
                  </button>
                </li>
              </>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                <li>Login</li>
              </NavLink>
            )}
          </ul>

          {/* Mobile view */}

          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-white" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>

            {/* conditional display */}
            {isMenuOpen && (
              <div className=" absolute z-10 top-0 left-0  w-full">
                <div className="p-5 bg-primary mb-4">
                  <div className=" flex items-center justify-between mb-4">
                    <div className="flex items-center justify-between w-full">
                      <Link
                        to="/"
                        aria-label="Vecchio"
                        title="Vecchio"
                        className=""
                      >
                        <img src={logo} alt="" />
                      </Link>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg
                            className="w-5 text-gray-600"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                        <nav>
                          <ul className="space-y-4">
                            <NavLink>
                              <li
                                className={({ isActive }) =>
                                  isActive ? "active" : "default"
                                }
                              >
                                Home
                              </li>
                            </NavLink>
                            <NavLink>
                              <li
                                className={({ isActive }) =>
                                  isActive ? "active" : "default"
                                }
                              >
                                Blog
                              </li>
                            </NavLink>
                            <NavLink>
                              <li
                                className={({ isActive }) =>
                                  isActive ? "active" : "default"
                                }
                              >
                                Log In
                              </li>
                            </NavLink>
                            <NavLink>
                              <li
                                className={({ isActive }) =>
                                  isActive ? "active" : "default"
                                }
                              >
                                Register
                              </li>
                            </NavLink>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
