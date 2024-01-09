import React from 'react';
import { AppName, CoinName } from "../utils/Constant";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, fa } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import ReactDOM from 'react-dom'
import axios from 'axios';
import { Api_Url } from '../utils/Base_url';
import LoaderSpinner from '../utils/LoaderSpinner';
import { Explorer_Url } from '../utils/Base_url';
import Toast from '../utils/Toast';
import AdminNavbar from '../Dashboard/AdminNavbar'
import AdminLayout from './AdminLayout';
import logo from '../images/logo.png';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

import $ from 'jquery';
import 'jquery/dist/jquery.min.js'
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import "datatables.net-buttons/js/dataTables.buttons.js"
import "datatables.net-buttons/js/buttons.colVis.js"
import "datatables.net-buttons/js/buttons.flash.js"
import "datatables.net-buttons/js/buttons.html5.js"
import "datatables.net-buttons/js/buttons.print.js"

function PurchaseHistoryAdmin(props) {

    const [historyList, setHistoryList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
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
        getPurchaseHistory();
    }, [props])

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


    async function getPurchaseHistory() {
        setIsLoading(true);
        try {
            const History = await axios.get(`${Api_Url}/allpurchasehistory`
                , { headers: { "Authorization": `Bearer ${userToken.token}` } });
            setIsLoading(false);
            setHistoryList(History.data.data)
        }
        catch (err) {
            Toast.error(err)
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

                        <div className="card py-3 cardBg cardShadowColor">
                            <div>
                                <h1 className="card-title text-white textSize px-5 mt-3">Purchase History</h1>
                            </div>
                            <div className="px-5">
                                <hr className="hr-style" />
                            </div>
                            <div className="card-body px-lg-5 px-md-5">
                                <div className="row">
                                    <div className="card cardBg">
                                        {isLoading ? <LoaderSpinner /> :
                                            <div className="table-responsive">
                                                <table id="purchase-admin" className="table text-white w-100">
                                                    <thead>
                                                        <tr >
                                                            <th className="bg-th" scope="col">Sr.</th>
                                                            <th className="bg-th" scope="col">UserName</th>
                                                            <th className="bg-th" scope="col">Purchased Coin</th>
                                                            <th className="bg-th" scope="col">Payment</th>
                                                            <th className="bg-th" scope="col">Rate/USD</th>
                                                            <th className="bg-th" scope="col">Fee</th>
                                                            <th className="bg-th" scope="col">Payment Method</th>
                                                            <th className="bg-th th-custom" scope="col">Gateway ID</th>
                                                            {/* <th className="bg-th" scope="col">Transaction Hash</th> */}
                                                            <th className="bg-th" scope="col">Package Name</th>
                                                            <th className="bg-th th-custom" scope="col">Transaction Hash</th>
                                                            <th className="bg-th" scope="col">Status</th>
                                                            <th className="bg-th" scope="col">Date</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {historyList.map((singleHistory, indx) => {
                                                            return (
                                                                <tr Key={indx}>
                                                                    <th scope="row">{indx + 1}</th>
                                                                    <td>{singleHistory.userID ? singleHistory.userID.firstname : ''}</td>
                                                                    <td>{singleHistory.coin} {CoinName}</td>
                                                                    <td>${singleHistory.price}</td>
                                                                    <td>{singleHistory.packageDetail.rate} {CoinName}</td>
                                                                    <td>${singleHistory.fee}</td>
                                                                    <td>{singleHistory.paymenttype}</td>
                                                                    <td className="th-custom">{singleHistory.gateway_id}</td>
                                                                    <td>{singleHistory.packageDetail.package_name}</td>
                                                                    <td className="th-custom"><a href={Explorer_Url + '/tx/' + singleHistory.signature} target="_blank">{singleHistory.signature}</a></td>
                                                                    <td>{singleHistory.status}</td>
                                                                    <td style={{ whiteSpace: 'pre' }}>{singleHistory.date}</td>
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
    )
}
export default PurchaseHistoryAdmin;