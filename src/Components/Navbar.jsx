import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import { CoinName } from '../utils/Constant'
import { Explorer_Url } from '../utils/Base_url'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function Navbar(props) {
  const tokenString = sessionStorage.getItem('token')
  const userToken = JSON.parse(tokenString)
  return (
    <>
      <div className='container-fluid mt-2 max-width-container'>
        <div className='row'>
          <div className='col-10 mx-auto col-style'>
            <nav className='navbar navbar-expand-lg navbar-light bg-transparent'>
              <div className='container-fluid'>
                <Link to={'/'} className='route navbar-brand'>
                  <img className='logo img-fluid' src={logo} alt='logo'></img>
                </Link>
                <button
                  className='navbar-toggler toggler-custom'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#navbarSupportedContent'
                  aria-controls='navbarSupportedContent'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
                >
                  <span className='navbar-toggler-icon navbar-custom'></span>
                </button>
                <div
                  className='collapse navbar-collapse justify-content-around'
                  id='navbarSupportedContent'
                >
                  <ul className='navbar-nav mb-2 mb-lg-0 gap-lg-1 navbar-cus'>
                    <li className='nav-item '>
                      <a className='nav-link text-white' href='#'>
                        Home
                      </a>
                    </li>
                    <li className='nav-item '>
                      <a className='nav-link text-white' href='#AboutUs'>
                        About
                      </a>
                    </li>
                    <li className='nav-item '>
                      <a
                        className='nav-link text-white explorer-pointer'
                        onClick={() => {
                          window.open(Explorer_Url, '_blank')
                        }}
                      >
                        Products
                      </a>
                    </li>
                    <li className='nav-item '>
                      <a className='nav-link text-white' href='#blog-sec'>
                        Events
                      </a>
                    </li>

                    <li className='nav-item '>
                      <a className='nav-link text-white' href='#blog-sec'>
                        Blog
                      </a>
                    </li>
                    <li className='nav-item mr-5'>
                      <a className='nav-link text-white' href='#blog-sec'>
                        Contact
                      </a>
                    </li>
                  </ul>
                  <div
                    className='btn-group btn-g'
                    role='group'
                    aria-label='Basic outlined example'
                  >
                    {userToken ? (
                      <div>
                        <Link
                          to={'/Dashboard'}
                          className='text-decoration-none'
                        >
                          <div className='circle-img d-flex justify-content-center'>
                            {userToken ? (
                              <img
                                src={userToken?.user?.profileImage}
                                className='user-icon-img user-icon ms-1'
                              />
                            ) : (
                              <FontAwesomeIcon
                                icon={faUser}
                                color='white'
                                className='user-icon fs-3'
                              />
                            )}
                          </div>
                          <small className='ms-1 text-white label'>
                            {userToken.user.firstname}
                          </small>
                        </Link>
                      </div>
                    ) : (
                      <>
                        <Link to={'/Login'}>
                          <button
                            type='button'
                            className='btn-radius-up top-login'
                          >
                            Sign in
                          </button>
                        </Link>
                        <Link to={'/Signup'}>
                          {' '}
                          <button
                            type='button'
                            className='btn-radius-in top-signup'
                          >
                            Sign up
                          </button>
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
export default Navbar
