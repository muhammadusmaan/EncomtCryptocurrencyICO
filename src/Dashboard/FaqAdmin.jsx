import React, { useEffect, useState } from 'react';
import Modal from "react-bootstrap/Modal";
import AdminNavbar from '../Dashboard/AdminNavbar';
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPenToSquare, faTrashCan, faEye } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { Api_Url } from '../utils/Base_url';
import LoaderSpinner from '../utils/LoaderSpinner';
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



import AdminLayout from './AdminLayout';
import logo from '../images/logo.png';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

function FaqAdmin(props) {
    const [title, setTitle] = React.useState(0);
    const [isOpen, setIsOpen] = React.useState(false);
    const [isOpen2, setIsOpen2] = React.useState(false);
    const [isOpen3, setIsOpen3] = React.useState(false);
    const [isOpen4, setIsOpen4] = React.useState(false);
    const [timer, setTimer] = React.useState(0);
    const [startTime, setStartTime] = React.useState(0);
    const [endTime, setEndTime] = React.useState(0);

    const [isLoading, setIsLoading] = useState(false);
    const [faqsList, setFaqsList] = useState([]);
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    const [viewFaq, setViewFaq] = useState();
    const [delid, setDelID] = useState('');
    const [questionError, setQuestionError] = useState(false);
    const [answerError, setAnswerError] = useState(false);
    const [addQues, setAddQues] = useState('');
    const [addAns, setAddAns] = useState('');

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
        getFaqList();
    }, [props])

    useEffect(() => {

        $(document).ready(function () {
            $("#faq-table").DataTable({
                pagingType: 'full_numbers',
                pageLength: 5,
                processing: true,
                dom: 'Bfrtip',
                buttons: [
                    {
                        extend: 'csv',
                        exportOptions: {
                            columns: [0,1,2]
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

    const AddFaqs = async () => {

        if (addQues == '') {
            setQuestionError(true)
            return
        } else {
            setQuestionError(false)
        }
        if (addAns == '') {
            setAnswerError(true)
            return
        } else {
            setAnswerError(false)
        }


        try {

            const data = {
                question: addQues,
                answer: addAns,
            }

            await axios.post(`${Api_Url}/faq/add-faq`, data
                , { headers: { "Authorization": `Bearer ${userToken.token}` } })
                .then((res) => {
                    toast.success(res.data.message);
                    getFaqList();
                    setIsOpen(false);

                })
        }
        catch (err) {
            setIsOpen(false);
            toast.error(err?.response?.data?.error);
        }

    };

    const onUpdateFaq = async () => {

        if (viewFaq.question === '') {
            setQuestionError(true)
            return
        } else {
            setQuestionError(false)
        }
        if (viewFaq.answer === '') {
            setAnswerError(true)
            return
        } else {
            setAnswerError(false)
        }

        try {

            const data = {
                question: viewFaq.question,
                answer: viewFaq.answer
            }

            await axios.put(`${Api_Url}/faq/` + viewFaq._id, data
                , { headers: { "Authorization": `Bearer ${userToken.token}` } })

                .then((res) => {
                    setIsOpen2(false);
                    if (res.status === 200) {
                        toast.success('FAQ Update Successfully');
                        getFaqList();
                    }

                });
        }
        catch (err) {
            setIsOpen2(false);
            toast.error(err?.response?.data?.error);
        }
    }

    const deleteFaq = async () => {

        try {

            await axios.delete(`${Api_Url}/faq/` + delid
                , { headers: { "Authorization": `Bearer ${userToken.token}` } })

                .then((res) => {
                    setIsOpen3(false);
                    if (res.status === 200) {
                        toast.success(res.data.message);
                        getFaqList();
                    }

                });
        }
        catch (err) {
            setIsOpen3(false);
            toast.error(err?.response?.data?.error);
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
            let isActive = val;
            const data = { isActive }

            await axios.put(`${Api_Url}/faq/` + id, data,
                {
                    headers: {
                        "Authorization": `Bearer ${userToken.token}`
                    }
                })
                .then((res) => {
                    if (res.status === 200) {
                        toast.success("FAQ Updated Successfully");
                        getFaqList();
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

    async function getFaqList() {
        setIsLoading(true);
        try {
            const Faq = await axios.get(`${Api_Url}/faq/all-faqs`
                , { headers: { "Authorization": `Bearer ${userToken.token}` } });
            setIsLoading(false);
            setFaqsList(Faq.data.faqs)
        }
        catch (err) {
            setIsLoading(false);
        }
    }
    const truncateText = (str) => {
        return str.length > 10 ? str.substring(0, 150) + "..." : str;
    }
    const showModal = () => {
        setIsOpen(true);
        setTitle("Add FAQ");
        document.body.style.backgroundColor = "white";
    };
    const showModal2 = () => {
        setIsOpen2(true);
        setTitle("Edit FAQ");
        document.body.style.backgroundColor = "white";
    };
    const showModal3 = (id) => {


        setIsOpen3(true);
        setTitle("Delete FAQ");
        document.body.style.backgroundColor = "white";
        setDelID(id);
    };
    const showModal4 = () => {
        setIsOpen4(true);
        setTitle("View FAQ");
        document.body.style.backgroundColor = "white";
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
                                <h1 className="card-title text-white textSize px-5 mt-3">FAQs</h1>
                            </div>
                            <div className="px-5">
                                <hr className="hr-style" />
                            </div>
                            <div className="px-5 d-flex justify-content-end">
                                <button type="submit" className="btn btn-bg" onClick={showModal}>Add FAQs</button>
                            </div>
                            <div className="card-body px-lg-5 px-md-5">
                                {isLoading ? <LoaderSpinner /> :
                                    <div className="row">
                                        <div className="card  cardBg">
                                            <div className="table-responsive mt-3">
                                                <table id="faq-table" className="table text-white">
                                                    <thead>
                                                        <tr>
                                                            <th className="bg-th" scope="col">Sr.</th>
                                                            <th className="bg-th" scope="col">Question</th>
                                                            <th className="bg-th" scope="col">Answer</th>
                                                            <th className="bg-th" scope="col">Status</th>
                                                            <th className="bg-th" scope="col">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {faqsList.map((faqs, index) => {
                                                            return (
                                                                <tr Key={index}>
                                                                    <th scope="row">{index + 1}</th>
                                                                    <td>{faqs.question}</td>
                                                                    <td style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{truncateText(faqs.answer)}</td>
                                                                    <td><label className="switch">
                                                                        <input type="checkbox" checked={faqs?.isActive} value={faqs.isActive} onChange={e => { ChangeStatus(e, faqs, index) }} />
                                                                        <span className="slider round"></span>
                                                                    </label></td>
                                                                    <td>
                                                                        <div className="d-flex gap-2">
                                                                            <button type="submit" title="view" className="btn btn-bg" onClick={() => { setViewFaq(faqs); showModal4() }}><FontAwesomeIcon icon={faEye} /></button>
                                                                            <button type="submit" title="Edit" className="btn btn-primary" onClick={() => { setViewFaq(faqs); showModal2() }}><FontAwesomeIcon icon={faPenToSquare} /></button>
                                                                            <button type="submit" title="Delete" className="btn btn-danger" onClick={() => showModal3(faqs._id)}><FontAwesomeIcon icon={faTrashCan} /></button>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            )

                                                        }
                                                        )}

                                                    </tbody>
                                                </table>
                                            </div>
                                            {/* ----------View FAQ Model----------- */}
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
                                                    <div className="mb-3">
                                                        <label htmlFor="title" className="form-label">Question:</label>
                                                        <input type="text" className="form-control" value={viewFaq ? viewFaq.question : ''} placeholder="Question" readonly disabled />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Answer:</label>
                                                        <textarea value={viewFaq ? viewFaq.answer : ''} className="form-control" id="exampleFormControlTextarea1" rows="3" readonly disabled></textarea>
                                                    </div>

                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <button className="btn btn-bg" onClick={hideModal4}>Close</button>
                                                </Modal.Footer>
                                            </Modal>
                                            {/* ----------Add FAQ Model----------- */}
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
                                                    <div className="mb-3">
                                                        <label htmlFor="exampleFormControlInput1" className="form-label">Add Question:</label>
                                                        <input type="text" className="form-control" value={addQues} onChange={(e) => { setAddQues(e.target.value) }} placeholder="Question" autocomplete="off" />
                                                        <small style={{ display: questionError ? "inline-block" : "none", color: "red" }}>Please Write Question</small>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Add Answer:</label>
                                                        <textarea className="form-control" autocomplete="off" value={addAns} rows="3" onChange={(e) => { setAddAns(e.target.value) }} ></textarea>
                                                        <small style={{ display: answerError ? "inline-block" : "none", color: "red" }}>Please Write Answer</small>
                                                    </div>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <button className="btn btn-bg" onClick={() => { AddFaqs() }}>Add FAQ</button>
                                                    <button className="btn btn-bg" onClick={hideModal}>Close</button>
                                                </Modal.Footer>
                                            </Modal>
                                            {/* ----------Edit FAQ Model----------- */}
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
                                                    <div className="mb-3">
                                                        <label htmlFor="exampleFormControlInput1" className="form-label">Edit Question:</label>
                                                        <input type="text" className="form-control" placeholder="Question" value={viewFaq ? viewFaq.question : ''} onChange={(e) => { setViewFaq({ question: e.target.value, answer: viewFaq.answer, _id: viewFaq._id }) }} />
                                                        <small style={{ display: questionError ? "inline-block" : "none", color: "red" }}>Please Write Question</small>

                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Edit Answer:</label>
                                                        <textarea className="form-control" value={viewFaq ? viewFaq.answer : ''} onChange={(e) => { setViewFaq({ question: viewFaq.question, answer: e.target.value, _id: viewFaq._id }) }} rows="3"></textarea>
                                                        <small style={{ display: answerError ? "inline-block" : "none", color: "red" }}>Please Write Answer</small>
                                                    </div>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <button className="btn btn-bg" onClick={() => { onUpdateFaq() }}>Update FAQ</button>
                                                    <button className="btn btn-bg" onClick={() => { hideModal2() }}>Close</button>
                                                </Modal.Footer>
                                            </Modal>
                                            {/* ----------Delete FAQ Model----------- */}
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
                                                    Are You Sure to Delete this FAQ?
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <button className="btn btn-danger" onClick={() => deleteFaq()}>Delete</button>
                                                    <button className="btn btn-bg" onClick={hideModal3}>Close</button>
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
export default FaqAdmin;