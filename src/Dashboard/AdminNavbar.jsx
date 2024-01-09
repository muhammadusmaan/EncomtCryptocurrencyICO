import React, { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
  faBell
} from '@fortawesome/free-solid-svg-icons'

import bellicon from './bell.png'
import logo from '../images/logo.png'
import './sidebar.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AdminLayout from './AdminLayout'

const AdminNavbar = ({ handleClick }) => {

  const [isSidebar, setIsSidebar] = useState();

  const [isAdmin, setIsAdmin] = useState('');
  const [isClicked, setIsClicked] = useState('')
  const Navigate = useNavigate()
  const tokenString = sessionStorage.getItem('token')
  const userToken = JSON.parse(tokenString)

  const tokenString2 = sessionStorage.getItem('userData')
  const userData = JSON.parse(tokenString2)

  const [userImage, setUserImage] = useState()
  const [TabName, SetTabName] = useState('')

  useEffect(() => {
    setIsSidebar(sessionStorage.getItem("Sidebar"))


   
  }, [])


  const openSidebar = () => {
    handleClick();
  }


  const iconClicked = (isClicked, e) => {
    e.preventDefault()

    if (e === 'Notification') {
      Navigate('/Dashboard/Notification');
    }
    if (e === 'ChangePassword') {
      Navigate('/Dashboard/ChangePassword');
    }

    return setIsClicked(isClicked)
  }
  const Logout = (e) => {
    sessionStorage.removeItem('token')
    Navigate('/Login')
  }




  return (
    <>

      <div className='container-fluid '>
        <ToastContainer />
        <div className='row'>
          <div className='dash-top-head'>
            <nav className='navbar navbar-expand-lg navbar-light '>
              <div className='container-fluid'>
                <span
                  className='hamburger'
                  onClick={() => {
                    openSidebar()
                  }}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 user-icon'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                      clipRule='evenodd'
                    />
                  </svg>
                </span>
                <a href='/Dashboard' className='brand dash-logo'>
                  <img
                    className='logo img-fluid'
                    src={logo}
                    width='50%'
                    alt='logo'
                  ></img>
                </a>
                <button
                  className='navbar-toggler toggler-dash'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#navbarSupportedContent'
                  aria-controls='navbarSupportedContent'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
                >
                  <span className='navbar-toggler-icon icon-change'></span>
                </button>

                <div
                  className='collapse navbar-collapse'
                  id='navbarSupportedContent'
                >
                  <ul className='navbar-nav ms-auto mb-2 mt-lg-2 mb-lg-0 gap-lg-3 navbar-dashboard align-items-center justify-content-end'>

                    <Link to="/Dashboard/AdminNotification" style={{

                      textDecoration: "none"
                    }}>
                      <li onClick={() => {
                        iconClicked.bind(this, "Notification")
                      }} className="dropdown d-flex flex-column m-0">
                        <div className='badge-parent'>
                          <span class="badge badge-danger badge-custom"></span>
                        </div>
                        <img
                          className="mb-0"
                          width="20"
                          height="20"
                          src={bellicon}
                          alt=""
                          style={{ alignSelf: 'center' }}
                        />
                        <small className="text-white notification-text-res" >Sell Coins</small>
                      </li>
                    </Link>

                    {/* Image and Name */}
                    <li className='dropdown d-flex flex-column'>
                      <FontAwesomeIcon
                        icon={faUser}
                        color='white'
                        className='gap-1920'
                      />
                      <a
                        className='btn border-0 text-white dropdown-toggle dd-btn'
                        href='#'
                        role='button'
                        id='dropdownMenuLink'
                        data-bs-toggle='dropdown'
                        aria-expanded='false'
                      >
                        <small className='text-white text-white notification-text-res'>
                          {userData ? userData.firstname : ''}
                        </small>
                      </a>
                      <ul

                        className='dropdown-menu dd-list justify-content-end cardBg'
                        aria-labelledby='dropdownMenuLink'

                      >
                        <li

                          style={{ position: "relative" }}
                        >
                          <a
                            onClick={(e) => {
                              Logout(e)
                            }}
                            className='dropdown-item cursor notification-text-res user-crud text-white'
                          >
                            Log Out
                          </a>
                        </li>
                      </ul>
                    </li>

                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>


    </>
  )

}

export default AdminNavbar;