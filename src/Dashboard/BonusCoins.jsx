import React, { useEffect, useState } from 'react';
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import AdminNavbar from '../Dashboard/AdminNavbar'
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import { AppName, CoinName } from "../utils/Constant";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faEye } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { Api_Url } from '../utils/Base_url';
import LoaderSpinner from '../utils/LoaderSpinner';
import dateFormat from 'dateformat';
import Toast from '../utils/Toast'
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

import SelectSearch, { fuzzySearch } from 'react-select-search';

// import 'react-select/dist/react-select.css'
// import 'react-virtualized/styles.css'
// import 'react-virtualized-select/styles.css'

// Then import the virtualized Select HOC
import VirtualizedSelect from 'react-virtualized-select'

import AdminLayout from './AdminLayout';
import logo from '../images/logo.png';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

function BonusCoins(props) {
    const [title, setTitle] = React.useState(0);
    const [isOpen, setIsOpen] = React.useState(false);
    const [isOpen1, setIsOpen1] = React.useState(false);
    const [startTime, setStartTime] = React.useState(0);
    const [endTime, setEndTime] = React.useState(0);
    const [showError, setshowerror] = useState(false);
    const [numberCoinError, setNumberCoinError] = useState(false);
    const [reasonError, setReasonError] = useState(false);
    const [BonusCoinList, setBonusCoinList] = useState([]);
    const [viewModel, setViewModel] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    const [addModel, setAddModel] = useState({});
    const [selectEmail, setSelectEmail] = useState('');
    const [numberCoin, setnumberCoin] = useState('');
    const [reason, setReason] = useState('');

    const [optionsApi, setOptionsApi] = useState({});


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
        getBonusCoin();
    }, [props])

    useEffect(() => {
        $(document).ready(function () {
            $("#bonus-table").DataTable({
                pagingType: 'full_numbers',
                pageLength: 5,
                processing: true,
                dom: 'Bfrtip',
                buttons: [
                    {
                        extend: 'csv',
                        exportOptions: {
                            columns: [0,1,2,3,4,5,6,7,8]
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
    async function getBonusCoin() {
        setIsLoading(true);
        try {
            const BonusCoin = await axios.get(`${Api_Url}/allbonuscoin`
                , { headers: { "Authorization": `Bearer ${userToken.token}` } });
            setIsLoading(false);
            setBonusCoinList(BonusCoin.data.data)
        }
        catch (err) {
            setIsLoading(false);
        }
    }

    const showModal = async () => {
        setIsLoading(true);

        try {
            await axios.get(`${Api_Url}/getdataforaddbonuscoin`
                , { headers: { "Authorization": `Bearer ${userToken.token}` } })
                .then((res) => {
                    setIsLoading(false);

                    setOptionsApi(res.data.users.map(item => {
                        return {
                            name: item.email,
                            value: item._id
                        }
                    }));
                    setAddModel(res.data);
                    setIsOpen(true);
                    setTitle("Add Bonus Coin");
                    document.body.style.backgroundColor = "white";

                })
        }
        catch (err) {
            toast.error(err?.response?.data?.error);
            setIsLoading(false);

        }

    };

    const AddBonus = async () => {
        setIsLoading(true);

        if (selectEmail == '') {
            setshowerror(true);
            return
        } else {
            setshowerror(false);
        }
        if (numberCoin == '') {
            setNumberCoinError(true)
            return
        } else {
            setNumberCoinError(false)
        }
        if (reason == '') {
            setReasonError(true)
            return
        } else {
            setReasonError(false)
        }

        try {

            const data = {
                coin: numberCoin,
                reason: reason,
                status: 'Complete',
                userID: selectEmail,
                packageid: addModel.package._id
            }

            await axios.post(`${Api_Url}/addbonuscoin`, data
                , { headers: { "Authorization": `Bearer ${userToken.token}` } })
                .then((res) => {
                    setIsLoading(false);

                    setnumberCoin('');
                    setReason('');
                    setSelectEmail('');

                    toast.success(res.data.message);
                    setIsOpen(false);
                    getBonusCoin();

                })
        }
        catch (err) {
        setIsLoading(false);

            setIsOpen(false);
            toast.error(err?.response?.data?.error);
        }

    };
    const showModal1 = (list) => {
        setViewModel(list);
        setIsOpen1(true);
        setTitle("Bonus Coin Detail");
        document.body.style.backgroundColor = "white";
    };
    const hideModal = () => {
        setIsOpen(false);
    };
    const hideModal1 = () => {
        setIsOpen1(false);
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
                                <h1 className="card-title text-white textSize px-5 mt-3">Bonus Coins</h1>
                            </div>
                            <div className="px-5">
                                <hr className="hr-style" />
                            </div>
                            <div className="px-5 d-flex justify-content-end">
                                <button type="submit" className="btn btn-bg" onClick={() => showModal()}>Add Bonus Coins</button>
                            </div>
                            <div className="card-body px-lg-5 px-md-5">
                                {isLoading ? <LoaderSpinner /> :
                                    <div className="row">
                                        <div className="card cardBg">
                                            <div className="table-responsive mt-3">
                                                <table id="bonus-table" className="table text-white">
                                                    <thead>
                                                        <tr>
                                                            <th className="bg-th" scope="col">Sr.</th>
                                                            <th className="bg-th" scope="col">User Name</th>
                                                            <th className="bg-th" scope="col">User Email</th>
                                                            <th className="bg-th" scope="col">Bonus Coins</th>
                                                            <th className="bg-th" scope="col">Fee</th>

                                                            <th className="bg-th" scope="col">Package Name</th>
                                                            <th className="bg-th" scope="col">Rate/USD</th>
                                                            <th className="bg-th" scope="col">Reason</th>
                                                            <th className="bg-th" scope="col">Date</th>
                                                            <th className="bg-th" scope="col">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {BonusCoinList.map((coinList, index) => {
                                                            return (
                                                                <tr Key={index}>
                                                                    <th scope="row">{index + 1}</th>
                                                                    <td>{coinList.userID.firstname}</td>
                                                                    <td>{coinList.userID.email}</td>
                                                                    <td>{coinList.coin} {CoinName}</td>
                                                                    <td>${coinList.fee}</td>
                                                                    <td>{coinList.packageDetail.package_name}</td>
                                                                    <td>{coinList.packageDetail.rate} {CoinName}</td>
                                                                    <td>{coinList.reason}</td>
                                                                    <td>{dateFormat(coinList.date, "dd/mm/yyyy")}</td>
                                                                    <td>
                                                                        <div className="d-flex gap-2">
                                                                            <button type="submit" title="view" className="btn btn-bg" onClick={() => { showModal1(coinList); }}><FontAwesomeIcon icon={faEye} /></button>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            )


                                                        })
                                                        }

                                                    </tbody>
                                                </table>
                                            </div>

                                            {/* ---------------------Add Bonus Coin's Model---------------- */}
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
                                                        <div className="row mb-3">
                                                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Select User:</label>
                                                            <div className="col-sm-12 fs-5">
                                                                <SelectSearch
                                                                    options={optionsApi}
                                                                    value={selectEmail}
                                                                    onChange={setSelectEmail}
                                                                    search
                                                                    filterOptions={fuzzySearch}
                                                                    placeholder="Select User"
                                                                />                                           
                                                                  {/* <select id='AddBonus' onChange={(e) => setSelectEmail(e.target.value)} value={selectEmail} className="form-select form-control fs-5" aria-label="Default select example">
                                                                    <option className="cus-email" value=''>Select User</option>
                                                                    {addModel.users ? addModel.users.map((item, i) => {
                                                                        return (
                                                                            <option className="cus-email" key={i} value={item._id}>{item.email}</option>
                                                                        )
                                                                    }) : ''}

                                                                </select> */}
                                                                <small style={{ display: showError ? "inline-block" : "none", color: "red" }}>Please Select User Email</small>

                                                            </div>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>Current Package:</label>
                                                                <input type="text" className="form-control fs-5" value={addModel.package ? addModel.package.package_name : ''} readonly disabled />
                                                            </div>
                                                        </div>


                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>Rate/USD:</label>
                                                                <div className="input-group mb-3">
                                                                    <input type="number" className="form-control fs-5" value={addModel.package ? addModel.package.rate : ''} readonly disabled />
                                                                    <span className="input-group-text" id="basic-addon2">{CoinName}</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>No Of Bonus Coins:</label>
                                                                <div className="input-group mb-3">
                                                                    <input onWheel={event => { event.currentTarget.blur() }} type="number" className="form-control fs-5" value={numberCoin} onChange={(e) => { setnumberCoin(e.target.value) }} />
                                                                    <span className="input-group-text" id="basic-addon2">{CoinName}</span>
                                                                </div>
                                                                <small style={{ display: numberCoinError ? "inline-block" : "none", color: "red" }}>Please Enter Bonus Coin</small>

                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>Reason:</label>
                                                                <input type="text" className="form-control fs-5" value={reason} onChange={(e) => { setReason(e.target.value) }} />
                                                                <small style={{ display: reasonError ? "inline-block" : "none", color: "red" }}>Please Enter Reason</small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <button className="btn btn-bg" onClick={() => AddBonus()}>Add Bonus Coin</button>
                                                    <button className="btn btn-bg" onClick={hideModal}>Close</button>
                                                </Modal.Footer>
                                            </Modal>

                                            {/* ----------View Model----------- */}
                                            <Modal
                                                show={isOpen1}
                                                onHide={hideModal1}
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
                                                                <label>User Name:</label>
                                                                <label className="form-control fs-5 fs-5">{viewModel.userID ? viewModel.userID.firstname : ''}</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>User Email</label>
                                                                <label className="form-control fs-5">{viewModel.userID ? viewModel.userID.email : ''}</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>Bonus Coins:</label>
                                                                <label className="form-control fs-5">{viewModel.coin} {CoinName}</label>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>Package Name:</label>
                                                                <label className="form-control fs-5">{viewModel.packageDetail ? viewModel.packageDetail.package_name : ''}</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>Rate/USD:</label>
                                                                <label className="form-control fs-5">{viewModel.packageDetail ? viewModel.packageDetail.rate : ''}</label>
                                                            </div>
                                                        </div>
                                                        <div className=" col-md-6">
                                                            <div className="form-group">
                                                                <label>Reason:</label>
                                                                <label className="form-control fs-5 fs-5">{viewModel.reason}</label>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <button className="btn btn-bg" onClick={hideModal1}>Close</button>
                                                </Modal.Footer>
                                            </Modal>
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
export default BonusCoins;