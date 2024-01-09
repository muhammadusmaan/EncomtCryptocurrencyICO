import React, { useState, useEffect } from 'react'
import ReactDOM from "react-dom";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import IdCard from '../images/idcard.png';
import AdminNavbar from '../Dashboard/AdminNavbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faEye, faCheck, faXmark, faBell } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { Api_Url } from '../utils/Base_url';
import LoaderSpinner from '../utils/LoaderSpinner';
import Toast from '../utils/Toast';
import dateFormat from 'dateformat';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AdminLayout from './AdminLayout';
import logo from '../images/logo.png';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

import $ from 'jquery';
import 'jquery/dist/jquery.min.js'
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import "datatables.net-buttons/js/dataTables.buttons.js"
import "datatables.net-buttons/js/buttons.colVis.js"
import "datatables.net-buttons/js/buttons.flash.js"
import "datatables.net-buttons/js/buttons.html5.js"
import "datatables.net-buttons/js/buttons.print.js"

function KYCAdmin(props) {


    const [title, setTitle] = React.useState(0);
    const [isOpen, setIsOpen] = React.useState(false);
    const [startTime, setStartTime] = React.useState(0);
    const [endTime, setEndTime] = React.useState(0);
    const [kycList, setKycList] = React.useState([]);
    const [modalData, setModalData] = React.useState({});

    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    const [isLoading, setIsLoading] = useState(false);


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
        getKYCList();
    }, [props])


    useEffect(() => {

       // if (userToken.user.isAdmin === false) {
         //   Navigate("/Dashboard");
        //}

        $(document).ready(function () {
            $("#KYCList-Table").DataTable({
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

    async function getKYCList() {
        setIsLoading(true);
        try {
            const KYCList = await axios.get(`${Api_Url}/allkyc`
                , { headers: { "Authorization": `Bearer ${userToken.token}` } });
            setIsLoading(false);
            setKycList(KYCList.data.kyc)
        }
        catch (err) {
            setIsLoading(false);
        }
    }

    const updateStatus = async (e) => {

        if (e.target.name === 'approved') {
            const data = { status: 'approved' }
            try {

                setIsLoading(true);
                await axios.put(`${Api_Url}/kyc/${modalData._id}`, data,
                    {
                        headers: {
                            "Authorization": `Bearer ${userToken.token}`,
                        }
                    })
                    .then((res) => {

                        setIsLoading(false);
                        if (res.status === 200) {
                            toast.success("KYC Approved Successfully");
                            hideModal();
                            getKYCList();
                        }
                    });
            } catch (err) {
                setIsLoading(false);
                toast.error(err?.response?.data?.error);
            }

        } else if (e.target.name === 'disapprove') {
            try {
                setIsLoading(true);
                await axios.delete(`${Api_Url}/kyc/` + modalData._id,
                    {
                        headers: {
                            "Authorization": `Bearer ${userToken.token}`,
                        }
                    })
                    .then((res) => {

                        setIsLoading(false);
                        if (res.status === 200) {
                            toast.success("KYC Disapproved Successfully");
                            getKYCList();
                            hideModal();
                        }
                    });
            } catch (err) {
                setIsLoading(false);
                toast.error(err?.response?.data?.error);
            }
        }

    }

    const showModal = () => {
        setIsOpen(true);
        setTitle("KYC Details");
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
                                <h1 className="card-title text-white textSize px-5 mt-3">KYC</h1>
                            </div>
                            <div className="px-5">
                                <hr className="hr-style" />
                            </div>
                            {isLoading ? <LoaderSpinner /> :
                                <div className="card-body px-5">
                                    <div className="row">
                                        <div className="card cardBg">
                                            <div className="table-responsive mt-3">
                                                <table id="KYCList-Table" className="table text-white">
                                                    <thead>
                                                        <tr>
                                                            <th className="bg-th" scope="col">Sr.</th>
                                                            <th className="bg-th" scope="col">User Name</th>
                                                            <th className="bg-th" scope="col">User Email</th>
                                                            <th className="bg-th" scope="col">Status</th>
                                                            <th className="bg-th" scope="col">Document Type</th>
                                                            <th className="bg-th" scope="col">Document Number</th>
                                                            <th className="bg-th" scope="col">Expiry Date</th>
                                                            <th className="bg-th" scope="col">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {kycList ? kycList.map((singleKycItem, indx) => {
                                                            return (
                                                                <tr Key={indx}>
                                                                    <th scope="row">{indx + 1}</th>
                                                                    <td>{singleKycItem.userDetail.firstname}</td>
                                                                    <td>{singleKycItem.userDetail.email} </td>
                                                                    <td>{singleKycItem.status}</td>
                                                                    <td>{singleKycItem.doc_type}</td>
                                                                    <td>{singleKycItem.doc_number}</td>
                                                                    <td>{dateFormat(singleKycItem.expiryDate, "dd/mm/yyyy")}</td>
                                                                    <td>
                                                                        <div className="d-flex gap-2">
                                                                            <button type="submit" title="view" className="btn btn-bg" onClick={() => { setModalData(singleKycItem); showModal(); }}><FontAwesomeIcon icon={faEye} /></button>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        }) : ''
                                                        }
                                                    </tbody>
                                                </table>


                                            </div>
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
                                                    <div className="row gy-2 px-3">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>First Name:</label>
                                                                <label className="form-control fs-5 kyc-label">{modalData.userDetail ? modalData.userDetail.firstname : ''}</label>
                                                            </div>
                                                        </div>
                                                        <div className=" col-md-6">
                                                            <div className="form-group">
                                                                <label>Last Name:</label>
                                                                <label className="form-control fs-5 kyc-label">{modalData.userDetail ? modalData.userDetail.lastname : ''}</label>
                                                            </div>
                                                        </div>
                                                        <div className=" col-md-6">
                                                            <div className="form-group">
                                                                <label>Email:</label>
                                                                <label className="form-control fs-5 kyc-label">{modalData.userDetail ? modalData.userDetail.email : ''}</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>Phone Number:</label>
                                                                <label className="form-control fs-5 kyc-label">{modalData.userDetail ? modalData.userDetail.phoneNumber : ''}</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>Document Type:</label>
                                                                <label className="form-control fs-5 kyc-label">{modalData.doc_type}</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>Document Number:</label>
                                                                <label className="form-control fs-5 kyc-label">{modalData.doc_number}</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>Expiry Date:</label>
                                                                <label className="form-control fs-5 kyc-label">{dateFormat(modalData.expiryDate, "dd/mm/yyyy")}</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>Status:</label>
                                                                <label className="form-control fs-5 kyc-label">{modalData.status}</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label>Front Image:</label>
                                                            <div className="form-group  d-flex justify-content-center">
                                                                <img className="img-fluid col-md-6 " src={modalData ? modalData.frontpic : IdCard} />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label>Back Image:</label>
                                                            <div className="form-group  d-flex justify-content-center">
                                                                <img className="img-fluid col-md-6" src={modalData ? modalData.backpic : IdCard} />
                                                            </div>
                                                        </div>
                                                        <div className="d-flex justify-content-end gap-3 mt-4 mb-4">
                                                            <button className="btn btn-success" name='approved' onClick={(e) => { updateStatus(e) }}>Approve</button>
                                                            <button className="btn btn-danger" name='disapprove' onClick={(e) => { updateStatus(e) }}>Disapprove</button>
                                                        </div>

                                                    </div>
                                                </Modal.Body>
                                                <Modal.Footer>

                                                    <button className="btn btn-bg" onClick={hideModal}>Close</button>
                                                </Modal.Footer>
                                            </Modal>
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
export default KYCAdmin;