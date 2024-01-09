import React, { useRef, useState, useEffect } from 'react';
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import Avater from '../images/avatar.png';
import { AppName, CoinName } from "../utils/Constant";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faEye } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { Api_Url } from '../utils/Base_url';
import Toast from '../utils/Toast';
import LoaderSpinner from '../utils/LoaderSpinner';
import Pagination from 'react-responsive-pagination';
import $ from 'jquery';
import 'jquery/dist/jquery.min.js'
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import "datatables.net-buttons/js/dataTables.buttons.js"
import "datatables.net-buttons/js/buttons.colVis.js"
import "datatables.net-buttons/js/buttons.flash.js"
import "datatables.net-buttons/js/buttons.html5.js"
import "datatables.net-buttons/js/buttons.print.js"
import dateFormat from 'dateformat';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AdminLayout from './AdminLayout';
import logo from '../images/logo.png';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom'
import AdminNavbar from '../Dashboard/AdminNavbar'
function User(props) {
    const inputRef = useRef([]);
    const [title, setTitle] = React.useState(0);
    const [isOpen, setIsOpen] = React.useState(false);
    const [timer, setTimer] = React.useState(0);
    const [startTime, setStartTime] = React.useState(0);
    const [endTime, setEndTime] = React.useState(0);
    const [usersList, setUsersList] = useState([]);
    const [modelData, setModelData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [toogle, setToggle] = useState();
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

    const showModal = () => {
        setIsOpen(true);
        setTitle("User Details");
        document.body.style.backgroundColor = "white";
    };
    const hideModal = () => {
        setIsOpen(false);
    };
    const startTimer = () => {
        setStartTime(Date.now());
    };

    const modalLoaded = () => {
        setEndTime(Date.now());
    };

    const onExit = () => {
        setTitle("Goodbye");
    };

    const onExited = () => {
        document.body.style.backgroundColor = "green";
    };

    useEffect(() => {
        //if (userToken.user.isAdmin === false) {
          //  Navigate("/Dashboard");
        //}

        if (window.innerWidth <= 760) {
            setIsSidebar(true)
        }
       // setIsLoading(true);
        getUsersList();
    }, [props])


    useEffect(() => {

        $(document).ready(function () {
            $("#user-table").DataTable({
                pagingType: 'full_numbers',
                pageLength: 5,
                processing: true,
                dom: 'Bfrtip',
                buttons: [
                    {
                    extend: 'csv',
                    exportOptions: {
                        columns: [0,1,2,3,4,5,6]
                    }
                }
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


    async function getUsersList() {

        try {
            const List = await axios.get(`${Api_Url}/users`
                , { headers: { "Authorization": `Bearer ${userToken.token}` } });
            setIsLoading(false);
            setUsersList(List.data.users)
        }
        catch (err) {
            toast.error(err?.response?.data?.error);
        }
    }

    async function ChangeAccount(e, list, index) {

        setIsLoading(true);
        let id = list._id;

        let val;
        if (e.target.value === 'false') {
            val = true;
        }
        if (e.target.value === 'true') {
            val = false;
        }

        // e.preventDefault()

        try {
            const formData = new FormData();
            formData.append('isAccountVerified', val);

            await axios.put(`${Api_Url}/user/` + id, formData,
                {
                    headers: {
                        "Authorization": `Bearer ${userToken.token}`,
                        'content-type': 'multipart/form-data'
                    }
                })
                .then((res) => {
                    if (res.status === 200) {
                        // inputRef.current[index].value = val;
                        // setIsLoading(false);
                        toast.success("User Updated Successfully");
                        getUsersList();
                    }
                    else {
                        setIsLoading(false);
                    }
                })
        }
        catch (err) {
            setIsLoading(false);
            toast.error(err?.response?.data?.error);

        }


    }
    async function ChangeEmailVerification(e, list, index) {

        setIsLoading(true);
        let id = list._id;

        let val;
        if (e.target.value === 'false') {
            val = true;
        }
        if (e.target.value === 'true') {
            val = false;
        }

        // e.preventDefault()

        try {
            const formData = new FormData();
            formData.append('isEmailVerified', val);

            await axios.put(`${Api_Url}/user/` + id, formData,
                {
                    headers: {
                        "Authorization": `Bearer ${userToken.token}`
                    }
                })
                .then((res) => {
                    if (res.status === 200) {
                        // inputRef.current[index].value = val;
                        // setIsLoading(false);
                        toast.success("User's Email Verification Updated Successfully");
                        getUsersList();
                    }
                    else {
                        setIsLoading(false);
                    }
                })
        }
        catch (err) {
            setIsLoading(false);
            toast.error(err?.response?.data?.error);

        }
    }

    const handleClick = () => {
        return setIsSidebar(!isSidebar)
      };
  

    return (
        <>
            {/* Dashboard Navbar */}
            <AdminNavbar handleClick={handleClick} />

            <div className="container-fluid max-width-dashboard">
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
                                <h1 className="card-title text-white textSize px-5 mt-3">Users</h1>
                            </div>
                            <div className="px-5">
                                <hr className="hr-style" />
                            </div>
                            {isLoading ? <LoaderSpinner /> :
                                <div className="card-body px-5">
                                    <div className="row">
                                        <div className="card cardBg">
                                            <div className="table-responsive mt-3">
                                                <table id="user-table" className="table text-white">
                                                    <thead>
                                                        <tr>
                                                            <th className="bg-th" scope="col">Sr.</th>
                                                            <th className="bg-th" scope="col">First Name</th>
                                                            <th className="bg-th" scope="col">Last Name</th>
                                                            <th className="bg-th" scope="col">Wallet Address</th>
                                                            <th className="bg-th" scope="col">Email</th>
                                                            <th className="bg-th" scope="col">Phone Number</th>
                                                            <th className="bg-th" scope="col">Registration Date</th>
                                                            <th className="bg-th" scope="col">Account Active</th>
                                                            <th className="bg-th" scope="col">Verify Email</th>
                                                            <th className="bg-th" scope="col">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {usersList.map((singleUser, indx) => {

                                                            return (
                                                                <tr Key={indx}>

                                                                    <th scope="row">{indx + 1}</th>
                                                                    <td>{singleUser.firstname}</td>
                                                                    <td>{singleUser.lastname ? singleUser.lastname : '-'}</td>
                                                                    <td className="th-custom">{singleUser.wallet ? singleUser.wallet.public_key : ''}</td>
                                                                    <td>{singleUser.email}</td>
                                                                    <td>{singleUser.phoneNumber ? singleUser.phoneNumber : '-'}</td>
                                                                    <td>{dateFormat(singleUser.created, "dd/mm/yyyy")}</td>
                                                                    <td><label className="switch">
                                                                        <input id={indx} ref={el => (inputRef.current = [...inputRef.current, el])} type="checkbox" onChange={e => { ChangeAccount(e, singleUser, indx) }} checked={singleUser?.isAccountVerified} value={singleUser.isAccountVerified} />
                                                                        <span className="slider round"></span>
                                                                    </label></td>
                                                                    <td><label className="switch">
                                                                        <input ref={ele => (inputRef.current = [...inputRef.current, ele])} type="checkbox" onChange={e => { ChangeEmailVerification(e, singleUser, indx) }} checked={singleUser?.isEmailVerified} value={singleUser.isEmailVerified} />
                                                                        <span className="slider round"></span>
                                                                    </label></td>
                                                                    <td><button type="submit" className="btn btn-bg cursor" title="view" onClick={() => { showModal(); setModelData(singleUser) }}><FontAwesomeIcon icon={faEye} /></button></td>
                                                                </tr>)
                                                        }
                                                        )}
                                                    </tbody>
                                                </table>
                                            </div>
                                            {/* ----------View Model----------- */}
                                            <Modal
                                                show={isOpen}
                                                onHide={hideModal}
                                                onEnter={startTimer}
                                                onEntered={modalLoaded}
                                                onExit={onExit}
                                                onExited={onExited}
                                            >
                                                <Modal.Header>
                                                    <Modal.Title>{title}</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <div className="card py-3 cardBg cardShadowColor">
                                                        <div className="card-body px-md-5 px-lg-5">
                                                            <div className="row">

                                                                <div className="d-flex justify-content-center">
                                                                    <img className="img-fluid user-img" src={modelData.profileImage}></img>
                                                                </div>
                                                                <h2 className="text-center mt-2"></h2>
                                                                <div className="row gy-2 px-3">


                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label>First Name:</label>
                                                                            <label className="form-control fs-5 fs-5">{modelData.firstname ? modelData.firstname : 'Not Added Yet'}</label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label>Last Name:</label>
                                                                            <label className="form-control fs-5 fs-5">{modelData.lastname ? modelData.lastname : '-'}</label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label>Phone Number:</label>
                                                                            <label className="form-control fs-5">{modelData.phoneNumber ? modelData.phoneNumber : '-'}</label>
                                                                        </div>
                                                                    </div>

                                                                    <div className=" col-md-6">
                                                                        <div className="form-group">
                                                                            <label>Email:</label>
                                                                            <label className="form-control fs-5">{modelData.email}</label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label>Wallet Address:</label>
                                                                            <label className="form-control fs-5">{modelData.wallet ? modelData.wallet.public_key : ''}</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <button className="btn btn-bg" onClick={hideModal}>Close</button>
                                                </Modal.Footer>
                                            </Modal>

                                        </div>

                                    </div>

                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default User