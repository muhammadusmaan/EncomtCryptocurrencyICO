import Paypal from "../Dashboard/paypal.png";
import Card from "../Dashboard/mastercard.png";
import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { Api_Url } from '../utils/Base_url';
import Toast from '../utils/Toast';
import LoaderSpinner from '../utils/LoaderSpinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AdminNavbar from '../Dashboard/AdminNavbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AdminLayout from './AdminLayout';
import logo from '../images/logo.png';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

function PaymentGateway(props) {

    const [isLoading, setIsLoading] = useState(false);
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);

    const [isPaypal, setIsPaypal] = useState();
    const [isStripe, setIsStripe] = useState();
    const [isCoinbase, setIsCoinbase] = useState();
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
        setIsPaypal(false);
        setIsCoinbase(false);
        setIsStripe(false);
        getWebData();

    }, [props]);

    async function getWebData() {
        setIsLoading(true);
        try {

            await axios.get(`${Api_Url}/setting/1`
                , { headers: { "Authorization": `Bearer ${userToken.token}` } })
                .then((webData) => {
                    setIsLoading(false);

                    setIsPaypal(webData.data.ispaypal);
                    setIsStripe(webData.data.isstripe);
                    setIsCoinbase(webData.data.iscoinbase);

                });
        }
        catch (err) {
            toast.error(err)
        }
    }

    async function onWebDataChange(e) {
        e.preventDefault()
        try {
            const Data = {
                ispaypal: isPaypal,
                isstripe: isStripe,
                iscoinbase: isCoinbase
            }

            setIsLoading(true);

            await axios.put(`${Api_Url}/setting/1`, Data
                , { headers: { "Authorization": `Bearer ${userToken.token}` } })
                .then((res) => {

                    if (res.status === 200) {
                        setIsLoading(false);
                        toast.success("Website Settings Updated!");
                        setIsStripe(res.data.setting.isstripe);
                        setIsPaypal(res.data.setting.ispaypal);
                        setIsCoinbase(res.data.setting.iscoinbase)
                    }
                })
        }
        catch (err) {
            toast.error(err?.response?.data?.error);
            setIsLoading(false);
        }
    }


    const ispaypalchange = () => {

        if (isPaypal === true) {
            setIsPaypal(false);
        } else {
            setIsPaypal(true);
        }
    };

    const isstripechange = () => {

        if (isStripe === true) {
            setIsStripe(false);
        } else {
            setIsStripe(true);
        }
    };

    const iscoinbasechange = () => {

        if (isCoinbase === true) {
            setIsCoinbase(false);
        } else {
            setIsCoinbase(true);
        }
    };

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
                                <h1 className="card-title text-white textSize px-5 mt-3">Payment Gateway</h1>
                            </div>
                            <div className="px-5">
                                <hr className="hr-style" />
                            </div>
                            <div className="card-body px-5">
                                <div className="row">
                                    {isLoading ? <LoaderSpinner /> :
                                        <form>
                                            {/* --------Paypal------------ */}
                                            <div className="row mb-3 px-2 align-items-center">
                                                <label className="switch"><input type="checkbox" onChange={() => ispaypalchange()} value={isPaypal} checked={isPaypal} /><span className="slider round"></span></label>
                                                <label className="col-sm-4 col-form-label fs-3 mt-2">Paypal &nbsp;&nbsp;
                                                    <img className="img-fluid paypal-img" src={Paypal}></img>
                                                </label>
                                            </div>
                                            {/* <div className="row mb-3 px-5">
                                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Client ID</label>
                                <div className="col-sm-6">
                                    <input type="number" className="form-control" id="inputPassword3" placeholder="123456789" />
                                </div>
                            </div> */}
                                            {/* <div className="row mb-3 px-5">
                                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Secret Key</label>
                                <div className="col-sm-6">
                                    <input type="number" className="form-control" id="inputPassword3" placeholder="123456789" />
                                </div>
                            </div> */}
                                            {/* --------strip------------ */}
                                            <div className="row mb-3 px-2 align-items-center">
                                                <label className="switch"><input type="checkbox" onChange={() => isstripechange()} value={isStripe} checked={isStripe} /><span className="slider round"></span></label>
                                                <label className="col-sm-4 col-form-label fs-3 mt-2">Stripe &nbsp;&nbsp;
                                                    <img className="img-fluid paypal-img" src={Card}></img>
                                                </label>
                                            </div>
                                            {/* <div className="row mb-3 px-5">
                                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Publish Key</label>
                                <div className="col-sm-6">
                                    <input type="number" className="form-control" id="inputPassword3" placeholder="123456789" />
                                </div>
                            </div> */}
                                            {/* <div className="row mb-3 px-5">
                                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Secret Key</label>
                                <div className="col-sm-6">
                                    <input type="number" className="form-control" id="inputPassword3" placeholder="123456789" />
                                </div>
                            </div> */}
                                            {/* --------Coinbase------------ */}
                                            <div className="row mb-3 px-2 align-items-center">
                                                <label className="switch"><input type="checkbox" onChange={() => iscoinbasechange()} value={isCoinbase} checked={isCoinbase} /><span className="slider round"></span></label>
                                                <label className="col-sm-4 col-form-label fs-3 mt-2">Coinbase &nbsp;&nbsp;
                                                    <img className="img-fluid paypal-img" src={Card}></img>
                                                </label>
                                            </div>
                                            {/* <div className="row mb-3 px-5">
                                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">API Key</label>
                                <div className="col-sm-6">
                                    <input type="number" className="form-control" id="inputPassword3" placeholder="123456789" />
                                </div>
                            </div> */}

                                            <div className="d-flex justify-content-end">
                                                <button className="btn btn-bg" onClick={(e) => onWebDataChange(e)}>Save</button>
                                            </div>
                                        </form>
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
export default PaymentGateway;