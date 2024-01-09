import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { Api_Url } from '../utils/Base_url'
import UserNavbar from '../Dashboard/UserNavbar'
import Toast from '../utils/Toast'
import { useNavigate } from 'react-router-dom'
import LoaderSpinner from '../utils/LoaderSpinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import UserLayout from './UserLayout';
import logo from '../images/logo.png';
import { faUser, faBell} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ChangePassword(props) {

    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    const [isLoading, setIsLoading] = useState(false);
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [id, setId] = useState(userToken.user._id);

    const [showError, setshowerror] = useState(false);
    const passwordsCollection = { oldPassword, newPassword, id }

    const [isPassword, setIsPassword] = useState(false);
    const [isConfirmPassword, setIsConfirmPassword] = useState(false);

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
       
        if (window.innerWidth <= 760) {
            setIsSidebar(true)
        }
    }, [props]);


    async function onFormSubmit(e) {
        e.preventDefault()
        try {
            if (passwordsCollection.oldPassword === '') {
                toast.error('OldPassword is required');
                return;
            }
            if (passwordsCollection.newPassword === '') {
                toast.error('New Password is required');
                return;
            }
            if (passwordsCollection.confirmNewPassword === '') {
                toast.error('confirm Password is required');
                return;
            }
            if (newPassword === confirmNewPassword) {
                setshowerror(false);
                setIsLoading(true);
                await axios.post(`${Api_Url}/user/change-password`, passwordsCollection
                    , { headers: { "Authorization": `Bearer ${userToken.token}` } })
                    .then((res) => {

                        toast.success(res.data.message);
                        setIsLoading(false);
                        setNewPassword('');
                        setConfirmNewPassword('');
                        setOldPassword('');

                    })
            }
            else {
                setshowerror(true);
            }
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
                    <h1 className="card-title text-white textSize px-5 mt-3">Change Password</h1>
                </div>
                <div className="px-5">
                    <hr className="hr-style" />
                </div>
                <div className="card-body px-5">
                    {isLoading ? <LoaderSpinner /> :
                        <div className="row">
                            <div className="card py-3 cardBg">
                                <form>
                                    <div className="row mb-3">
                                        <label htmlFor="oldPassword" className="col-sm-2 col-form-label">Old Password:</label>
                                        <div className="col-sm-10">
                                            <input type="Password" onChange={e => { setOldPassword(e.target.value) }} name="oldPassword" value={oldPassword} className="form-control" id="oldPassword" placeholder="Old Password*" required />
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">New Password:</label>
                                        <div className="col-sm-10">
                                            <div className="input-group">
                                                <input aria-describedby="basic-addon1" onChange={e => { setNewPassword(e.target.value) }} type={isPassword ? "text" : "password"} name="newPassword" id="inputPassword3" value={newPassword} className="form-control" placeholder="New Password*" autocomplete="off" />
                                                <span onClick={() => { setIsPassword(!isPassword) }} class="input-group-text eye-icon-rounded-corner" id="basic-addon1"><FontAwesomeIcon icon={isPassword ? faEyeSlash : faEye} /></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Confirm Password:</label>
                                        <div className="col-sm-10">
                                            <div className="input-group">
                                                <input aria-describedby="basic-addon2" onChange={e => { setConfirmNewPassword(e.target.value) }} type={isConfirmPassword ? "text" : "password"} name="confirmNewPassword" value={confirmNewPassword} className="form-control" placeholder="Confirm Password*" autocomplete="off" />
                                                <span onClick={() => { setIsConfirmPassword(!isConfirmPassword) }} class="input-group-text eye-icon-rounded-corner" id="basic-addon2"><FontAwesomeIcon icon={isConfirmPassword ? faEyeSlash : faEye} /></span>
                                            </div>
                                        </div>
                                    </div>
                                    <small style={{ display: showError ? "inline-block" : "none", color: "red" }}>Password and Confirm Password should be same</small>

                                    <div className="d-flex justify-content-end">
                                        <button onClick={onFormSubmit} type="submit" className="btn btn-bg">Save</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    }
                </div>
            </div>
            </div>
                </div>
                </div>

           
        </>
    )
}
export default ChangePassword;