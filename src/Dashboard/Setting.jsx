import React, { useEffect, useState } from 'react'

import AdminLayout from './AdminLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../images/logo.png';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

import AdminNavbar from '../Dashboard/AdminNavbar'

function Setting(props) {

    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);

    let Navigate = useNavigate();
    const [isSidebar, setIsSidebar] = useState()
    const [showinMobile, setShowinMobile] = useState(false)
    const [isClicked, setIsClicked] = useState("")

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
        if (userToken.user.isAdmin === false) {
            Navigate("/Dashboard");
        }

        if (window.innerWidth <= 760) {
            setIsSidebar(true)
        }

    }, [props]);


    const handleClick = () => {
        return setIsSidebar(!isSidebar)
      };
  
    return (
        <>

            {/* Dashboard Navbar */}
            <AdminNavbar handleClick={handleClick} />



            <div className="container-fluid max-width-dashboard">
                <div className="row" onClick={() => { if (window.innerWidth <= 760) { setIsSidebar(true); } }}>
                    {/* Sidebar */}
                    <div className="col-lg-2 col-md-3 col-sm-3 col-xs-3 container fontWeight">
                        <div className="sidebar-block"
                            style={{ left: isSidebar ? '-260px' : '0' }}>
                            <AdminLayout />
                        </div>
                    </div>

                    <div className={isSidebar ? "col-lg-12 col-md-12 col-sm-12 col-xs-12 py-3 container dashboardBodyBgColor " :
                        "col-lg-10 col-md-9 col-sm-9 col-xs-9 py-3 container dashboardBodyBgColor"} >
                        <div className="card py-3 cardBg cardShadowColor">
                            <div>
                                <h1 className="card-title text-white textSize px-5 mt-3 cursor">Setting</h1>
                            </div>
                            <div className="px-5">
                                <hr className="hr-style" />
                            </div>
                            <div className="card-body px-lg-5 px-md-5">
                                <div className="row">
                                    <div className="card py-3 cardBg">
                                        <div className="card cardBg cardShadowColor">
                                            <div className="card-header px-lg-5 px-md-5 btn-bg  header-setting ">
                                                Terms & Conditions
                                            </div>
                                            <div className="card-body px-lg-5 px-md-5">
                                                <p className="setting-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card py-3 cardBg">
                                        <div className="card cardBg cardShadowColor">
                                            <div className="card-header px-lg-5 px-md-5 btn-bg  header-setting">
                                                Privacy Policy
                                            </div>
                                            <div className="card-body px-lg-5 px-md-5">
                                                <p className="setting-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card py-3 cardBg">
                                        <div className="card cardBg cardShadowColor">
                                            <div className="card-header px-lg-5 px-md-5 btn-bg  header-setting">
                                                Contact Us
                                            </div>
                                            <div className="card-body px-lg-5 px-md-5">
                                                <p className="setting-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Setting;