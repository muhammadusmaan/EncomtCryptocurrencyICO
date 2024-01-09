import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { CoinName } from "../utils/Constant";
import axios from 'axios';
import { Api_Url } from '../utils/Base_url';
import LoaderSpinner from '../utils/LoaderSpinner';
import { ToastContainer, toast } from 'react-toastify';
import UserNavbar from '../Dashboard/UserNavbar'
import { useNavigate } from 'react-router-dom'

import UserLayout from './UserLayout';
import logo from '../images/logo.png';
import { faUser, faBell } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';


const Wallet = (props) => {

    let Navigate = useNavigate();

    const [wallet, setWallet] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [copied, setCopied] = useState(false);

    const [yourCoin, setYourCoin] = useState('');
    const [purchaseCoin, setPurchaseCoin] = useState('');
    const [bonusCoin, setBonusCoin] = useState('');

    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);

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

        if (window.innerWidth <= 760) {
            setIsSidebar(true)
        }
        async function getWallet() {
            setIsLoading(true);
            try {

                await axios.get(`${Api_Url}/wallet/${userToken.user._id}`
                    , { headers: { "Authorization": `Bearer ${userToken.token}` } })
                    .then((res) => {
                        setIsLoading(false);

                        if (res.status === 200) {

                            setBonusCoin(res.data.bonus[0].total);
                            setPurchaseCoin(res.data.totalPurchase[0].total);
                            setYourCoin(res.data.balance);
                            setWallet(res.data.wallet);
                        }
                        else {
                            toast.error(res.error);
                        }
                    })

            }
            catch (err) {
                setIsLoading(false);
                if (userToken.user.isAdmin === false) {
                    toast.error(err?.response?.data?.error);
                }
            }

        }

        getWallet();

    }, [props]
    )

    const copy = async () => {
        await navigator.clipboard.writeText(wallet?.public_key);
        setCopied(true)
        toast.success('Address Copied to clipboard');

    }

    const handleClick = () => {
        return setIsSidebar(!isSidebar)
      };
    

    return (
        <>
            {/* Dashboard Navbar */}
            <UserNavbar handleClick={handleClick} />




            <div className="container-fluid max-width-dashboard" >
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
                        <div className="card py-3 cardBg cardShadowColor">
                            <div>
                                <h1 className="card-title text-white textSize px-5 mt-3">Wallet</h1>
                            </div>
                            <div className="px-5">
                                <hr className="hr-style" />
                            </div>
                            <div className="card-body px-5">
                                {isLoading ? <LoaderSpinner /> :
                                    <div className="row">

                                        <div className="d-flex justify-content-center align-items-center">
                                            <button onClick={copy} className="btn btn-outline copy-address">copy address <FontAwesomeIcon className="copy_address_cusotm" icon={faCopy} /></button>
                                            {/* <small className="px-2" style={{ display: copied ? "inline-block" : "none", color: "red" }}>Copied</small> */}
                                        </div>
                                        <input type="text" value={wallet?.public_key} className="text-center mt-3 input-copy" readOnly disabled />
                                        <ul className="d-flex justify-content-center">
                                            <div className="justify-content-center">
                                                <li className="fs-1 d-flex justify-content-center mt-3"><h1 className="fs-1 wallet-number">{yourCoin}</h1></li>
                                                <li className="fs-5 text-center wallet-coin">Your <b>{CoinName}</b></li>
                                            </div>
                                        </ul>
                                        <ul className="d-flex justify-content-between mt-4">
                                            <li className="fs-4 description font-set">Purchase <b>{CoinName}</b></li>
                                            <li className="fs-4 description font-set">{purchaseCoin}</li>
                                        </ul>
                                        <ul className="d-flex justify-content-between mt-2">
                                            <li className="fs-4 description font-set">Bonus <b>{CoinName}</b></li>
                                            <li className="fs-4 description font-set">{bonusCoin}</li>
                                        </ul>
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

export default Wallet