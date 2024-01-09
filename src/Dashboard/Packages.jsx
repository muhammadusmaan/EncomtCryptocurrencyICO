import React from 'react';
import ReactDOM from "react-dom";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import AdminNavbar from '../Dashboard/AdminNavbar'
import { AppName, CoinName } from "../utils/Constant";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPenToSquare, faEye, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import axios from 'axios';
import { Api_Url } from '../utils/Base_url';
import LoaderSpinner from '../utils/LoaderSpinner';
import Toast from '../utils/Toast'
import dateFormat from 'dateformat';
import $ from 'jquery';
import 'jquery/dist/jquery.min.js'
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import "datatables.net-buttons/js/dataTables.buttons.js"
import "datatables.net-buttons/js/buttons.colVis.js"
import "datatables.net-buttons/js/buttons.flash.js"
import "datatables.net-buttons/js/buttons.html5.js"
import "datatables.net-buttons/js/buttons.print.js"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import AdminLayout from './AdminLayout';
import logo from '../images/logo.png';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

function Packages(props) {
    const [title, setTitle] = React.useState(0);
    const [isOpen, setIsOpen] = React.useState(false);
    const [isOpen2, setIsOpen2] = React.useState(false);
    const [isOpen3, setIsOpen3] = React.useState(false);
    const [isOpen4, setIsOpen4] = React.useState(false);
    const [timer, setTimer] = React.useState(0);
    const [startTime, setStartTime] = React.useState(0);
    const [endTime, setEndTime] = React.useState(0);
    const [packagesList, setPackagesList] = useState([]);
    const [viewPackage, setViewPackage] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    const [editData, setEditData] = useState('');
    const [packageDelete, setPackageDelete] = useState('');

    //Update States
    const [pTitle, setPTitle] = useState('');
    const [pTotalCoin, setPTotalCoin] = useState('');
    const [minPurchase, setMinPurchase] = useState('');
    const [pRate, setPRate] = useState('');
    const [sDate, setSDate] = useState('');
    const [eDate, setEDate] = useState('');
    const [pStatus, setPStatus] = useState('');
    const [packageUpdateid, setPackageUpdateid] = useState('');
    const [dateErrorMsg, setDateErrorMessage] = useState('');

    const [showError, setshowerror] = useState(false);
    const [rateError, setRateError] = useState(false);
    const [totalError, setTotalError] = useState(false);
    const [dateError, setDateError] = useState(false);
    const [minPurchaseError, setMinPurchaseError] = useState(false);
    const [minAmountError, setMinAmountError] = useState(false);

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
        getPackagesHistory();
    }, [props])


    useEffect(() => {
        $(document).ready(function () {
            $("#packages-table").DataTable({
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


    async function AddPackage() {

        setshowerror(false);
        setRateError(false);
        setDateError(false);
        setTotalError(false);
        setMinAmountError(false);
        setMinPurchaseError(false);


        if (pTitle.package_name === '' || typeof pTitle.package_name == 'undefined') {
            setshowerror(true);
            return
        } else {
            setshowerror(false);
        }

        if (sDate.start_date === eDate.end_date) {
            setDateError(true);
            setDateErrorMessage("Start date and End date should not be same")
            return
        }
        else {
            setDateError(false);

        }
        let date1 = new Date(sDate.start_date);
        let date2 = new Date(eDate.end_date);

        if (date1 > date2) {
            setDateError(true);
            setDateErrorMessage("Start date should be less than End date")

            return
        } else {
            setDateError(false);
        }

        if (pRate.rate === '' || typeof pRate.rate == 'undefined') {
            setRateError(true);
            return
        }
        else {
            setRateError(false);
        }
        if (pTotalCoin.totalcoin === '' || typeof pTotalCoin.totalcoin == 'undefined') {
            setTotalError(true);
            return
        }
        else {
            setTotalError(false);
        }

        if (minPurchase.minimum_purchase === '' || typeof minPurchase.minimum_purchase == 'undefined') {
            setMinPurchaseError(true);
            return
        } else {
            setMinPurchaseError(false);
        }

        if (minPurchase.minimum_purchase <= 0) {
            setMinAmountError(true);
            return
        } else {
            setMinAmountError(false);
        }

        const data = {
            package_name: pTitle.package_name,
            start_date: sDate.start_date,
            end_date: eDate.end_date,
            totalcoin: pTotalCoin.totalcoin,
            minimum_purchase: minPurchase.minimum_purchase,
            rate: pRate.rate
        }

        try {
            await axios.post(`${Api_Url}/addpackage`, data
                , { headers: { "Authorization": `Bearer ${userToken.token}` } })
                .then((res) => {
                    setIsOpen3(false);
                    if (res.status === 200) {
                        toast.success(res.data.message);
                        getPackagesHistory();
                    }
                })
        }
        catch (err) {
            setIsOpen3(false);
            toast.error(err?.response?.data?.error);
        }
    }


    async function getPackagesHistory() {
        setIsLoading(true);
        try {
            const Packages = await axios.get(`${Api_Url}/allpackage`
                , { headers: { "Authorization": `Bearer ${userToken.token}` } });
            setIsLoading(false);

            setPackagesList(Packages.data.data)
        }
        catch (err) {
            setIsLoading(false);
        }
    }

    async function ChangeStatus(e, list, index) {

        setIsLoading(true);
        let id = list._id;

        let val;
        if (e.target.value === 'false') {
            val = true;
        }
        if (e.target.value === 'true') {
            val = false;
        }

        try {
            let status = val;
            const data = { status }

            await axios.put(`${Api_Url}/package/` + id, data,
                {
                    headers: {
                        "Authorization": `Bearer ${userToken.token}`
                    }
                })
                .then((res) => {
                    if (res.status === 200) {
                        toast.success("Package Updated Successfully");
                        getPackagesHistory();
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

    const updatePackage = async () => {
        try {
            setshowerror(false);
            setRateError(false);
            setDateError(false);
            setTotalError(false);
            setMinAmountError(false);
            setMinPurchaseError(false);

            if (pTitle.package_name === '') {
                setshowerror(true);
                return

            } else {
                setshowerror(false);
            }

            if (sDate.start_date === eDate.end_date) {
                setDateError(true);
                setDateErrorMessage("Start date and End date should not be same")

                return
            }
            else {
                setDateError(false);

            }

            let date1 = new Date(sDate.start_date);
            let date2 = new Date(eDate.end_date);

            if (date1 > date2) {
                setDateError(true);
                setDateErrorMessage("Start date should be less than End date")

                return
            } else {
                setDateError(false);
            }

            if (pRate.rate === '') {
                setRateError(true);
                return

            }
            else {
                setRateError(false);
            }
            if (pTotalCoin.totalcoin === '') {
                setTotalError(true);
                return
            }
            else {
                setTotalError(false);
            }

            if (minPurchase.minimum_purchase === '' || typeof minPurchase.minimum_purchase == 'undefined') {
                setMinPurchaseError(true);
                return
            } else {
                setMinPurchaseError(false);
            }

            if (minPurchase.minimum_purchase <= 0) {
                setMinAmountError(true);
                return
            } else {
                setMinAmountError(false);
            }

            const data = {
                status: pStatus.status,
                package_name: pTitle.package_name,
                start_date: sDate.start_date,
                end_date: eDate.end_date,
                totalcoin: pTotalCoin.totalcoin,
                minimum_purchase: minPurchase.minimum_purchase,
                rate: pRate.rate
            }

            await axios.put(`${Api_Url}/package/` + packageUpdateid, data
                , { headers: { "Authorization": `Bearer ${userToken.token}` } })

                .then((res) => {
                    setIsOpen2(false);
                    if (res.status === 200) {
                        toast.success('Package Update Successfully');
                        getPackagesHistory();
                    }

                });
        }
        catch (err) {
            setIsOpen2(false);
            toast.error(err?.response?.data?.error);
        }

    }

    const handleChange = e => {
        setEditData(e.target.value);
        // e.preventDefault();
    };
    const statusChange = e => {
        if (e.target.value == 'Active') {
            setPStatus({ status: true });
        } else {
            setPStatus({ status: false });
        }

        // e.preventDefault();
    };
    const TotalCoinChange = e => {
        setPTotalCoin({ totalcoin: e.target.value });
        // e.preventDefault();
    };
    const MinimumPurchase = e => {
        setMinPurchase({ minimum_purchase: e.target.value });
        // e.preventDefault();
    };
    const RateChange = e => {
        setPRate({ rate: e.target.value });
        // e.preventDefault();
    };
    const TitleChange = e => {
        setPTitle({ package_name: e.target.value });
        // e.preventDefault();
    };
    const startdateChange = e => {
        setSDate({ start_date: e.target.value });
        // e.preventDefault();
    };
    const enddateChange = e => {
        setEDate({ end_date: e.target.value });
        // e.preventDefault();
    };
    const showModal = async (id) => {

        setIsOpen(true);
        setTitle("Package Details");
        document.body.style.backgroundColor = "white";

        try {
            const Packages = await axios.get(`${Api_Url}/package/` + id
                , { headers: { "Authorization": `Bearer ${userToken.token}` } });

            if (Packages.data.data.status) {
                Packages.data.data.status = 'Active'
            } else {
                Packages.data.data.status = 'Inactive'
            }
            setViewPackage(Packages.data);
        }
        catch (err) {
            toast.error(err)
        }


    };

    const showModal2 = () => {
        setIsOpen2(true);
        setTitle("Edit Package");
        document.body.style.backgroundColor = "white";
    };
    const showModal3 = () => {
        setIsOpen3(true);
        setTitle("Add Package");
        document.body.style.backgroundColor = "white";

        setSDate(Date.now());
        setEDate(Date.now());
        setPTitle('');
        setPRate('');
        setPTotalCoin('');


    };
    const showModal4 = (id) => {
        setPackageDelete(id);

        setIsOpen4(true);
        setTitle("Delete Package");
        document.body.style.backgroundColor = "white";
    };

    const DeletePackage = async () => {

        try {
            // setIsLoading(true);
            await axios.delete(`${Api_Url}/package/` + packageDelete
                , { headers: { "Authorization": `Bearer ${userToken.token}` } })
                .then((res) => {
                    // setIsLoading(false);
                    setIsOpen4(false);
                    if (res.status === 200) {
                        toast.success(res.data.message);
                        getPackagesHistory();
                    }
                })
        }
        catch (err) {
            setIsOpen4(false);
            toast.error(err?.response?.data?.error);
            // setIsLoading(false);
        }

    };

    const hideModal = () => {
        setIsOpen(false);
    };
    const hideModal2 = () => {
        setIsOpen2(false);
    };
    const hideModal3 = () => {
        setIsOpen3(false);
    };
    const hideModal4 = () => {
        setIsOpen4(false);
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
                                <h1 className="card-title text-white textSize px-5 mt-3">Packages</h1>
                            </div>
                            <div className="px-5">
                                <hr className="hr-style" />
                            </div>
                            <div className="px-5 d-flex justify-content-end">
                                <button type="submit" className="btn btn-bg cus-btn" onClick={() => showModal3()}>Add Packages</button>
                            </div>
                            {isLoading ? <LoaderSpinner /> :
                                <div className="card-body px-5">
                                    <div className="row">
                                        <div className="card cardBg">
                                            <div className="table-responsive mt-3">
                                                <table id="packages-table" className="table text-white">
                                                    <thead>
                                                        <tr>
                                                            <th className="bg-th" scope="col">Sr.</th>
                                                            <th className="bg-th" scope="col">Title</th>
                                                            <th className="bg-th" scope="col">Total Supply</th>
                                                            <th className="bg-th" scope="col">Start Date</th>
                                                            <th className="bg-th" scope="col">End Date</th>
                                                            <th className="bg-th" scope="col">Rate/USD</th>
                                                            <th className="bg-th" scope="col">Min. Rate</th>
                                                            <th className="bg-th" scope="col">Status</th>
                                                            <th className="bg-th" scope="col">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {packagesList.map((Package, index) => {
                                                            return (
                                                                <tr Key={index}>
                                                                    <th scope="row">{index + 1}</th>
                                                                    <td>{Package.package_name}</td>
                                                                    <td>{Package.totalcoin} {CoinName}</td>
                                                                    <td>{dateFormat(Package.start_date, "dd/mm/yyyy")}</td>
                                                                    <td>{dateFormat(Package.end_date, "dd/mm/yyyy")}</td>
                                                                    <td>{Package.rate} {CoinName}</td>
                                                                    <td>{Package.minimum_purchase} USD</td>
                                                                    <td><label className="switch">
                                                                        <input id={index} type="checkbox" onChange={e => { ChangeStatus(e, Package, index) }} checked={Package?.status} value={Package.status} />
                                                                        <span className="slider round"></span>
                                                                    </label></td>
                                                                    <td>
                                                                        <div className="d-flex gap-2">
                                                                            <button type="submit" title="view" className="btn btn-bg" onClick={() => { showModal(Package._id) }}><FontAwesomeIcon icon={faEye} /></button>
                                                                            <button type="submit" title="Edit" className="btn btn-primary" onClick={() => { showModal2(); setPackageUpdateid(Package._id); setMinPurchase(Package); setEditData(Package); setSDate(Package); setEDate(Package); setPStatus(Package); setPRate(Package); setPTotalCoin(Package); setPTitle(Package); }}><FontAwesomeIcon icon={faPenToSquare} /></button>
                                                                            <button type="submit" title="Delete" className="btn btn-danger" onClick={() => { showModal4(Package._id) }}><FontAwesomeIcon icon={faTrashCan} /></button>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })}
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
                                                    <div className="row gy-2 px-3">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>Title:</label>
                                                                <label className="form-control fs-5 fs-5">{viewPackage.data ? viewPackage.data.package_name : ''}</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>Status:</label>
                                                                <label className="form-control fs-5">{viewPackage.data ? viewPackage.data.status : ''}</label>
                                                            </div>
                                                        </div>

                                                        <div className=" col-md-6">
                                                            <div className="form-group">
                                                                <label>Start Date:</label>
                                                                <label className="form-control fs-5">{viewPackage.data ? dateFormat(viewPackage.data.start_date, "dd/mm/yyyy") : ''}</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>End Date:</label>
                                                                <label className="form-control fs-5">{viewPackage.data ? dateFormat(viewPackage.data.end_date, "dd/mm/yyyy") : ''}</label>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>Rate/USD:</label>
                                                                <label className="form-control fs-5">{viewPackage.data ? viewPackage.data.rate : ''} {CoinName}</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>Minimum Purchase Rate:</label>
                                                                <label className="form-control fs-5">{viewPackage.data ? viewPackage.data.minimum_purchase : ''} USD</label>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>Total User's:</label>
                                                                <label className="form-control fs-5">{viewPackage.data ? viewPackage.totalUser[0].total : ''}</label>
                                                            </div>
                                                        </div>
                                                        <div className=" col-md-6">
                                                            <div className="form-group">
                                                                <label>Total Supply:</label>
                                                                <label className="form-control fs-5 fs-5">{viewPackage.data ? viewPackage.data.totalcoin : ''} {CoinName}</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>Total Purchased:</label>
                                                                <label className="form-control fs-5">{viewPackage.data ? viewPackage.totalPurchase[0].total : ''} {CoinName}</label>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>Remaining Coins:</label>
                                                                <label className="form-control fs-5">{viewPackage.data ? viewPackage.remaining_coin : ''} {CoinName}</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>Bonus Coins:</label>
                                                                <label className="form-control fs-5">{viewPackage.data ? viewPackage.bonus[0].total : ''} {CoinName}</label>
                                                            </div>
                                                        </div>


                                                    </div>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <button className="btn btn-bg" onClick={() => hideModal()}>Close</button>
                                                </Modal.Footer>
                                            </Modal>

                                            {/* ----------Edit Model----------- */}

                                            <Modal
                                                show={isOpen2}
                                                onHide={hideModal2}
                                                onEnter={startTimer}
                                                onEntered={modalLoaded}
                                                onExit={onExit}
                                                onExited={onExited}
                                            >
                                                <Modal.Header>
                                                    <Modal.Title>{title}</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <from>
                                                        <div className="row gy-2 px-3">
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <label>Title:</label>
                                                                    <input type="text" value={pTitle.package_name} onChange={TitleChange} className="form-control fs-5" placeholder="Package Name" />
                                                                    <small style={{ display: showError ? "inline-block" : "none", color: "red" }}>Please Enter Package Name</small>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <label>Status:</label>
                                                                    <label className="form-control p-0 fs-5">
                                                                        <select value={pStatus.status ? 'Active' : 'InActive'} onChange={statusChange} className="form-select border-0 fs-5" aria-label="Default select example">
                                                                            <option value="Active" >Active</option>
                                                                            <option value="InActive" >InActive</option>
                                                                        </select>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className=" col-md-6">
                                                                <div className="form-group">
                                                                    <label htmlFor="start" >Start Date:</label>
                                                                    <input id="start" name="start" type="date" min={dateFormat(Date.now(), "yyyy-mm-dd")} onChange={startdateChange} className="form-control fs-5" value={dateFormat(sDate.start_date, "yyyy-mm-dd")} />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <label htmlFor="end">End Date:</label>
                                                                    <input id="end" name="end" type="date" className="form-control fs-5" min={dateFormat(Date.now(), "yyyy-mm-dd")} onChange={enddateChange} value={dateFormat(eDate.end_date, "yyyy-mm-dd")} />
                                                                </div>
                                                            </div>
                                                            <small style={{ display: dateError ? "inline-block" : "none", color: "red" }}>{dateErrorMsg}</small>

                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <label>Rate/USD:</label>
                                                                    <div className="input-group mb-3">
                                                                        <input onWheel={event => { event.currentTarget.blur() }} type="number" className="form-control fs-5" value={pRate.rate} onChange={RateChange} />
                                                                        <span className="input-group-text" id="basic-addon2">{CoinName}</span>
                                                                    </div>
                                                                    <small style={{ display: rateError ? "inline-block" : "none", color: "red" }}>Please Enter the Rate</small>

                                                                </div>
                                                            </div>

                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <label>Minimum Purchase Rate:</label>
                                                                    <div className="input-group mb-3">
                                                                        <input onWheel={event => { event.currentTarget.blur() }} type="number" className="form-control fs-5" value={minPurchase.minimum_purchase} onChange={MinimumPurchase} />
                                                                        <span className="input-group-text" id="basic-addon2">{CoinName}</span>
                                                                    </div>
                                                                    <small style={{ display: minPurchaseError ? "inline-block" : "none", color: "red" }}>Please Enter Minimum Purchase Rate</small>
                                                                    <small style={{ display: minAmountError ? "inline-block" : "none", color: "red" }}>Rate Greater than or equal to 1</small>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <label>Total Supply:</label>
                                                                    <div className="input-group mb-3">
                                                                        <input onWheel={event => { event.currentTarget.blur() }} type="number" className="form-control fs-5" value={pTotalCoin.totalcoin} onChange={TotalCoinChange} />
                                                                        <span className="input-group-text" id="basic-addon2">{CoinName}</span>
                                                                    </div>
                                                                    <small style={{ display: totalError ? "inline-block" : "none", color: "red" }}>Please Enter Total Coin</small>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </from>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <button className="btn btn-primary" onClick={() => updatePackage()}>Update</button>
                                                    <button className="btn btn-bg" onClick={() => hideModal2()}>Close</button>
                                                </Modal.Footer>
                                            </Modal>

                                            {/* ----------Add Packages Model----------- */}
                                            <Modal
                                                show={isOpen3}
                                                onHide={hideModal3}
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
                                                                <label>Title:</label>
                                                                <input type="text" className="form-control fs-5" value={pTitle.package_name} onChange={TitleChange} placeholder="Package Name" />
                                                                <small style={{ display: showError ? "inline-block" : "none", color: "red" }}>Please Enter Package Name</small>
                                                            </div>
                                                        </div>
                                                        {/* <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Status:</label>
                                                    <label className="form-control p-0 fs-5">
                                                        <select className="form-select border-0 fs-5" onChange={e => { setAddStatus(e.target.value) }} aria-label="Default select example">
                                                            <option value="1" selected>Active</option>
                                                            <option value="2">InActive</option>
                                                        </select>
                                                    </label>
                                                </div>
                                            </div> */}
                                                        <div className=" col-md-6">
                                                            <div className="form-group">
                                                                <label>Start Date:</label>
                                                                <input type="date" className="form-control fs-5" min={dateFormat(Date.now(), "yyyy-mm-dd")} onChange={startdateChange} value={dateFormat(sDate.start_date, "yyyy-mm-dd")} />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>End Date:</label>
                                                                <input type="date" className="form-control fs-5" min={dateFormat(Date.now(), "yyyy-mm-dd")} onChange={enddateChange} value={dateFormat(eDate.end_date, "yyyy-mm-dd")} />
                                                            </div>
                                                        </div>
                                                        <small style={{ display: dateError ? "inline-block" : "none", color: "red" }}>{dateErrorMsg}</small>

                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>Rate/USD:</label>
                                                                <div className="input-group mb-3">
                                                                    <input onWheel={event => { event.currentTarget.blur() }} type="number" className="form-control fs-5" value={pRate.rate} onChange={RateChange} placeholder="0" />
                                                                    <span className="input-group-text" id="basic-addon2">{CoinName}</span>
                                                                </div>
                                                                <small style={{ display: rateError ? "inline-block" : "none", color: "red" }}>Please Enter the Rate</small>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>Total Supply:</label>
                                                                <div className="input-group mb-3">
                                                                    <input onWheel={event => { event.currentTarget.blur() }} type="number" className="form-control fs-5" value={pTotalCoin.totalcoin} onChange={TotalCoinChange} placeholder="Total Coin" />
                                                                    <span className="input-group-text" id="basic-addon2">{CoinName}</span>
                                                                </div>
                                                                <small style={{ display: totalError ? "inline-block" : "none", color: "red" }}>Please Enter Total Coin</small>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>Minimum Purchase Rate:</label>
                                                                <div className="input-group mb-3">
                                                                    <input type="number" className="form-control fs-5" onWheel={event => { event.currentTarget.blur() }} value={minPurchase.minimum_purchase} min="1" onChange={MinimumPurchase} placeholder="Minimum Purchase Rate" />
                                                                    <span className="input-group-text" id="basic-addon2">USD</span>
                                                                </div>
                                                                <small style={{ display: minPurchaseError ? "inline-block" : "none", color: "red" }}>Please Enter Minimum Purchase Rate</small>
                                                                <small style={{ display: minAmountError ? "inline-block" : "none", color: "red" }}>Rate Greater than or equal to 1</small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <button className="btn btn-bg" onClick={() => AddPackage()}>Add Package</button>
                                                    <button className="btn btn-bg" onClick={() => hideModal3()}>Close</button>
                                                </Modal.Footer>
                                            </Modal>
                                            {/* ----------Delete Model----------- */}

                                            <Modal
                                                show={isOpen4}
                                                onHide={hideModal4}
                                                onEnter={startTimer}
                                                onEntered={modalLoaded}
                                                onExit={onExit}
                                                onExited={onExited}

                                            >
                                                <Modal.Header>
                                                    <Modal.Title>{title}</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    Are You Sure to Delete this Package?
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <button className="btn btn-danger" onClick={() => DeletePackage()}>Delete</button>
                                                    <button className="btn btn-bg" onClick={() => hideModal4()}>Cancel</button>
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
export default Packages