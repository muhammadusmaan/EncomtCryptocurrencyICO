import { AppName, CoinName } from "../utils/Constant";
import React, { useState, useEffect , useMemo } from 'react';
import axios from 'axios';
import { Api_Url } from '../utils/Base_url';
import LoaderSpinner from '../utils/LoaderSpinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import JoditEditor from "jodit-react";
import AdminNavbar from '../Dashboard/AdminNavbar'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AdminLayout from './AdminLayout';
import logo from '../images/logo.png';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

function PagesData(props) {

    const [isLoading, setIsLoading] = useState(false);
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);

    const [whatIsEncomt, setWhatIsEncomt] = useState();
       
    const [termsAndConditions, setTermsAndConditions] = useState();
    const [privacyPolicy, setPrivacyPolicy] = useState();

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
        getPagesData();
    }, [props]);

    async function getPagesData() {
        setIsLoading(false);
        try {
            const pagesData = await axios.get(`${Api_Url}/setting/1`
                , { headers: { "Authorization": `Bearer ${userToken.token}` } });
            setIsLoading(false);
   
            setWhatIsEncomt(pagesData.data.appdetail);
            setTermsAndConditions(pagesData.data.privacypolicy)
            setPrivacyPolicy(pagesData.data.termandcondition)
        }   
        catch {
            toast.error("Error")
        }
    }

    async function onPageDataChange(e) {
        e.preventDefault()
        try {
            if (whatIsEncomt === "") {
                setIsLoading(false);
                toast.error("Please write some content for Encomt!");
                return;
            }
            else if (termsAndConditions === "") {
                setIsLoading(false);
                toast.error("Please  write some content for Terms and Conditions!");
                return;
            }
            else if (privacyPolicy === "") {
                setIsLoading(false);
                toast.error("Please  write some content for Privacy Policy!");
                return;
            }

            console.log(whatIsEncomt);

            const appdetail = whatIsEncomt;
            const privacypolicy = termsAndConditions
            const termandcondition = privacyPolicy

            const Data = { appdetail, privacypolicy, termandcondition }
            setIsLoading(true);

            await axios.put(`${Api_Url}/setting/1`, Data
                , { headers: { "Authorization": `Bearer ${userToken.token}` } })
                .then((res) => {

                    if (res.status === 200) {
                        setIsLoading(false);
                        toast.success("Website Settings Updated!");
                        setWhatIsEncomt(res.data.setting.appdetail)
                        setTermsAndConditions(res.data.setting.privacypolicy)
                        setPrivacyPolicy(res.data.setting.termandcondition)
                    }
                })
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


                        <div className="card py-3 cardBg cardShadowColor">
                            <div>
                                <h1 className="card-title text-white textSize px-5 mt-3">Pages Data</h1>
                            </div>
                            <div className="px-5">
                                <hr className="hr-style" />
                            </div>
                            <div className="card-body px-lg-5 px-md-5">
                                <div className="row">
                                    <div className="card py-3 cardBg">
                                        <div className="card cardBg cardShadowColor">
                                            <div className="card-header px-lg-5 px-md-5 btn-bg header-setting ">
                                                What is {AppName}
                                            </div>
                                            {isLoading ? <LoaderSpinner /> :
                                                <div className=" card-body">
                                                    <JoditEditor
                                                        config={{
                                                            height: 350
                                                            ,
                                                            uploader: {
                                                                insertImageAsBase64URI: true
                                                            }
                                                        }
                                                        }
                                                        value={whatIsEncomt}
                                                        onBlur={(e) => setWhatIsEncomt(e)}
                                                    />
                                                </div>}
                                        </div>
                                    </div>
                                    <div className="card py-3 cardBg">
                                        <div className="card cardBg cardShadowColor">
                                            <div className="card-header px-5 btn-bg header-setting">
                                                Terms & Conditions
                                            </div>
                                            {isLoading ? <LoaderSpinner /> :
                                                <div className=" card-body">
                                                    <JoditEditor
                                                        config={{
                                                            height: 350
                                                            ,
                                                            uploader: {
                                                                insertImageAsBase64URI: true
                                                            }
                                                        }}
                                                        value={termsAndConditions}
                                                        onBlur={(e) => setTermsAndConditions(e)}
                                                    />
                                                </div>
                                            }</div>
                                    </div>

                                    <div className="card py-3 cardBg">
                                        <div className="card cardBg cardShadowColor">
                                            <div className="card-header px-5 btn-bg header-setting">
                                                Privacy Policy
                                            </div>
                                            {isLoading ? <LoaderSpinner /> :
                                                <div className=" card-body">
                                                    <JoditEditor
                                                        config={{
                                                            height: 350
                                                            ,
                                                            uploader: {
                                                                insertImageAsBase64URI: true
                                                            }
                                                        }}
                                                        value={privacyPolicy}
                                                        onBlur={(e) => setPrivacyPolicy(e)}
                                                    />
                                                </div>}
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <button href="#" onClick={onPageDataChange} className="btn btn-bg" >Save</button>
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
export default PagesData;