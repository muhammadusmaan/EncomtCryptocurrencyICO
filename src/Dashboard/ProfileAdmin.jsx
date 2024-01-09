import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { Api_Url } from '../utils/Base_url';
import Toast from '../utils/Toast';
import LoaderSpinner from '../utils/LoaderSpinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import AdminNavbar from '../Dashboard/AdminNavbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AdminLayout from './AdminLayout';
import logo from '../images/logo.png';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

function ProfileAdmin(props) {

    const [isLoading, setIsLoading] = useState(false);
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    const [firstName, setFirstName] = useState();
    const [email, setEmail] = useState();
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [id, setId] = useState(userToken.user._id);
    const passwordsCollection = { oldPassword, newPassword, id }
    const [showError, setshowerror] = useState(false);

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
       

         // if (userToken.user.isAdmin === false) {
         //   Navigate("/Dashboard");
        //}

        if (window.innerWidth <= 760) {
            setIsSidebar(true)
        }
       // getAdminProfile();

    }, [props]);


    async function getAdminProfile() {
        setIsLoading(true);

        try {
            await axios.get(`${Api_Url}/user/${userToken.user._id}`
                , { headers: { "Authorization": `Bearer ${userToken.token}` } })
                .then((res) => {
                    setIsLoading(false);
                    if (res.status === 200) {
                        setFirstName(res.data.firstname)
                        setEmail(res.data.email)
                    }
                });
        }
        catch (err) {
            setIsLoading(false);
            toast.error(err?.response?.data?.error);
        }
    }

    async function onAdminPasswordChange(e) {
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
            if (passwordsCollection.newPassword.length < 6) {
                toast.error('New Password must contain at least 6 characters');
                return;
            }
            if (passwordsCollection.confirmNewPassword === '') {
                toast.error('confirm Password is required');
                return;
            }
            if (newPassword === oldPassword) {
                toast.error('New Password must be different from old Password');
                return;
            }
            if (newPassword === confirmNewPassword) {
                setshowerror(false);
                setIsLoading(true);
                await axios.post(`${Api_Url}/user/change-password`, passwordsCollection
                    , { headers: { "Authorization": `Bearer ${userToken.token}` } })
                    .then((res) => {
                        setIsLoading(false);
                        if (res.status === 200) {
                            toast.success(res.data.message);
                        }
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
                                <h1 className="card-title text-white textSize px-5 mt-3">Profile</h1>
                            </div>
                            <div className="px-5">
                                <hr className="hr-style" />
                            </div>
                            <div className="card-body px-lg-5 px-md-5">
                                {isLoading ? <LoaderSpinner /> :
                                    <div className="row">
                                        <div className="card cardBg card-profile">
                                            <div className="card-body gap-3 d-flex flex-column">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label htmlFor="formFile" className="form-label">Name</label>
                                                        <input type="text" className="form-control" onChange={e => { setFirstName(e.target.value) }} value={firstName} placeholder="Name" aria-label="First name" disabled readOnly />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label htmlFor="formFile" className="form-label">Email</label>
                                                        <input type="text" className="form-control" onChange={e => { setEmail(e.target.value) }} value={email} placeholder="example@gmail.com" disabled readOnly />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <label htmlFor="formFile" className="form-label">Old Password</label>
                                                        <input type="password" className="form-control" onChange={e => { setOldPassword(e.target.value) }} name="oldPassword" value={oldPassword} placeholder="∗∗∗∗∗∗∗∗∗∗∗∗∗" />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label htmlFor="newPassword" className="form-label">New Password</label>
                                                        <div className="input-group">
                                                            <input aria-describedby="newPassword" onChange={e => { setNewPassword(e.target.value) }} type={isPassword ? "text" : "password"} name="newPassword" value={newPassword} className="form-control" placeholder="∗∗∗∗∗∗∗∗∗∗∗∗∗" autocomplete="off" />
                                                            <span onClick={() => { setIsPassword(!isPassword) }} class="input-group-text eye-icon-rounded-corner" id="basic-addon1"><FontAwesomeIcon icon={isPassword ? faEyeSlash : faEye} /></span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label htmlFor="confirmNewPassword" className="form-label">Confirm Password</label>
                                                        <div className="input-group">
                                                            <input aria-describedby="confirmNewPassword" onChange={e => { setConfirmNewPassword(e.target.value) }} type={isConfirmPassword ? "text" : "password"} name="confirmNewPassword" value={confirmNewPassword} className="form-control" placeholder="∗∗∗∗∗∗∗∗∗∗∗∗∗" autocomplete="off" />
                                                            <span onClick={() => { setIsConfirmPassword(!isConfirmPassword) }} class="input-group-text eye-icon-rounded-corner" id="basic-addon2"><FontAwesomeIcon icon={isConfirmPassword ? faEyeSlash : faEye} /></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <small style={{ display: showError ? "inline-block" : "none", color: "red" }}>Password and Confirm Password should be same</small>

                                                <div className="d-flex justify-content-end">
                                                    <button type="submit" onClick={onAdminPasswordChange} className="btn btn-bg">Update</button>
                                                </div>

                                            </div>

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
export default ProfileAdmin;