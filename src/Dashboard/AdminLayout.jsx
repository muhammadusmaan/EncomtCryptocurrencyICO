import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHome, faShield, faHistory, faCoins, faWallet, faUser, faInfo, faQuestion,
    faQuestionCircle, faSignOut, faGear, faBell, faBox, faCreditCard, faChevronDown,faChevronUp, faEarthAmericas, faCopy, faBlog,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from 'react-router-dom';
// import UserLogo from '../images/user-icon.png'
import './sidebar.css'
import { useNavigate } from 'react-router-dom';

const AdminLayout = (props) => {

    const [isAdmin, setIsAdmin] = useState('');
    
    const [isSidebar, setIsSidebar] = useState()
    const [renderComponent, setRenderComponent] = useState()
    const [showinMobile, setShowinMobile] = useState(false)
    const [isClicked, setIsClicked] = useState("")
    const [TabName, SetTabName] = useState("Home");
    const [isShow, SetIsShow] = useState(false);
    const Navigate = useNavigate();
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    const [isUrl, setIsUrl] = useState();


    const openSidebar = (isSidebar) => {
        return setIsSidebar(!isSidebar)
    }
    const iconClicked = (isClicked, e) => {
        e.preventDefault();
        return setIsClicked(isClicked)
    }

    const Logout = (e, res) => {
        Navigate("/Login")
        sessionStorage.removeItem('token');
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
        Navigate("/Login")
    }
    useEffect(() => {
       // setIsAdmin(userToken.user.isAdmin);
        setIsUrl(window.location.pathname);
    })

    return(
        <>

         {/* Sidebar */}
         
         <div className='col-lg-2 col-md-3 col-sm-3 col-xs-3 container fontWeight'>
            <div
              className='sidebar-block'
              style={{ left: isSidebar ? '-260px' : '0' }}
            >
              <ul className='sidebar-responsive-4k'>
                
                  <li
                    onClick={() => {
                      iconClicked.bind(this, 'home')
                      SetTabName('Home')
                    }}
              >
                       <Link
                      to='/Dashboard/AdminHome'
                      className='align-middle cursor gap-2'
                            >
                      
                      <FontAwesomeIcon
                        className='gap-1920'
                        icon={faHome}
                        style={
                          isUrl === '/Dashboard/AdminHome'
                            ? { color: '#e83184' }
                            : { color: 'white' }
                        }
                      />
                      <span className='ms-1 ' style={{ color: 'white' }}>
                        Home
                      </span>
                    </Link>
                  </li>
              
              
                  <li
                    onClick={() => {
                      iconClicked.bind(this, 'user')
                      SetTabName('User')
                    }}
                  >
                    <Link
                      to='/Dashboard/User'
                      className='align-middle cursor gap-2'
                    >
                      <FontAwesomeIcon
                        className='gap-1920'
                        icon={faUser}
                        style={
                          isUrl === '/Dashboard/User'
                            ? { color: '#e83184' }
                            : { color: 'white' }
                        }
                      />
                      <span
                        className='ms-1'
                        style={
                          TabName === 'User'
                            ? { color: '#e83184' }
                            : { color: 'white' }
                        }
                      >
                        User
                      </span>
                    </Link>
                  </li>
                
                  <li
                    onClick={() => {
                      iconClicked.bind(this, 'KYCAdmin')
                      SetTabName('KYCAdmin')
                    }}
                  >
                    <Link
                      to='/Dashboard/KYCAdmin'
                      className='align-middle cursor gap-2'
                    >
                      <FontAwesomeIcon
                        className='gap-1920'
                        icon={faShield}
                        style={
                          isUrl === '/Dashboard/KYCAdmin'
                            ? { color: '#e83184' }
                            : { color: 'white' }
                        }
                      />
                      <span
                        className='ms-1'
                        style={
                          TabName === 'KYCAdmin'
                            ? { color: '#e83184' }
                            : { color: 'white' }
                        }
                      >
                        KYC
                      </span>
                    </Link>
                  </li>
                
                  <li
                    onClick={() => {
                      iconClicked.bind(this, 'PurchaseHistoryAdmin')
                      SetTabName('PurchaseHistoryAdmin')
                    }}
                  >
                    <Link
                      to='/Dashboard/PurchaseHistoryAdmin'
                      className='align-middle cursor gap-2'
                    >
                      <FontAwesomeIcon
                        className='gap-1920'
                        icon={faHistory}
                        style={
                          isUrl === '/Dashboard/PurchaseHistoryAdmin'
                            ? { color: '#e83184' }
                            : { color: 'white' }
                        }
                      />
                      <span
                        className='ms-1'
                        style={
                          TabName === 'PurchaseHistoryAdmin'
                            ? { color: '#e83184' }
                            : { color: 'white' }
                        }
                      >
                        Purchase History
                      </span>
                    </Link>
                  </li>
                
              
                  <li
                    onClick={() => {
                      iconClicked.bind(this, 'Packages')
                      SetTabName('Packages')
                      setRenderComponent(!renderComponent)
                    }}
                  >
                    <Link
                      to='/Dashboard/Packages'
                      className='align-middle cursor gap-2'
                    >
                      <FontAwesomeIcon
                        className='gap-1920'
                        icon={faBox}
                        style={
                          isUrl === '/Dashboard/Packages'
                            ? { color: '#e83184' }
                            : { color: 'white' }
                        }
                      />
                      <span
                        className='ms-1'
                        style={
                          TabName === 'Packages'
                            ? { color: '#e83184' }
                            : { color: 'white' }
                        }
                      >
                        Packages
                      </span>{' '}
                    </Link>
                  </li>
               
                  
                 <li
                    onClick={() => {
                      iconClicked.bind(this, 'ProfileAdmin')
                      SetTabName('ProfileAdmin')
                      setRenderComponent(!renderComponent)
                    }}
                  >
                    <Link
                      to='/Dashboard/ProfileAdmin'
                      className='align-middle cursor gap-2'
                    >
                      <FontAwesomeIcon
                        className='gap-1920'
                        icon={faUser}
                        style={
                          isUrl === '/Dashboard/ProfileAdmin'
                            ? { color: '#e83184' }
                            : { color: 'white' }
                        }
                      />
                      <span
                        className='ms-1'
                        style={
                          TabName === 'ProfileAdmin'
                            ? { color: '#e83184' }
                            : { color: 'white' }
                        }
                      >
                        Profile
                      </span>{' '}
                    </Link>
                  </li>
                
                  <li>
                    <Link
                      to=''
                      onClick={() => {
                        SetIsShow(!isShow)
                        SetTabName('Setting')
                      }}
                      className='align-middle cursor gap-2 Setting-pointer'
                    >
                      <FontAwesomeIcon
                        className='gap-1920'
                        icon={faGear}
                        style={
                          TabName === 'Setting'
                            ? { color: '#e83184' }
                            : { color: 'white' }
                        }
                      />{' '}
                      <span className='ms-1 text-white'>Setting</span>
                      <FontAwesomeIcon
                        icon={!isShow ? faChevronDown : faChevronUp}
                        className='text-white ms-5 gap-1920'
                      />
                    </Link>
                    <ul
                      style={{ display: isShow ? 'inline-block' : 'none' }}
                      className='nav nav-list tree'
                    >
                      <li
                        onClick={() => {
                          iconClicked.bind(this, 'Website')
                          SetTabName('Website')
                        }}
                      >
                        {' '}
                        <Link
                          to='/Dashboard/Website'
                          className='text-white gap-1 notification-text-res cursor'
                        >
                          <FontAwesomeIcon
                            className='gap-1920'
                            icon={faEarthAmericas}
                            style={
                              isUrl === '/Dashboard/Website'
                                ? { color: '#e83184' }
                                : { color: 'white' }
                            }
                          />
                          Website
                        </Link>
                      </li>
                      <li
                        onClick={() => {
                          iconClicked.bind(this, 'PagesData')
                          SetTabName('PagesData')
                        }}
                      >
                        <Link
                          to='/Dashboard/PagesData'
                          className='text-white gap-1 notification-text-res cursor'
                        >
                          <FontAwesomeIcon
                            className='gap-1920'
                            icon={faCopy}
                            style={
                              isUrl === '/Dashboard/PagesData'
                                ? { color: '#e83184' }
                                : { color: 'white' }
                            }
                          />
                          Pages Data
                        </Link>
                      </li>
                      <li
                        onClick={() => {
                          iconClicked.bind(this, 'TotalSupply')
                          SetTabName('TotalSupply')
                        }}
                      >
                        <Link
                          to='/Dashboard/TotalSupply'
                          className='text-white gap-1 notification-text-res cursor'
                        >
                          <FontAwesomeIcon
                            className='gap-1920'
                            icon={faWallet}
                            style={
                              isUrl === '/Dashboard/TotalSupply'
                                ? { color: '#e83184' }
                                : { color: 'white' }
                            }
                          />
                          Total Supply
                        </Link>
                      </li>
                    </ul>
                  </li>
                
              
                   
                  <li
                    onClick={() => {
                      iconClicked.bind(this, 'paymentgateway')
                      SetTabName('paymentgateway')
                    }}
                  >
                    <Link
                      to='/Dashboard/PaymentGateway'
                      className='align-middle cursor gap-2'
                    >
                      <FontAwesomeIcon
                        className='gap-1920'
                        icon={faCreditCard}
                        style={
                          isUrl === '/Dashboard/PaymentGateway'
                            ? { color: '#e83184' }
                            : { color: 'white' }
                        }
                      />
                      <span
                        className='ms-1'
                        style={
                          TabName === 'paymentgateway'
                            ? { color: '#e83184' }
                            : { color: 'white' }
                        }
                      >
                        Payment Gateway
                      </span>{' '}
                    </Link>
                  </li>
                
              
                  <li
                    onClick={() => {
                      iconClicked.bind(this, 'bonuscoin')
                      SetTabName('bonuscoin')
                      setRenderComponent(!renderComponent)
                    }}
                  >
                    <Link
                      to='/Dashboard/BonusCoins'
                      className='align-middle cursor gap-2'
                    >
                      <FontAwesomeIcon
                        className='gap-1920'
                        icon={faCoins}
                        style={
                          isUrl === '/Dashboard/BonusCoins'
                            ? { color: '#e83184' }
                            : { color: 'white' }
                        }
                      />
                      <span
                        className='ms-1'
                        style={
                          TabName === 'bonuscoin'
                            ? { color: '#e83184' }
                            : { color: 'white' }
                        }
                      >
                        Bonus Coins
                      </span>{' '}
                    </Link>
                  </li>
                
                
              
                 <li
                    onClick={() => {
                      iconClicked.bind(this, 'FaqAdmin')
                      SetTabName('FaqAdmin')
                      setRenderComponent(!renderComponent)
                    }}
                  >
                    <Link
                      to='/Dashboard/FAQAdmin'
                      className='align-middle cursor gap-2'
                    >
                      <FontAwesomeIcon
                        className='gap-1920'
                        icon={faQuestionCircle}
                        style={
                          isUrl === '/Dashboard/FAQAdmin'
                            ? { color: '#e83184' }
                            : { color: 'white' }
                        }
                      />
                      <span
                        className='ms-1'
                        style={
                          TabName === 'FaqAdmin'
                            ? { color: '#e83184' }
                            : { color: 'white' }
                        }
                      >
                        FAQs
                      </span>{' '}
                    </Link>
                  </li>
                
              
              
                  <li
                    onClick={() => {
                      iconClicked.bind(this, 'Blogs')
                      SetTabName('Blogs')
                      setRenderComponent(!renderComponent)
                    }}
                  >
                    <Link
                      to='/Dashboard/Blogs'
                      className='align-middle cursor gap-2'
                    >
                      <FontAwesomeIcon
                        className='gap-1920'
                        icon={faBlog}
                        style={
                          isUrl === '/Dashboard/Blogs'
                            ? { color: '#e83184' }
                            : { color: 'white' }
                        }
                      />
                      <span
                        className='ms-1'
                        style={
                          TabName === 'Blogs'
                            ? { color: '#e83184' }
                            : { color: 'white' }
                        }
                      >
                        Blogs
                      </span>{' '}
                    </Link>
                  </li>
                
              
              </ul>
            </div>
          </div>

        </>
            
        )
        
        
        
        }
        
        export default AdminLayout;