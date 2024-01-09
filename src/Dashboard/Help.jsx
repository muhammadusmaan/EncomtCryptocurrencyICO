import { useState, useEffect } from 'react'
import { Api_Url } from '../utils/Base_url'
import Toast from '../utils/Toast'
import UserNavbar from '../Dashboard/UserNavbar'
import axios from 'axios';
import LoaderSpinner from '../utils/LoaderSpinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom'

import UserLayout from './UserLayout';
import logo from '../images/logo.png';
import { faUser, faBell } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Help = (props) => {
    let Navigate = useNavigate();

    const userData = sessionStorage.getItem('userData');
    const datauser = JSON.parse(userData);

    const [name, setName] = useState("");
    const [email, setemail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    // const [showError, setshowerror] = useState(false);
    const user = { name, email, subject, message }
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
    }, [props])


    async function onFormSubmit(e) {
        e.preventDefault()
        try {
            if (user.name === '') {
                toast.error('Name is required');
                return;
            }
            if (user.email === '') {
                toast.error('Email is required');
                return;
            }
            if (user.subject === '') {
                toast.error('Subject is required');
                return;
            }
            setIsLoading(true);
            await axios.post(`${Api_Url}/submit`, user,
                { headers: { "Authorization": `Bearer ${userToken.token}` } })
                .then((res) => {
                    if (res.status === 200) {
                        toast.success(res.data.message);
                        setIsLoading(false);
                        setName("")
                        setemail("")
                        setSubject("")
                        setMessage("")
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
                        <div className="card py-3 cardBg cardShadowColor">
                            <div>
                                <h1 className="card-title text-white textSize px-5 mt-3">Help</h1>
                            </div>
                            <div className="px-5">
                                <hr className="hr-style" />
                            </div>
                            <div className="card-body px-5">
                                {isLoading ? <LoaderSpinner /> :
                                    <div className="row">
                                        <div className="card py-3 cardBg">
                                            <div className="row">
                                                <form id="" role="form">
                                                    <div className="controls">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <label className="help-label" htmlFor="name">Name *</label>
                                                                    <input id="name" type="text" onChange={e => { setName(e.target.value) }} name="name" value={datauser.firstname} className="form-control p-3" placeholder="Name" required data-error="Name*" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <label className="help-label" htmlFor="email">Email *</label>
                                                                    <input id="email" type="email" onChange={e => { setemail(e.target.value) }} name="email" value={datauser.email} className="form-control p-3" placeholder="Email" data-error="Email*" required />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="mt-3 col-md-12">
                                                                <div className="form-group">
                                                                    <label className="help-label" htmlFor="subject">Subject *</label>
                                                                    <input id="subject" type="text" onChange={e => { setSubject(e.target.value) }} name="subject" value={subject} className="form-control p-3" placeholder="Subject" required />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="mt-3 col-md-12">
                                                                <div className="form-group">
                                                                    <label className="help-label" htmlFor="form_message">Message</label>
                                                                    <textarea id="form_message" onChange={e => { setMessage(e.target.value) }} name="message" value={message} className="form-control p-3" placeholder="Write your message here." rows="6" required="required" data-error="Please, leave us a message."></textarea>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        {/* <div className="col-md-12 mt-3 d-flex justify-content-end">
                                                <button onClick={onFormSubmit} type="submit" className="btn btn-bg p-3">Submit</button>
                                            </div> */}
                                                        <div className="mt-5 d-flex justify-content-end">
                                                            <button onClick={onFormSubmit} className="btn btn-bg help-btn">Submit</button>
                                                        </div>

                                                    </div>
                                                </form>
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
    );



}
export default Help;