import { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import TreeMenu from 'react-simple-tree-menu';
import axios from 'axios';
import { Api_Url } from '../utils/Base_url';
import Toast from '../utils/Toast';
import UserNavbar from '../Dashboard/UserNavbar'
import LoaderSpinner from '../utils/LoaderSpinner';
import dateFormat from 'dateformat';
import { useNavigate } from 'react-router-dom'

import UserLayout from './UserLayout';
import logo from '../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBell } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const KYC = (props) => {

    const [img, setImg] = useState();
    const [TabName, setTabName] = useState("NIC");
    const [isPending, setIsPending] = useState();
    const [isApproved, setIsApproved] = useState();
    const [isNIC, setIsNIC] = useState(true);
    const [isPassport, setIsPassport] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [isDrivingLicense, setIsDrivingLicense] = useState();

    const [doc_type, setDoc_Type] = useState("NIC");

    const [front, setFront] = useState('');
    const [frontPreview, setFrontPreview] = useState('');
    const [back, setBack] = useState('');
    const [backPreview, setBackPreview] = useState('');
    const [doc_number, setDoc_Number] = useState('');
    const [expiryDate, setExpiryDate] = useState('');

    const [showError, setShowError] = useState(false);
    const [showBackError, setShowBackError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [backErrorMsg, setBackErrorMsg] = useState("");

    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);

    const inputRef = useRef(null);
    const inputBackRef = useRef(null);
    const DocNumberRef = useRef();
    const ExpiryDateRef = useRef();

    const [isSidebar, setIsSidebar] = useState()


    useEffect(() => {
        getKYCStatus()
        setFrontPreview('');
        setBackPreview('');
        // if (window.innerWidth <= 760) {
        //     setIsSidebar(true)
        // }
    }, [props])


    async function getKYCStatus() {
        setIsLoading(true);
        try {
            const Status = await axios.get(`${Api_Url}/kyc/${userToken.user._id}`
                , { headers: { "Authorization": `Bearer ${userToken.token}` } });
            setIsLoading(false);

            setIsPending(false);
            setIsApproved(false);

            if (Status.data.length > 0) {

                if (Status.data[0].status === 'pending') {
                    setIsPending(true);
                }
                if (Status.data[0].status === 'approved') {
                    setIsApproved(true);
                }
            }

        }
        catch {
            setIsLoading(false);
        }
    }

    const onSelectDocument = (e) => {
        if (e.target.value === "NIC" || e.target.value === "DrivingLicense") {
            if (e.target.value === "NIC") {
                setDoc_Type(e.target.value)
                setFrontPreview("")
                setBackPreview("")
            }
            else if (e.target.value === "DrivingLicense") {
                setDoc_Type(e.target.value)
                setFrontPreview("")
                setBackPreview("")
            }

            setIsNIC(true);
            setIsPassport(false);
            setIsDrivingLicense(true);

            setFront("")
            setBack("")
            setDoc_Number("")
            setExpiryDate("")

            DocNumberRef.current.value = "";
            ExpiryDateRef.current.value = "";

            setShowError(false)
            setShowBackError(false)
            inputRef.current.value = ""
            inputBackRef.current.value = ""
            setFrontPreview("")
            setBackPreview("")
        }

        else if (e.target.value === "Passport") {
            setDoc_Type(e.target.value)
            setIsNIC(false);
            setIsPassport(true);
            setIsDrivingLicense(false);

            setFront("")
            setBack("")
            setDoc_Number("")
            setExpiryDate("")

            DocNumberRef.current.value = "";
            ExpiryDateRef.current.value = "";


            setShowError(false)
            setShowBackError(false)
            inputRef.current.value = ""
            inputBackRef.current.value = ""

            setFrontPreview("")
        }
    }

    async function AddKYC(e) {

        e.preventDefault()
        try {
            if (doc_type === "") {
                toast.error("Please select document type");
                return;
            }
            if (doc_number === "") {
                toast.error("Please insert Document Number");
                return;
            }
            if (expiryDate === "") {
                toast.error("Please insert Expiry Date");
                return;
            }
            if (front === "") {
                toast.error("Please select Front Image");
                return;
            }

            if (isNIC || isDrivingLicense) {
                if (back === "") {
                    toast.error("Please select Back Image");
                    return;
                }
            }

            if (isPassport) {
                setBack("");
            }

            const formData = new FormData();

            const data = {
                doc_type: doc_type,
                front: front,
                back: back,
                doc_number: doc_number,
                expiryDate: expiryDate
            }
            formData.append('doc_type', doc_type)
            formData.append('front', front)
            formData.append('back', back)
            formData.append('doc_number', doc_number)
            formData.append('expiryDate', expiryDate)

            setIsLoading(true);

            await axios.post(`${Api_Url}/addKYC`, data,
                {
                    headers: {
                        "Authorization": `Bearer ${userToken.token}`,
                        'content-type': 'multipart/form-data'
                    }
                })
                .then((res) => {
                    if (res.status === 200) {
                        setIsLoading(false);
                        toast.success(res.data.message);
                        getKYCStatus();
                    }
                });
        }
        catch (err) {
            toast.error(err?.response?.data?.error);
            setIsLoading(false);

        }
    }

    const onFrontImageChange = (e) => {
        const fsize = e.target.files[0].size;

        let ext = e.target.files[0].name.split('.').pop();

        if (ext === 'jpg' || ext === 'png') {

            const file = Math.round((fsize / 1024));
            // The size of the file.
            if (file >= 2048) {
                setShowError(true)
                setErrorMsg("Your file size should be less than 2 MB")
                setFront("");
                setFrontPreview("")
                inputRef.current.value = ""
            }
            else {
                setFront(e.target.files[0]);
                setFrontPreview(URL.createObjectURL(e.target.files[0]))
                setShowError(false)
            }
        } else {
            setFront('');
            inputRef.current.value = ""
            toast.error("Please select an image file");
            return;
        }
    };

    const onBackImageChange = (e) => {

        let ext = e.target.files[0].name.split('.').pop();

        if (ext === 'jpg' || ext === 'png') {
            const fsize = e.target.files[0].size;
            const file = Math.round((fsize / 1024));

            // The size of the file.
            if (file >= 2048) {
                setShowBackError(true)
                setBackErrorMsg("Your file size should be less than 2 MB")
                setBack("");
                setBackPreview("")
                inputBackRef.current.value = ""
            }
            else {
                setBack(e.target.files[0]);
                setBackPreview(URL.createObjectURL(e.target.files[0]))
                setShowBackError(false)
            }
        } else {
            setBack('');
            inputBackRef.current.value = ""
            toast.error("Please select an image file");
            return;
        }

    };

    const handleClick = () => {
        return setIsSidebar(!isSidebar)
    };


    return (
        <>
            {/* Dashboard Navbar */}

            <UserNavbar handleClick={handleClick} />


            <div className="container-fluid max-width-dashboard" >
                <div className="row" onClick={() => {
                    if (window.innerWidth <= 760) {
                        setIsSidebar(true);
                    }
                }}>
                    {/* Sidebar */}
                    <div className="col-lg-2 col-md-3 col-sm-3 col-xs-3 container fontWeight">
                        <div className="sidebar-block"
                            style={{ left: isSidebar ? '-260px' : '0' }}>
                            <UserLayout />
                        </div>
                    </div>

                    <div
                        className={isSidebar ? "col-lg-12 col-md-12 col-sm-12 col-xs-12 py-3 container dashboardBodyBgColor " :
                            " col-lg-10 col-md-9 col-sm-9 col-xs-9 py-3 container dashboardBodyBgColor"} >

                        {isLoading ? <LoaderSpinner /> :
                            <div className="card py-3 cardBg cardShadowColor">
                                <div>
                                    <h1 className="card-title text-white textSize px-5 mt-3">KYC</h1>
                                </div>
                                <div className="px-5">
                                    <hr className="hr-style" />
                                </div>
                                {isPending ?
                                    <div className=" offset-lg-3 col-6 d-flex justify-content-center fw-bold fs-2 py-5 px-5 card-bg my-5 cardShadowColor">Your KYC status is pending...</div> :
                                    isApproved ?
                                        <div className=" offset-lg-3 col-6 d-flex justify-content-center fw-bold fs-2 py-5 px-5 card-bg my-5 cardShadowColor">Your KYC Status is Approved!</div> :
                                        <div className="card-body px-5 px-sm-3">
                                            <div className="row">
                                                <div className="card py-3 cardBg px-lg-5 px-md-5" >

                                                    <form >
                                                        <div className="col-lg-12 mb-3 justify-content-center">
                                                            <label htmlFor="selectkyc" className="col-sm-2 col-form-label">Select Document Type</label>
                                                            <div className="col-sm-10 col-lg-11 col-md-11">
                                                                <select onChange={(e) => { onSelectDocument(e) }} className="form-select" id="selectkyc" aria-label="selectkyc">
                                                                    <option value="NIC" className="fs-5  select-cus">NIC</option>
                                                                    <option value="Passport" className="fs-5  select-cus">Passport</option>
                                                                    <option value="DrivingLicense" className="fs-5  select-cus">Driving License</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 col-md-12 d-flex col-sm-12 kyc-doc">
                                                            <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                                                <label htmlFor="document" className="col-sm-2 col-form-label">Document Number</label>
                                                                <div className="col-sm-10">
                                                                    <input onWheel={event => { event.currentTarget.blur() }} ref={DocNumberRef} type="number" Name="document" onChange={(e) => { setDoc_Number(e.target.value) }} className="form-control" id="document" placeholder="Document Number" />
                                                                </div>
                                                            </div>
                                                            <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                                                <label htmlFor="expiry" className="col-sm-2 col-form-label">Expiry Date</label>
                                                                <div className="col-sm-10">
                                                                    <input min={dateFormat(Date.now(), "yyyy-mm-dd")} ref={ExpiryDateRef} type="date" onChange={(e) => { setExpiryDate(e.target.value) }} className="form-control" id="expiry" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12 col-sm-6 d-flex kyc-img">
                                                            {isNIC || isDrivingLicense ?
                                                                <>
                                                                    <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                                                        <label htmlFor="front-img" className="col-sm-2 col-form-label">Front image</label>
                                                                        <div className="col-sm-10">
                                                                            <input ref={inputRef} accept="image/*" type="file" className="form-control" id="front-img" onChange={onFrontImageChange} />
                                                                            <span style={showError ? { display: 'block', color: "red", marginTop: "1%" } : { display: 'none' }} >{errorMsg}</span>
                                                                        </div>
                                                                    </div>
                                                                </>
                                                                :
                                                                <div>
                                                                </div>
                                                            }
                                                            {isNIC || isDrivingLicense ?
                                                                <>
                                                                    <div className="mb-3 col-lg-6 col-md-6 col-sm-6">
                                                                        <label htmlFor="back-img" className="col-sm-2 col-form-label">Back image</label>
                                                                        <div className="col-sm-10">
                                                                            <input ref={inputBackRef} accept="image/*" type="file" className="form-control" id="back-img" onChange={onBackImageChange} />
                                                                            <span style={showBackError ? { display: 'block', color: "red", marginTop: "1%" } : { display: 'none' }} >{backErrorMsg}</span>
                                                                        </div><br />
                                                                    </div>
                                                                </>
                                                                :
                                                                <div></div>
                                                            }
                                                        </div>
                                                        {isPassport ?
                                                            <>
                                                                <div className="mb-3 col-lg-12 col-md-12">
                                                                    <label htmlFor="passport-img" className="col-sm-2 col-form-label">Passport Image</label>
                                                                    <div className="col-sm-10 col-lg-11 col-md-11">
                                                                        <input ref={inputRef} accept="image/*" type="file" className="form-control" id="passport-img" onChange={onFrontImageChange} />
                                                                        <span style={showError ? { display: 'block', color: "red", marginTop: "1%" } : { display: 'none' }} >{errorMsg}</span>
                                                                    </div>
                                                                </div>


                                                            </>
                                                            :
                                                            <div></div>
                                                        }
                                                        <div className="col-md-12 col-sm-6 d-flex kyc-img">
                                                            <div className="mb-3 col-lg-6 col-md-6 col-sm-6 d-flex justify-content-center">
                                                                <img src={frontPreview ? frontPreview : ""} className="profile-image img-fluid" alt="" id="output" width="150px" />
                                                            </div>
                                                            <div className="mb-3 col-lg-6 col-md-6 col-sm-6 d-flex justify-content-center">
                                                                <img src={backPreview ? backPreview : ""} className="profile-image img-fluid" alt="" id="output" width="150px" />
                                                            </div>
                                                        </div>
                                                        <div className="d-flex justify-content-end">
                                                            <button onClick={AddKYC} className="btn btn-bg kyc-submit">Submit</button>
                                                        </div>

                                                    </form>

                                                </div>

                                            </div>

                                        </div>}

                            </div>}

                    </div>


                </div>
            </div>


        </>
    );
}
export default KYC;
