import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AdminNavbar from '../Dashboard/AdminNavbar'
import AdminLayout from './AdminLayout';
import logo from '../images/logo.png';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Api_Url } from '../utils/Base_url';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoaderSpinner from '../utils/LoaderSpinner';

function TotalSupply(props) {

    const [isLoading, setIsLoading] = useState(false);

    const [totalSupply, setTotalSupply] = useState();

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
        // if (userToken.user.isAdmin === false) {
         //   Navigate("/Dashboard");
        //}

        if (window.innerWidth <= 760) {
            setIsSidebar(true)
        }
       // getAdminDashboardData();

    }, [props]);

    async function getAdminDashboardData() {
        setIsLoading(true);
        try {
            await axios.get(`${Api_Url}/admin-dashboard`
                , { headers: { "Authorization": `Bearer ${userToken.token}` } })
                .then((res) => {

                    setIsLoading(false);
                    if (res.status === 200) {
                        setTotalSupply(res.data.balance);
                    }
                    else {
                        toast.error(res.error);
                    }
                });
        }
        catch (err) {
            toast.error(err?.response?.data?.error);
            setIsLoading(false);
        }
    }


    const handleClick = () => {
        return setIsSidebar(!isSidebar)
      };
  

    return (
        <>
            {/* Dashboard Navbar */}
            <AdminNavbar handleClick={handleClick} />



            <div className="container-fluid max-width-dashboard" >
                <div className="row" onClick={() => { if (window.innerWidth <= 760) { setIsSidebar(true); } }}>
                    {/* Sidebar */}
                    <div className="col-lg-2 col-md-3 col-sm-3 col-xs-3 container fontWeight">
                        <div className="sidebar-block"
                            style={{ left: isSidebar ? '-260px' : '0' }}>
                            <AdminLayout />
                        </div>
                    </div>

                    <div className={isSidebar ? "col-lg-12 col-md-12 col-sm-12 col-xs-12 py-3 container dashboardBodyBgColor " :
                        " col-lg-10 col-md-9 col-sm-9 col-xs-9 py-3 container dashboardBodyBgColor"} >

                        {isLoading ? <LoaderSpinner /> :
                            <div className="card py-3 cardBg cardShadowColor">
                                <div>
                                    <h1 className="card-title text-white textSize px-5 mt-3">Total Supply</h1>
                                </div>
                                <div className="px-5">
                                    <hr className="hr-style" />
                                </div>
                                <div className="card-body px-5">
                                    <div className="row">
                                        <div className="card py-3 cardBg">
                                            <div className="row mb-3 px-5 justify-content-center">
                                                <label htmlFor="inputPassword3" className="d-flex justify-content-center col-form-label header-setting">Total supply in ICO all phases:</label><br />

                                                <ul className="d-flex justify-content-center">
                                                    <li className="fs-1">
                                                        <h1 className="fs-1 wallet-number">{totalSupply}</h1>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>}
                    </div>
                </div>
            </div>



        </>
    )
}
export default TotalSupply;