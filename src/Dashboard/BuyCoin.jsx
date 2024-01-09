import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useRef } from 'react'
import UserNavbar from '../Dashboard/UserNavbar'
import { faExchange } from "@fortawesome/free-solid-svg-icons"; import {
    faCoffee,
    faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom'
import Paypal from "../Dashboard/paypal.png";
import Card from "../Dashboard/mastercard.png";
import Crypto from "../Dashboard/crypto.png";
import { AppName, CoinName } from "../utils/Constant";
import { Api_Url } from '../utils/Base_url';
import Toast from '../utils/Toast';
import axios from 'axios';
import LoaderSpinner from '../utils/LoaderSpinner';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import UserLayout from './UserLayout';
import logo from '../images/logo.png';
import { faUser, faBell } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const BuyCoin = (props) => {

    let Navigate = useNavigate();

    const [method, setMethod] = useState('');
    const [converter, setConverter] = useState('1');
    const [isLoading, setIsLoading] = useState(false);
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);

    const [minpurchaserateFromApi, setMinPurchaseRateFromApi] = useState();
    const [rateFromApi, setRateFromApi] = useState();
    const [usdValue, setUsdValue] = useState(1);
    const [enctValue, setEnctValue] = useState();
    const [packageIdFromApi, setPackageIdFromApi] = useState();

    const [isPaypal, setIsPaypal] = useState(false);
    const [isStripe, setIsStripe] = useState(false);
    const [isCoinbase, setIsCoinbase] = useState(false);

    const paypalRef = useRef();
    const stripeRef = useRef();
    const coinbaseRef = useRef();

    const [isSidebar, setIsSidebar] = useState()
    const [showinMobile, setShowinMobile] = useState(false)
    const [isClicked, setIsClicked] = useState("")

    const notificationString = sessionStorage.getItem('Notification');
    const userNotification = JSON.parse(notificationString);

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
        //getCoinRate();
        if (window.innerWidth <= 760) {
            setIsSidebar(true)
        }
    }, [props]
    );

    async function getCoinRate() {
        setIsLoading(true);
        try {

            await axios.get(`${Api_Url}/currentpackage`
                , { headers: { "Authorization": `Bearer ${userToken.token}` } })
                .then((res) => {
                    setIsLoading(false);

                    if (res.status === 200) {

                        setRateFromApi(res.data.data.rate)
                        setPackageIdFromApi(res.data.data._id)
                        setMinPurchaseRateFromApi(res.data.data.minimum_purchase)

                        setIsPaypal(res.data.setting.ispaypal);
                        setIsStripe(res.data.setting.isstripe);
                        setIsCoinbase(res.data.setting.iscoinbase);

                        setUsdValue(res.data.data.minimum_purchase)
                        setEnctValue(res.data.data.rate * res.data.data.minimum_purchase);
                    }
                    else {
                        toast.error(res.error);
                        setIsLoading(false);
                    }
                })

        }
        catch (err) {

            setIsLoading(false);
            toast.error(err?.response?.data?.error);
        }
    }

    const onUsdChange = (e) => {
        setUsdValue(e.target.value)
        setEnctValue(e.target.value * rateFromApi)
    }

    const onEnctChange = (e) => {
        setEnctValue(e.target.value)
        setUsdValue(e.target.value / rateFromApi)
    }

    const onFormSubmit = async (e) => {
        e.preventDefault()
        if (usdValue == 0 && enctValue == 0) {
            toast.error("Please insert some value");
        }
        else {
            try {
                if (method === 'paypal') {
                    setIsLoading(true);

                    let body = {
                        'name': userToken.user.firstname,
                        'currency': 'USD',
                        'price': usdValue,
                        'coin': enctValue,
                        'packageid': packageIdFromApi

                    }

                    await axios.post(`${Api_Url}/paypal`, body
                        , { headers: { "Authorization": `Bearer ${userToken.token}` } })
                        .then((res) => {
                            setIsLoading(false);
                            if (res.status === 200) {

                                window.open(res.data.paymentLinks, '_self')

                            }
                            else {
                            }
                        })

                } else if (method === 'credit') {

                    let body = {
                        'name': userToken.user.firstname,
                        'currency': 'USD',
                        'price': usdValue,
                        'coin': enctValue,
                        'packageid': packageIdFromApi

                    }


                    setIsLoading(true);
                    await axios.post(`${Api_Url}/stripe`, body
                        , { headers: { "Authorization": `Bearer ${userToken.token}` } })
                        .then((res) => {
                            if (res.status === 200) {
                                setIsLoading(false);
                                window.open(res.data.stripe.url, '_self');

                            }
                            else {
                            }
                        })

                } else if (method === 'crypto') {
                    setIsLoading(true);
                    await axios.post(`https://api.commerce.coinbase.com/charges`
                        , {
                            "name": userToken.user.firstname,
                            "description": userToken.user.firstname,
                            "local_price": {
                                "amount": usdValue,
                                "currency": 'USD'
                            },
                            "pricing_type": "fixed_price",
                            "metadata": {
                                "user_id": userToken.user._id,
                                "package_id": packageIdFromApi,
                                "amount": usdValue,
                                "coin": enctValue
                            },
                            "redirect_url": `${Api_Url}/getcoinbasedata`,
                            "cancel_url": "https://charge/canceled/page"
                        }
                        , {
                            headers: {
                                'X-CC-API-Key': 'a7a73333-0bc5-4fbc-afd6-3809d21e57d1',
                                'X-CC-Version': '2018-03-22',
                                'Content-Type': 'application/json'
                            }
                        })
                        .then((res) => {
                            if (res.data.hosted_url != '') {
                                setIsLoading(false);
                                window.open(res.data.data.hosted_url, '_self');

                            }

                        })

                }
                else {
                    setIsLoading(false);
                    toast.error('Oops! Please select a payment method')
                    // setUsdValue(1)
                    // setEnctValue(rateFromApi)

                    setMethod('')
                }


            }
            catch (err) {
                setIsLoading(false);
                toast.error(err?.response?.data?.error);
                // setUsdValue(1)
                // setEnctValue(rateFromApi)
                setMethod('')
            }

        }
    }

    const handleClick = () => {
        return setIsSidebar(!isSidebar)
      };
    

    return (
        <>
            {/* Dashboard Navbar */}
            <UserNavbar handleClick={handleClick} />


            <div className="container-fluid max-width-dashboard">
                <div className="row" onClick={() => { if (window.innerWidth <= 760) { setIsSidebar(true); } }}>
                    {/* Sidebar */}
                    <div className="col-lg-2 col-md-3 col-sm-3 col-xs-3 container fontWeight">
                        <div className="sidebar-block"
                            style={{ left: isSidebar ? '-260px' : '0' }}>
                            <UserLayout />
                        </div>
                    </div>

                    
                    
                    <div className={isSidebar ? "col-lg-12 col-md-12 col-sm-12 col-xs-12 py-3 container dashboardBodyBgColor " :
                        " col-lg-10 col-md-9 col-sm-9 col-xs-9 py-3 container dashboardBodyBgColor"} >

                        <div className="card py-3 cardBg cardShadowColor ">
                            <div>
                                <h1 className="card-title text-white textSize px-5 mt-3">Buy {CoinName}</h1>
                            </div>
                            <div className="px-5">
                                <hr className="hr-style" />
                            </div>
                            <div className="card-body px-lg-5 ">
                                {isLoading ? <LoaderSpinner /> :
                                    <div className="row">
                                        <div className="card py-3 cardBg">
                                            <div className="d-flex justify-content-around  converter-card ">
                                                <div className="card card-bg cardShadowColor card_width_custom" style={{ width: "26rem" }}>
                                                    <div className="card-body">
                                                        <span className="d-flex justify-content-center mt-3">
                                                            <FontAwesomeIcon
                                                                icon={faDollarSign}
                                                                className="btc-Icon"
                                                            />
                                                        </span>
                                                        <div className="d-flex justify-content-center mt-3">
                                                            <label htmlFor="inputPassword3" className="col-sm-4 col-form-label text-center fs-2">USD</label>
                                                        </div>


                                                        <ul className="d-flex justify-content-between pl-0 list-unstyled mt-4 ul-rate">
                                                            <li className="col-md-8 col-lg-9 col-sm-4 conv-fs conv-fs-land"><input onWheel={event => { event.currentTarget.blur() }} value={usdValue} onChange={onUsdChange} type="number" className="col-md-12 col-lg-12 input-customize" /></li>
                                                            <li className="conv-fs">USD</li>
                                                        </ul>
                                                        <hr className="hLine"></hr>
                                                        <p className="fw-lighter description">Enter Payable Amount</p>
                                                    </div>
                                                </div>
                                                <span className="d-flex align-items-center fs-3 trade-icon">
                                                    <FontAwesomeIcon icon={faExchange} color={'#3FD0FF'} />
                                                </span>

                                                <div className="card card-bg cardShadowColor card_width_custom" style={{ width: "26rem" }}>
                                                    <div className="card-body">
                                                        <span className="d-flex justify-content-center mt-3">
                                                            <FontAwesomeIcon
                                                                icon={faDollarSign}
                                                                className="Dollar-Icon"
                                                            />
                                                        </span>
                                                        <div className="d-flex justify-content-center mt-3">
                                                            <label htmlFor="inputPassword3" className="col-sm-4 col-md-4 col-form-label text-center fs-2 coin-name">{CoinName}</label>
                                                        </div>


                                                        <ul className="d-flex justify-content-between pl-0 list-unstyled mt-4 ul-rate">
                                                            <li className="col-md-8 col-lg-9 conv-fs-land conv-fs"><input onWheel={event => { event.currentTarget.blur() }} value={enctValue} onChange={onEnctChange} type="number" className="col-md-12 col-lg-12 input-customize" /></li>
                                                            <li className="conv-fs">{CoinName}</li>
                                                        </ul>
                                                        <hr className="hLine"></hr>
                                                        <p className="fw-lighter description">You will get equivalent {CoinName}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <fieldset className="row mb-3 mt-5 p-3 gap-3">
                                                <h5 className="fw-bolder ">Select Payment Method</h5>
                                                <div className="col-sm-10 d-flex flex-column gap-2">
                                                    {isPaypal ?
                                                        <div className="form-check form-check_custom">
                                                            <input ref={paypalRef} onChange={e => { setMethod(e.target.value) }} className="form-check-input radio-bg" type="radio" name="gridRadios" id="gridRadios1" value="paypal" />
                                                            <label className="form-check-label" htmlFor="gridRadios1">
                                                                Paypal
                                                            </label>
                                                            <img className="img-fluid paypal-icon" src={Paypal}></img>
                                                        </div> : ''}
                                                    {isStripe ? <div className="form-check">
                                                        <input ref={stripeRef} onChange={e => { setMethod(e.target.value) }} className="form-check-input radio-bg radio-top" type="radio" name="gridRadios" id="gridRadios2" value="credit" />
                                                        <label className="form-check-label" htmlFor="gridRadios2">
                                                            Credit/Debit Card
                                                        </label>
                                                        <img className="img-fluid card-icon" src={Card}></img>
                                                    </div> : ''}
                                                    {isCoinbase ? <div className="form-check">
                                                        <input ref={coinbaseRef} onChange={e => { setMethod(e.target.value) }} className="form-check-input  radio-bg" type="radio" name="gridRadios" id="gridRadios3" value="crypto" />
                                                        <label className="form-check-label" htmlFor="gridRadios3">
                                                            Crypto Currency
                                                        </label>
                                                        <img className="img-fluid crypto-icon" src={Crypto}></img>
                                                    </div> : ''}
                                                </div>
                                                <div className="d-flex justify-content-end"><button onClick={(onFormSubmit)} type="submit" className="btn btn-bg buyCoin-btn">Proceed to Pay</button></div>

                                            </fieldset>
                                        </div>

                                    </div>
                                }
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );

}
export default BuyCoin;