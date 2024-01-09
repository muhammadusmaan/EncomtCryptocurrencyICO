import React, { useRef, useState, useEffect } from 'react'
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import AdminNavbar from '../Dashboard/AdminNavbar'
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPenToSquare, faEye, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { Api_Url } from '../utils/Base_url';
import LoaderSpinner from '../utils/LoaderSpinner';
import $ from 'jquery';
import 'jquery/dist/jquery.min.js'
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import "datatables.net-buttons/js/dataTables.buttons.js"
import "datatables.net-buttons/js/buttons.colVis.js"
import "datatables.net-buttons/js/buttons.flash.js"
import "datatables.net-buttons/js/buttons.html5.js"
import "datatables.net-buttons/js/buttons.print.js"

import JoditEditor from "jodit-react";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import AdminLayout from './AdminLayout';
import logo from '../images/logo.png';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

function Blogs(props) {
    const [title, setTitle] = React.useState(0);
    const [isOpen, setIsOpen] = React.useState(false);
    const [isOpen2, setIsOpen2] = React.useState(false);
    const [isOpen3, setIsOpen3] = React.useState(false);
    const [isOpen4, setIsOpen4] = React.useState(false);
    const [timer, setTimer] = React.useState(0);
    const [startTime, setStartTime] = React.useState(0);
    const [endTime, setEndTime] = React.useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [blogList, setBlogList] = useState([]);
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    const [viewBlog, setViewBlog] = useState()
    const [delBlog, setDelBlog] = useState();
    const [profileImage, setProfileImage] = useState({});
    const [updateTitle, setUpdateTitle] = useState("");
    const [updateContent, setUpdateContent] = useState("");
    const [updateId, setUpdateId] = useState("");

    const [addNewProfileImage, setAddNewProfileImage] = useState({});
    const [addTitle, setAddTitle] = useState("");
    const [addContent, setAddContent] = useState("");
    const [showError, setShowError] = useState(false);

    const inputRef = useRef();
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
        getBlogsList();
    }, [props])

    useEffect(() => {

        $(document).ready(function () {
            $("#blog-table").DataTable({
                pagingType: 'full_numbers',
                pageLength: 5,
                processing: true,
                dom: 'Bfrtip',
                buttons: [
                    {
                        extend: 'csv',
                        exportOptions: {
                            columns: [0,1,2,3]
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
    async function getBlogsList() {
        setIsLoading(true);
        try {
            const Blog = await axios.get(`${Api_Url}/blog/all-blogs`
                , { headers: { "Authorization": `Bearer ${userToken.token}` } });
            setIsLoading(false);
            setBlogList(Blog.data.blogs)
            setShowError(false)
        }
        catch (err) {
            setIsLoading(false);
        }
    }
    async function onFormSubmit(e) {
        e.preventDefault()
        try {
            setIsLoading(true);
            console.log(addContent);

            const formData = new FormData();
            formData.append('title', addTitle)
            formData.append('content', addContent)
            formData.append('picture', addNewProfileImage.imageAsFile)

            await axios.post(`${Api_Url}/blog/add-blog`, formData,
                {
                    headers: {
                        "Authorization": `Bearer ${userToken.token}`,
                        'content-type': 'multipart/form-data'
                    }
                })
                .then((res) => {
                    setIsLoading(false);
                    if (res.status === 200) {
                        toast.success("Blog Added Successfully");
                        hideModal();
                        getBlogsList();
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
    async function onUpdateForm(e) {
        e.preventDefault()
        setIsLoading(true);
        try {
            const formData = new FormData();
            formData.append('title', updateTitle)
            formData.append('content', updateContent)
            if (addNewProfileImage.imageAsFile != "") {
                formData.append('picture', profileImage.imageAsFile)
            }

            await axios.put(`${Api_Url}/blog/${updateId}`, formData,
                {
                    headers: {
                        "Authorization": `Bearer ${userToken.token}`,
                        'content-type': 'multipart/form-data'
                    }
                })
                .then((res) => {
                    setIsLoading(false);
                    if (res.status === 200) {
                        toast.success("Blog Updated Successfully");
                        hideModal2();
                        getBlogsList();
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

            await axios.put(`${Api_Url}/blog/` + id, data,
                {
                    headers: {
                        "Authorization": `Bearer ${userToken.token}`
                    }
                })
                .then((res) => {
                    if (res.status === 200) {
                        toast.success("Blog Updated Successfully");
                        getBlogsList();
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


    const deleteBlog = async () => {

        try {

            await axios.delete(`${Api_Url}/blog/` + delBlog
                , { headers: { "Authorization": `Bearer ${userToken.token}` } })

                .then((res) => {
                    setIsOpen3(false);
                    if (res.status === 200) {
                        toast.success(res.data.message);
                        getBlogsList();
                    }

                });
        }
        catch (err) {
            setIsOpen3(false);
            toast.error(err?.response?.data?.error);
        }

    }

    const truncateText = (str) => {
        return str.length > 10 ? str.substring(0, 150) + "..." : str;
    }

    const onImageChange = (e) => {
        const fsize = e.target.files[0].size;
        const file = Math.round((fsize / 1024));
        // The size of the file.
        if (file >= 2048) {
            setShowError(true)
            //    setErrorMsg("Your file size should be less than 2 MB")
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

    const onNewImageChange = (e) => {
        const fsize = e.target.files[0].size;
        const file = Math.round((fsize / 1024));
        // The size of the file.
        if (file >= 2048) {
            setShowError(true)
            //    setErrorMsg("Your file size should be less than 2 MB")
            setAddNewProfileImage({
                imagePreview: "",
                /* this contains the file we want to send */
                imageAsFile: "",
            });
            inputRef.current.value = ""
        }
        else {
            setAddNewProfileImage({
                imagePreview: URL.createObjectURL(e.target.files[0]),
                /* this contains the file we want to send */
                imageAsFile: e.target.files[0],
            });
            setShowError(false)
        }
    };


    const showModal = () => {
        setIsOpen(true);
        setTitle("Add Blog");
        setAddNewProfileImage({});
        document.body.style.backgroundColor = "white";
    };
    const showModal2 = () => {
        setIsOpen2(true);
        setTitle("Edit Blog");
        document.body.style.backgroundColor = "white";
    };
    const showModal3 = (id) => {
        setDelBlog(id);
        setIsOpen3(true);
        setTitle("Delete Blog");
        document.body.style.backgroundColor = "white";
    };
    const showModal4 = () => {
        setIsOpen4(true);
        setTitle("View Blog");
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
                                <h1 className="card-title text-white textSize px-5 mt-3">Blogs</h1>
                            </div>
                            <div className="px-5">
                                <hr className="hr-style" />
                            </div>
                            <div className="px-5 d-flex justify-content-end">
                                <button type="submit" className="btn btn-bg" onClick={showModal}>Add Blogs</button>
                            </div>
                            <div className="card-body px-md-5 px-lg-5">
                                {isLoading ? <LoaderSpinner /> :
                                    <div className="row">
                                        <div className="card cardBg">
                                            <div className="table-responsive mt-3">
                                                <table id="blog-table" className="table text-white">
                                                    <thead>
                                                        <tr>
                                                            <th className="bg-th" scope="col">Sr.</th>
                                                            <th className="bg-th" scope="col">Title</th>
                                                            <th className="bg-th" scope="col">Content</th>
                                                            <th className="bg-th" scope="col">Images</th>
                                                            <th className="bg-th" scope="col">Status</th>
                                                            <th className="bg-th" scope="col">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {blogList.map((oneblogs, index) => {
                                                            return (

                                                                <tr key={index}>
                                                                    <th scope="row">{index + 1}</th>
                                                                    <td>{oneblogs.title}</td>
                                                                    <td style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}><div dangerouslySetInnerHTML={{__html: truncateText(oneblogs.content)}} /></td>
                                                                    <td style={{ width: '15%' }}><img className="img-fluid listing-imgs" src={oneblogs.image} /></td>
                                                                    <td><label className="switch">
                                                                        <input type="checkbox" checked={oneblogs?.isActive} value={oneblogs.isActive} onChange={e => { ChangeStatus(e, oneblogs, index) }} />
                                                                        <span className="slider round"></span>
                                                                    </label></td>
                                                                    <td>
                                                                        <div className="d-flex gap-2">
                                                                            <button type="submit" title="view" className="btn btn-bg" onClick={() => { setViewBlog(oneblogs); showModal4() }}><FontAwesomeIcon icon={faEye} /></button>
                                                                            <button type="submit" title="Edit" className="btn btn-primary" onClick={() => { showModal2(); setUpdateId(oneblogs._id); setUpdateTitle(oneblogs.title); setUpdateContent(oneblogs.content); }}><FontAwesomeIcon icon={faPenToSquare} /></button>
                                                                            <button type="submit" title="Delete" className="btn btn-danger" onClick={() => { showModal3(oneblogs._id) }}><FontAwesomeIcon icon={faTrashCan} /></button>
                                                                        </div>
                                                                    </td>
                                                                </tr>


                                                            )


                                                        }
                                                        )}


                                                    </tbody>
                                                </table>
                                            </div>
                                            {/* ----------View blog Model----------- */}
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
                                                    <div className="d-flex justify-content-center">
                                                        <p className="float-right">
                                                            <img src={viewBlog ? viewBlog.image : ''} className="profile-image img-fluid" alt="" width="150px" />
                                                        </p>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="title" className="form-label">Title:</label>
                                                        <input type="text" className="form-control text-dark" value={viewBlog ? viewBlog.title : ''} placeholder="Title..." readonly disabled />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Content:</label>
                                                        <JoditEditor
                                                            config={{
                                                                readonly: true,
                                                                height: 350
                                                                ,
                                                                uploader: {
                                                                    insertImageAsBase64URI: true
                                                                }
                                                            }}
                                                            value={viewBlog ? viewBlog.content : ''}
                                                        />
                                                        {/* <textarea className="form-control text-dark" id="exampleFormControlTextarea1" rows="6" value={viewBlog ? viewBlog.content : ''} readonly disabled></textarea> */}
                                                    </div>

                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <button className="btn btn-bg" onClick={hideModal4}>Close</button>
                                                </Modal.Footer>
                                            </Modal>
                                            {/* ----------Add blog Model----------- */}
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
                                                    <div className="d-flex justify-content-end">
                                                        <p className="float-right">
                                                            <img src={addNewProfileImage.imagePreview} className="profile-image img-fluid" alt="" id="output" width="150px" />
                                                        </p>
                                                    </div>
                                                    <div className="mb-0">
                                                        <label htmlFor="file" className="form-label">Upload image:</label>
                                                        <input type="file" ref={inputRef} className="form-control" id="file" accept="image/*" onChange={onNewImageChange} />
                                                        <span style={showError ? { visibility: 'visible', color: "red" } : { visibility: 'hidden' }} >Your Image size should be less than 2 MB</span>

                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="title" className="form-label">Add Title:</label>
                                                        <input type="text" value={addTitle} onChange={(e) => { setAddTitle(e.target.value) }} className="form-control" id="title" placeholder="Title..." />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Add Content:</label>
                                                        <JoditEditor
                                                            config={{
                                                                height: 350
                                                                ,
                                                                uploader: {
                                                                    insertImageAsBase64URI: true
                                                                }
                                                            }}
                                                            value={addContent}
                                                            onBlur={(e) => setAddContent(e)}
                                                        />
                                                        {/* <textarea value={addContent} onChange={(e) => { setAddContent(e.target.value) }} className="form-control" id="exampleFormControlTextarea1" rows="6"></textarea> */}
                                                    </div>

                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <button className="btn btn-bg" onClick={onFormSubmit}>Add Blog</button>
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
                                                    <div className="d-flex justify-content-end">
                                                        <p className="float-right">
                                                            <img src={profileImage.imagePreview} className="profile-image img-fluid" alt="" id="output" width="150px" />
                                                        </p>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="file" className="form-label">Upload image:</label>
                                                        <input type="file" ref={inputRef} className="form-control" id="file" accept="image/*" onChange={onImageChange} />
                                                        <span style={showError ? { visibility: 'visible', color: "red" } : { visibility: 'hidden' }} >Your Image size should be less than 2 MB</span>

                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="exampleFormControlInput1" className="form-label">Add Title:</label>
                                                        <input type="text" value={updateTitle} onChange={(e) => { setUpdateTitle(e.target.value) }} className="form-control" id="exampleFormControlInput1" placeholder="Title..." />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Add Content:</label>
                                                        <JoditEditor
                                                            config={{
                                                                height: 350
                                                                ,
                                                                uploader: {
                                                                    insertImageAsBase64URI: true
                                                                }
                                                            }}
                                                            value={updateContent}
                                                            onBlur={(e) => setUpdateContent(e)}
                                                        />
                                                        {/* <textarea value={updateContent} onChange={(e) => { setUpdateContent(e.target.value) }} className="form-control" id="exampleFormControlTextarea1" rows="6"></textarea> */}
                                                    </div>

                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <button className="btn btn-bg" onClick={onUpdateForm}>Update Blog</button>
                                                    <button className="btn btn-bg" onClick={hideModal2}>Close</button>
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
                                                    Are You Sure to Delete this Blog?
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <button className="btn btn-danger" onClick={() => deleteBlog()}>Delete</button>
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
export default Blogs;