import React, { useState, useEffect } from 'react';
import dateFormat from 'dateformat';
import axios from 'axios';
import { Api_Url } from '../utils/Base_url';
import Toast from '../utils/Toast';
import LoaderSpinner from '../utils/LoaderSpinner';
import $ from 'jquery';
import TimeAgo from 'javascript-time-ago'
import ReactTimeAgo from 'react-time-ago'
import UserNavbar from '../Dashboard/UserNavbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useNavigate } from 'react-router-dom'

import UserLayout from './UserLayout';
import logo from '../images/logo.png';
import { faUser, faBell} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Notification = () => {

    const Navigate = useNavigate();

    const [notifications, setNotifications] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    const [pageNumber, setPageNumber] = useState(1);
    const [previous, setPrevious] = useState();
    const [next, setNext] = useState();
    const [count, setCount] = useState([]);
    const [isColor, setIsColor] = useState(false);

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
        getNotificationData(1);
        if (window.innerWidth <= 760) {
            setIsSidebar(true)
        }
    }, []);


    async function getNotificationData(page_number) {
        setIsColor(!isColor)
        setIsLoading(true);
        try {
            await axios.get(`${Api_Url}/getnotifications?page=` + page_number + `&limit=7`
                , { headers: { "Authorization": `Bearer ${userToken.token}` } })
                .then((res) => {
                    setIsLoading(false);

                    setPrevious('');
                    setNext('');

                    if (res.status === 200) {
                        setNotifications(res.data.results.results);
                        setCount(res.data.pages)
                        if (res.data.results.previous) {
                            setPrevious(res.data.results.previous)
                        }
                        if (res.data.results.next) {
                            setNext(res.data.results.next)
                        }
                    }
                    else {
                        Toast.error(res.error);
                        setIsLoading(false);
                    }
                })

        }
        catch (err) {
            Toast.error(err?.response?.data?.error);
            setIsLoading(false);
        }
    }

    const handleClick = () => {
        return setIsSidebar(!isSidebar)
      };

    
    return (
        <>

            {/* Dashboard Navbar */}
            <UserNavbar handleClick={handleClick} />
            


            <div className="container-fluid" >
                <div className="row" onClick={() => { if (window.innerWidth <= 760) { setIsSidebar(true); } }}>
                    {/* Sidebar */}
                    <div className="col-lg-2 col-md-3 col-sm-3 col-xs-3 container fontWeight">
                    <div className="sidebar-block"
                            style={{ left: isSidebar ? '-260px' : '0' }}>
                    <UserLayout/>
                    </div>
                    </div>

                    <div  className={isSidebar ? "col-lg-12 col-md-12 col-sm-12 col-xs-12 py-3 container dashboardBodyBgColor " :
                        " col-lg-10 col-md-9 col-sm-9 col-xs-9 py-3 container dashboardBodyBgColor"} >      
                
                <div className="card py-3 cardBg cardShadowColor">
                <div>
                    <h1 className="card-title text-white textSize px-5 mt-3">Notifications</h1>
                </div>
                <div className="px-5">
                    <hr className="hr-style" />
                </div>
                {isLoading ? <LoaderSpinner /> :
                    <div className="card-body px-lg-5 px-md-5">
                        <div className="row">
                            <div className="card py-3 cardBg">
                                <div class="p-0 noti-card gap-3">
                                    {notifications.map((singleNotification, indx) => {
                                        return (
                                            <div className="card p-2 cardBg noti-list cardShadowColor">
                                                <div class="text-truncate noti-list-title">{singleNotification.title}</div>
                                                <div class="small pt-1 noti-list-content">{singleNotification.content}</div>
                                                <small class="text-end small text-muted">
                                                     <ReactTimeAgo date={singleNotification.created} locale="en-US" />
                                                </small>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <nav aria-label="Page navigation example ">
                                <ul class="pagination justify-content-end">
                                    <li class="page-item"><a class="page-link page-link-custom" style={previous ? { visibility: "visible" } : { visibility: "hidden" }}
                                        onClick={() => { getNotificationData(previous.page); }}>Previous</a></li>
                                    {count ? count.map((singleCount, indx) => {
                                        var cus_page = previous.page;
                                        if (typeof (cus_page) == 'undefined') {
                                            cus_page = 0;
                                        }
                                        return (
                                            <li key={indx} className='page-item' onClick={() => { getNotificationData(indx + 1) }}><button className={(cus_page === indx ? 'page-link page-link-custom cus-active' : 'page-link page-link-custom')} >{singleCount}</button></li>
                                        )

                                    }) : ""

                                    }

                                    <li class="page-item"><a class="page-link page-link-custom" style={next ? { visibility: "visible" } : { visibility: "hidden" }}
                                        onClick={() => { getNotificationData(next.page); }}>Next</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                }
            </div>
            </div>
                </div>
                </div>

          
        </>
    );
}

export default Notification;