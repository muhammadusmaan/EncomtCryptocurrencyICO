import React, { useState, useEffect } from 'react';
import dateFormat from 'dateformat';
import axios from 'axios';
import { Api_Url } from '../utils/Base_url';
import LoaderSpinner from '../utils/LoaderSpinner';
import $ from 'jquery';
import TimeAgo from 'javascript-time-ago'
import ReactTimeAgo from 'react-time-ago'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useNavigate } from 'react-router-dom'
import AdminNavbar from '../Dashboard/AdminNavbar'
import AdminLayout from './AdminLayout'

import logo from '../images/logo.png';
import { faUser, faBell } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'jquery/dist/jquery.min.js'
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import "datatables.net-buttons/js/dataTables.buttons.js"
import "datatables.net-buttons/js/buttons.colVis.js"
import "datatables.net-buttons/js/buttons.flash.js"
import "datatables.net-buttons/js/buttons.html5.js"
import "datatables.net-buttons/js/buttons.print.js"


const AdminNotification = () => {

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

    const [historyList, setHistoryList] = useState([]);
    const [sDate, setSDate] = useState(Date.now());
    const [eDate, setEDate] = useState(Date.now());

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

        $(document).ready(function () {
            $("#purchase-admin").DataTable({
                pagingType: 'full_numbers',
                pageLength: 5,
                processing: true,
                dom: 'Bfrtip',
                buttons: ['csv'

                ],

                destroy: true,
                dom: "rBftlip",
                lengthMenu: [
                    [10, 20, 50, 100, -1],
                    [10, 20, 50, 100, "All"],
                ],
                pageLength: 10,
            });

        });
    })


    useEffect(() => {
        getNotificationData(1);
        if (window.innerWidth <= 760) {
            setIsSidebar(true)
        }
    }, []);

    async function getNotificationData() {
        setIsLoading(true);
        try {
            const History = await axios.get(`${Api_Url}/getgraph`
                , { headers: { "Authorization": `Bearer ${userToken.token}` } });
            setIsLoading(false);
            setHistoryList(History.data.graph)
        }
        catch (err) {
            toast.error(err)
            setIsLoading(false);
        }
    }

    const getGraphwithDates = async() => {

        if (sDate === eDate) {
            toast.error("From date and To date should not be same");
            return;
        }
        let date1 = new Date(sDate);
        let date2 = new Date(eDate);
        if (date1 > date2) {
            toast.error("From date should be less than To date");
            return;
        }
        
        setIsLoading(true);
        try {
            const History = await axios.get(`${Api_Url}/getgraph?from=`+sDate+`&to=`+eDate
                , { headers: { "Authorization": `Bearer ${userToken.token}` } });
            setIsLoading(false);
            setHistoryList(History.data.graph)
        }
        catch (err) {
            toast.error(err)
            setIsLoading(false);
        }
        
    };
    const handleClick = () => {
        return setIsSidebar(!isSidebar)
      };
  

    return (
        <>
            {/* Dashboard Navbar */}
            <AdminNavbar handleClick={handleClick} />


            
            <div className="container-fluid" >
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

                        <div className="card py-3 cardBg cardShadowColor">
                            <div>
                                <h1 className="card-title text-white textSize px-5 mt-3">Sell Coins</h1>
                            </div>
                            <div className="px-5">
                                <hr className="hr-style" />
                            </div>
                            <div className="card-body px-lg-5 px-md-5">
                                <div className="row">
                                    <div className=" col-md-4">
                                        <div className="form-group">
                                            <label htmlFor="start" >From:</label>
                                            <input id="start" name="start" type="date" max={dateFormat(Date.now(), "yyyy-mm-dd")} onChange={(e) => { setSDate(e.target.value) }} className="form-control fs-5" value={dateFormat(sDate, "yyyy-mm-dd")} />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label htmlFor="end">To:</label>
                                            <input id="end" name="end" type="date" className="form-control fs-5" max={dateFormat(Date.now(), "yyyy-mm-dd")} onChange={(e) => { setEDate(e.target.value) }} value={dateFormat(eDate, "yyyy-mm-dd")} />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                    <br/>

                                        <button className="btn btn-success Search-btn" onClick={() => getGraphwithDates()}>Search</button>
                                    </div>
                                </div>
<br/>
                                <div className="row ">
                                    <div className="card cardBg">
                                        {isLoading ? <LoaderSpinner /> :
                                            <div className="table-responsive">
                                                <table id="purchase-admin" className="table text-white w-100">
                                                    <thead>
                                                        <tr >
                                                            <th className="bg-th" scope="col">Sr.</th>
                                                            <th className="bg-th" scope="col">Date</th>
                                                            <th className="bg-th" scope="col">Sell Coins</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {historyList.map((singleHistory, indx) => {
                                                            return (
                                                                <tr Key={indx}>
                                                                    <th scope="row">{indx + 1}</th>
                                                                    <td style={{ whiteSpace: 'pre' }}>{dateFormat(singleHistory._id,'dd/mm/yyyy')}</td>
                                                                    <td>{singleHistory.total}</td>
                                                                </tr>
                                                            )
                                                        })
                                                        }

                                                    </tbody>
                                                </table>

                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default AdminNotification;