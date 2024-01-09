import React, { useRef, useState, useEffect } from 'react'
import Avater from '../images/avatar.png';
import { Button, Modal } from 'react-bootstrap-v5'
import axios from 'axios';
import { Api_Url } from '../utils/Base_url';
import LoaderSpinner from '../utils/LoaderSpinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom'
import UserNavbar from '../Dashboard/UserNavbar'
import UserLayout from './UserLayout';
import logo from '../images/logo.png';
import { faUser, faBell } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Profile() {

    let Navigate = useNavigate();

    const inputRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    const [profileImage, setProfileImage] = useState({});
    const [showError, setShowError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [Image, setImage] = useState();
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [email, setEmail] = useState();
    const [phoneNumber, setPhoneNumber] = useState();

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
        getUserProfile();
        if (window.innerWidth <= 760) {
            setIsSidebar(true)
        }
    }, []);


    async function getUserProfile() {

        setIsLoading(true);

        try {
            await axios.get(`${Api_Url}/user/${userToken.user._id}`
                , { headers: { "Authorization": `Bearer ${userToken.token}` } })
                .then((res) => {
                    setIsLoading(false);

                    if (res.status === 200) {

                        setFirstname(res.data.firstname)
                        setLastname(res.data.lastname)
                        setEmail(res.data.email)
                        setPhoneNumber(res.data.phoneNumber)
                        setImage(res.data.profileImage);

                    }
                });
        }
        catch (err) {
            setIsLoading(false);
            toast.error(err?.response?.data?.error);
        }

    }

    const onImageChange = (e) => {
        let ext = e.target.files[0].name.split('.').pop();
        if (ext === 'jpg' || ext === 'png') {
            const fsize = e.target.files[0].size;
            const file = Math.round((fsize / 1024));
            // The size of the file.
            if (file >= 2048) {
                setShowError(true)
                setErrorMsg("Your file size should be less than 2 MB")
                setProfileImage({
                    imagePreview: "",
                    /* this contains the file we want to send */
                    imageAsFile: "",
                });
                inputRef.current.value = ""
            }
            else {
                setProfileImage({
                    imagePreview: URL.createObjectURL(e.target.files[0]),
                    /* this contains the file we want to send */
                    imageAsFile: e.target.files[0],
                });
                setShowError(false)
            }
        } else {
            inputRef.current.value = ""
            toast.error("Please select an image file");
            return;
        }
    };

    async function onFormSubmit(e) {
        e.preventDefault()
        try {
            setIsLoading(true);

            const formData = new FormData();
            formData.append('firstname', firstname)
            formData.append('lastname', lastname)
            formData.append('phoneNumber', phoneNumber)
            formData.append('picture', profileImage.imageAsFile)

            await axios.put(`${Api_Url}/user/${userToken.user._id}`, formData,
                {
                    headers: {
                        "Authorization": `Bearer ${userToken.token}`,
                        'content-type': 'multipart/form-data'
                    }
                })
                .then((res) => {
                    setIsLoading(false);

                    if (res.status === 200) {

                        setFirstname(res.data.user.firstname)
                        setLastname(res.data.user.lastname)
                        setPhoneNumber(res.data.user.phoneNumber)
                        setImage(res.data.user.profileImage);

                        saveToken(res.data.user);

                        setProfileImage({});
                        inputRef.current.value = '';

                        toast.success("User Updated Successfully");
                    }
                })
        }
        catch (err) {
            setIsLoading(false);

            toast.error(err?.response?.data?.error);
        }
    }
    
    const saveToken = data => {
        sessionStorage.setItem('userData', JSON.stringify(data));
    };

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
                                                <div className="d-flex justify-content-end">
                                                    <img className="img-fluid profile-img" src={Image}></img>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label htmlFor="formFile" className="form-label">First Name</label>
                                                        <input type="text" onChange={e => { setFirstname(e.target.value.replace(/[^A-Za-z]/ig, '')) }} value={firstname} className="form-control p-input-cus" placeholder="First name" aria-label="First name" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label htmlFor="formFile" className="form-label">Last Name</label>
                                                        <input type="text" onChange={e => { setLastname(e.target.value.replace(/[^A-Za-z]/ig, '')) }} value={lastname} className="form-control" placeholder="Last name" aria-label="Last name" />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label htmlFor="formFile" className="form-label">Email</label>
                                                        <input type="email" className="form-control" value={email} placeholder="example@gmail.com" disabled readonly />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label htmlFor="formFile" className="form-label">Phone Number</label>
                                                        <input type="number" onWheel={event => { event.currentTarget.blur() }} onChange={e => { setPhoneNumber(e.target.value) }} value={phoneNumber} className="form-control" placeholder="123456789" aria-label="Phone Number" />
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="formFile" className="form-label">Upload image</label>
                                                    <input className="form-control" ref={inputRef} type="file" id="formFile" onChange={onImageChange} accept="image/*" />
                                                </div>
                                                <span style={showError ? { visibility: 'visible', color: "red" } : { visibility: 'hidden' }} >{errorMsg}</span>
                                                <div className="d-flex justify-content-end">
                                                    <p className="float-right">
                                                        <img src={profileImage.imagePreview} className="profile-image img-fluid" alt="" id="output" width="150px" />
                                                    </p>
                                                </div>
                                                <div className="d-flex justify-content-end">
                                                    <button onClick={onFormSubmit} className="btn btn-bg profile-update">Update</button>
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
export default Profile