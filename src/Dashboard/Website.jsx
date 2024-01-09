import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { Api_Url } from '../utils/Base_url';
import Toast from '../utils/Toast';
import LoaderSpinner from '../utils/LoaderSpinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AdminNavbar from '../Dashboard/AdminNavbar'
import AdminLayout from './AdminLayout';
import logo from '../images/logo.png';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Website(props) {


    const [isLoading, setIsLoading] = useState(false);
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    const inputRef = useRef();

    const [showError, setShowError] = useState(false);
    const [profileImage, setProfileImage] = useState({});
    const [apiImage, setApiImage] = useState({});
    const [location, setLocation] = useState();
    const [twitter, setTwitter] = useState();
    const [facebook, setFacebook] = useState();
    const [linkedin, setLinkedin] = useState();
    const [youtube, setYoutube] = useState();
    const [instagram, setInstagram] = useState();
    const [telegram, setTelegram] = useState();
    const [reddit, setReddit] = useState();
    const [medium, setMedium] = useState();
    const [discord, setDiscord] = useState();


    const [iskycstatus, setIsKycStatus] = useState();


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
        getWebData();

    }, [props]);

    async function getWebData() {
        setIsLoading(true);
        try {
            const webData = await axios.get(`${Api_Url}/setting/1`
                , { headers: { "Authorization": `Bearer ${userToken.token}` } });

            setShowError(false)
            setIsLoading(false);
            setLocation(webData.data.location)
            setTwitter(webData.data.twitter)
            setFacebook(webData.data.facebook)
            setLinkedin(webData.data.linkedin)
            setYoutube(webData.data.youtube)
            setInstagram(webData.data.instagram)
            setTelegram(webData.data.telegram)
            setReddit(webData.data.reddit)
            setMedium(webData.data.medium)
            setDiscord(webData.data.discord)
            setIsKycStatus(webData.data.iskycstatus)
            setApiImage({
                imageAsFile: webData.data.roadmap
            });
            setProfileImage({
                imagePreview: "",
                imageAsFile: "",
            });

        }
        catch {
            toast.error("Error")
        }
    }

    async function onWebDataChange(e) {
        e.preventDefault()
        try {

            setIsLoading(true);

            if (location === "") {
                setIsLoading(false);
                toast.error("Please insert Map Link!");
                return;
            }
            if (facebook === "") {
                setIsLoading(false);
                toast.error("Please insert Facebook Link!");
                return;
            }
            if (twitter === "") {
                setIsLoading(false);
                toast.error("Please insert Twitter Link!");
                return;
            }
            if (linkedin === "") {
                setIsLoading(false);
                toast.error("Please insert Linkedin Link!");
                return;
            }
            if (youtube === "") {
                setIsLoading(false);
                toast.error("Please insert Youtube Link!");
                return;
            }
            if (instagram === "") {
                setIsLoading(false);
                toast.error("Please insert Instagram Link!");
                return;
            }
            if (telegram === "") {
                setIsLoading(false);
                toast.error("Please insert Telegram Link!");
                return;
            }
            if (reddit === "") {
                setIsLoading(false);
                toast.error("Please insert Reddit Link!");
                return;
            }
            if (medium === "") {
                setIsLoading(false);
                toast.error("Please insert Medium Link!");
                return;
            }
            if (discord === "") {
                setIsLoading(false);
                toast.error("Please insert Discord Link!");
                return;
            }
            const formData = new FormData();
            formData.append('location', location)
            formData.append('twitter', twitter)
            formData.append('facebook', facebook)
            formData.append('linkedin', linkedin)
            formData.append('youtube', youtube)
            formData.append('instagram', instagram)
            formData.append('telegram', telegram)
            formData.append('reddit', reddit)
            formData.append('medium', medium)
            formData.append('discord', discord)
            formData.append('iskycstatus', iskycstatus)

            if (profileImage.imageAsFile !== "") {
                formData.append('roadmap', profileImage.imageAsFile);
            }

            await axios.put(`${Api_Url}/setting/1`, formData
                , {
                    headers: {
                        "Authorization": `Bearer ${userToken.token}`,
                        'content-type': 'multipart/form-data'
                    }
                })
                .then((res) => {

                    if (res.status === 200) {
                        setIsLoading(false);
                        toast.success("Website Settings Updated!");
                        getWebData();
                        setProfileImage({
                            imagePreview: "",
                            /* this contains the file we want to send */
                            imageAsFile: "",
                        });
                    }
                })
        }
        catch (err) {
            toast.error(err?.response?.data?.error);
            setIsLoading(false);
            setProfileImage({
                imagePreview: "",
                /* this contains the file we want to send */
                imageAsFile: "",
            });
        }
    }


    const changetoggle = () => {

        if (iskycstatus === true) {
            setIsKycStatus(false);
        } else {
            setIsKycStatus(true);
        }
    };

    const onImageChange = (e) => {
        const fsize = e.target.files[0].size;
        const file = Math.round((fsize / 1024));
        // The size of the file.
        if (file >= 2048) {
            setShowError(true)
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
                                <h1 className="card-title text-white textSize px-5 mt-3">Website Setting</h1>
                            </div>
                            <div className="px-5">
                                <hr className="hr-style" />
                            </div>
                            {isLoading ? <LoaderSpinner /> :
                                <div className="card-body px-5">
                                    <div className="row">

                                        {/* <div className="row mb-3">
                                <label htmlFor="RoadMapImage" className="col-sm-2 col-md-4 col-lg-2 col-form-label">Road Map Image:</label>
                                <div className="col-sm-6">
                                    <img src={apiImage.imageAsFile} className="profile-image img-fluid" alt="" id="RoadMapImage" width="150px" />

                                </div>
                                        </div> */}

                                        <div className="card py-3 cardBg">
                                            <form>
                                                {/* <div className="row mb-3">
                                                    <label htmlFor="inputPassword3" className="col-sm-2 col-md-4 col-lg-2 col-form-label">Map Link:</label>
                                                    <div className="col-sm-6">
                                                        <input type="text" onChange={e => { setLocation(e.target.value) }} value={location} className="form-control" placeholder="Map Link" />
                                                    </div>
                                                </div> */}
                                                <div className="row mb-3">
                                                    <label htmlFor="inputPassword3" className="col-sm-2 col-md-4 col-lg-2 col-form-label">Twitter Link:</label>
                                                    <div className="col-sm-6">
                                                        <input type="text" onChange={e => { setTwitter(e.target.value) }} value={twitter} className="form-control" placeholder="Twitter Link" />
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label htmlFor="inputPassword3" className="col-sm-2 col-md-4 col-lg-2 col-form-label">Facebook Link:</label>
                                                    <div className="col-sm-6">
                                                        <input type="text" onChange={e => { setFacebook(e.target.value) }} value={facebook} className="form-control" placeholder="Facebook Link" />
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label htmlFor="inputPassword3" className="col-sm-2 col-md-4 col-lg-2 col-form-label">Linkedin Link:</label>
                                                    <div className="col-sm-6">
                                                        <input type="text" onChange={e => { setLinkedin(e.target.value) }} value={linkedin} className="form-control" placeholder="Linkedin Link" />
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label htmlFor="inputPassword3" className="col-sm-2 col-md-4 col-lg-2 col-form-label">Youtube Link:</label>
                                                    <div className="col-sm-6">
                                                        <input type="text" onChange={e => { setYoutube(e.target.value) }} value={youtube} className="form-control" placeholder="Youtube Link" />
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label htmlFor="inputPassword3" className="col-sm-2 col-md-4 col-lg-2 col-form-label">Instagram Link:</label>
                                                    <div className="col-sm-6">
                                                        <input type="text" onChange={e => { setInstagram(e.target.value) }} value={instagram} className="form-control" placeholder="Instagram Link" />
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label htmlFor="Telegram Link" className="col-sm-2 col-md-4 col-lg-2 col-form-label">Telegram Link:</label>
                                                    <div className="col-sm-6">
                                                        <input type="text" onChange={e => { setTelegram(e.target.value) }} value={telegram} className="form-control" id="Telegram Link" placeholder="Telegram Link" />
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label htmlFor="Reddit Link" className="col-sm-2 col-md-4 col-lg-2 col-form-label">Reddit Link:</label>
                                                    <div className="col-sm-6">
                                                        <input type="text" onChange={e => { setReddit(e.target.value) }} value={reddit} className="form-control" id="Reddit Link" placeholder="Reddit Link" />
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label htmlFor="Medium Link" className="col-sm-2 col-md-4 col-lg-2 col-form-label">Medium Link:</label>
                                                    <div className="col-sm-6">
                                                        <input type="text" onChange={e => { setMedium(e.target.value) }} value={medium} className="form-control" id="Medium Link" placeholder="Medium Link" />
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label htmlFor="Discord Link" className="col-sm-2 col-md-4 col-lg-2 col-form-label">Discord Link:</label>
                                                    <div className="col-sm-6">
                                                        <input type="text" onChange={e => { setDiscord(e.target.value) }} value={discord} className="form-control" id="DiscordLink" placeholder="Discord Link" />
                                                    </div>
                                                </div>
                                                {/* <div className="row mb-3">
                                        <label htmlFor="inputPassword3" className="col-sm-2 col-md-4 col-lg-2 col-form-label">Choose Road Map:</label>

                                        <div className="col-sm-6">
                                            <input type="file" accept="image/*" ref={inputRef} className="form-control" onChange={onImageChange} />
                                        </div>
                                        <span style={showError ? { visibility: 'visible', color: "red" } : { visibility: 'hidden' }} >Your Image size should be less than 2 MB</span>

                                    </div> */}


                                                <div className="row mb-3">
                                                    <label htmlFor="inputPassword3" className="col-sm-4 col-md-4 col-lg-2 col-form-label">KYC Status:</label>
                                                    <div className="col-sm-6">
                                                        <label className="switch"><input type="checkbox" onChange={() => changetoggle()} value={iskycstatus} checked={iskycstatus} /><span className="slider round"></span></label>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-end">
                                                    <p className="float-right">
                                                        <img src={profileImage.imagePreview} className="profile-image img-fluid" alt="" id="output" width="150px" />
                                                    </p>
                                                </div>
                                                <div className="d-flex justify-content-end">
                                                    <button type="submit" onClick={onWebDataChange} className="btn btn-bg">Save</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>}
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default Website;