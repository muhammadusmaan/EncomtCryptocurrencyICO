import React, { useState, useRef, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    faHome, faShield, faHistory, faCoins, faWallet, faUser, faInfo, faQuestion,
    faQuestionCircle, faSignOut, faGear, faBell, faBox, faCreditCard,faChevronUp, faChevronDown, faEarthAmericas, faCopy, faBlog,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
// import UserLogo from '../images/user-icon.png'
import './sidebar.css'

import SidebarLayout from '../Dashboard/Sidebar';
import { useNavigate } from 'react-router-dom';


const UserLayout = () => {

    const [isAdmin, setIsAdmin] = useState('');

    const [isSidebar, setIsSidebar] = useState()
    const [showinMobile, setShowinMobile] = useState(false)
    const [isClicked, setIsClicked] = useState("")
    const [TabName, SetTabName] = useState();
    const [isShow, SetIsShow] = useState(true);
    const Navigate = useNavigate();
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    const [renderComponent, setRenderComponent] = useState(true);
    const [homeTab, setHomeTab] = useState();
    const [isUrl, setIsUrl] = useState();

    const iconClicked = (isClicked, e) => {
        // e.preventDefault();
        // return setIsClicked(isClicked)
    }

useEffect(()=>{
    setIsUrl(window.location.pathname);
   // setIsAdmin(userToken.user.isAdmin);
    
})

    return (
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
                      to='/Dashboard/Home'
                      className='align-middle cursor gap-2'
                            >
                            
                      <FontAwesomeIcon
                        className='gap-1920'
                        icon={faHome}
                        style={
                          isUrl === '/Dashboard/Home'
                            ? { color: '#e83184' }
                            : { color: 'white' }
                        }
                      />
                      <span className='ms-1' style={{ color: 'white' }}>
                        Home
                      </span>
                    </Link>
                  </li>
                
                  <li
                    onClick={() => {
                      iconClicked.bind(this, 'kyc')
                      SetTabName('KYC')
                    }}
                  >
                    <Link
                      to='/Dashboard/KYC'
                      className='align-middle cursor gap-2'
                    >
                      <FontAwesomeIcon
                        className='gap-1920'
                        icon={faShield}
                        style={
                          isUrl === '/Dashboard/KYC'
                            ? { color: '#e83184' }
                            : { color: 'white' }
                        }
                  />
                  
                  <span className='ms-1' style={{ color: 'white' }}>
                        KYC
                      </span>
                    </Link>
                  </li>
            
                  <li
                    onClick={() => {
                      iconClicked.bind(this, 'buyCoin')
                      SetTabName('BuyCoin')
                      // setRenderComponent(!renderComponent)
                    }}
                  >
                    <Link
                      to='/Dashboard/BuyCoin'
                      className='align-middle cursor gap-2'
                    >
                      <FontAwesomeIcon
                        className='gap-1920'
                        icon={faCoins}
                        style={
                          isUrl === '/Dashboard/BuyCoin'
                            ? { color: '#e83184' }
                            : { color: 'white' }
                        }
                      />
                      <span
                        className='ms-1'
                        style={{ color: 'white' }}
                      >
                        Buy Coin
                      </span>
                    </Link>
                  </li>
                

                  <li
                    onClick={() => {
                      iconClicked.bind(this, 'wallet')
                      SetTabName('Wallet')
                      setRenderComponent(!renderComponent)
                    }}
                  >
                    <Link
                      to='/Dashboard/Wallet'
                      className='align-middle cursor gap-2'
                    >
                      <FontAwesomeIcon
                        className='gap-1920'
                        icon={faWallet}
                        style={
                          isUrl === '/Dashboard/Wallet'
                            ? { color: '#e83184' }
                            : { color: 'white' }
                        }
                      />
                      <span
                        className='ms-1'
                        style={{ color: 'white' }}
                      >
                        Wallet
                      </span>{' '}
                    </Link>
                  </li>
                
                  <li
                    onClick={() => {
                      iconClicked.bind(this, 'transactionHisotry')
                      SetTabName('TransactionHistory')
                      setRenderComponent(!renderComponent)
                    }}
                  >
                    <Link
                      to='/Dashboard/PurchaseHistory'
                      className='align-middle cursor gap-2'
                    >
                      <FontAwesomeIcon
                        className='gap-1920'
                        icon={faHistory}
                        style={
                          isUrl === '/Dashboard/PurchaseHistory'
                            ? { color: '#e83184' }
                            : { color: 'white' }
                        }
                      />
                      <span
                        className='ms-1'
                        style={{ color: 'white' }}
                      >
                        Purchase History
                      </span>
                    </Link>
                  </li>
                
                
                
                  <li
                    onClick={() => {
                      iconClicked.bind(this, 'Profile')
                      SetTabName('Profile')
                    }}
                  >
                    <Link
                      to='/Dashboard/Profile'
                      className='align-middle cursor gap-2'
                    >
                      <FontAwesomeIcon
                        className='gap-1920'
                        icon={faUser}
                        style={
                          isUrl === '/Dashboard/Profile'
                            ? { color: '#e83184' }
                            : { color: 'white' }
                        }
                      />
                      <span
                        className='ms-1'
                        style={{ color: 'white' }}
                      >
                        Profile
                      </span>{' '}
                    </Link>
                  </li>
                

                  <li
                    onClick={() => {
                      iconClicked.bind(this, 'aboutUs')
                      SetTabName('AboutUs')
                    }}
                  >
                    <Link
                      to='/Dashboard/AboutUs'
                      className='align-middle cursor gap-2'
                    >
                      <FontAwesomeIcon
                        className='gap-1920'
                        icon={faInfo}
                        style={
                          isUrl === '/Dashboard/AboutUs'
                            ? { color: '#e83184' }
                            : { color: 'white' }
                        }
                      />
                      <span
                        className='ms-1'
                        style={{ color: 'white' }}
                      >
                        About Us
                      </span>{' '}
                    </Link>
                  </li>
                
                        
                
                  <li
                    onClick={() => {
                      iconClicked.bind(this, 'faqs')
                      SetTabName('FAQS')
                      setRenderComponent(!renderComponent)
                    }}
                  >
                    <Link
                      to='/Dashboard/FAQS'
                      className='align-middle cursor gap-2'
                    >
                      <FontAwesomeIcon
                        className='gap-1920'
                        icon={faQuestionCircle}
                        style={
                          isUrl === '/Dashboard/FAQS'
                            ? { color: '#e83184' }
                            : { color: 'white' }
                        }
                      />
                      <span
                        className='ms-1'
                        style={{ color: 'white' }}
                      >
                        FAQs
                      </span>{' '}
                    </Link>
                  </li>
            
                
                  <li
                    onClick={() => {
                      iconClicked.bind(this, 'help')
                      SetTabName('Help')
                      setRenderComponent(!renderComponent)
                    }}
                  >
                    <Link
                      to='/Dashboard/Help'
                      className='align-middle cursor gap-2'
                    >
                      <FontAwesomeIcon
                        className='gap-1920'
                        icon={faQuestion}
                        style={
                          isUrl === '/Dashboard/Help'
                            ? { color: '#e83184' }
                            : { color: 'white' }
                        }
                      />
                      <span
                        className='ms-1'
                        style={{ color: 'white' }}
                      >
                        Help
                      </span>{' '}
                    </Link>
                  </li>
                 
                  <li
                    onClick={() => {
                      iconClicked.bind(this, 'ChangePassword')
                      SetTabName('ChangePassword')
                    }}
                  ></li>
                
              </ul>
            </div>
         
            </div>
        </>

    )



}

export default UserLayout;