import { useState, useEffect } from 'react'
import axios from 'axios';
import UserNavbar from '../Dashboard/UserNavbar'
import { Api_Url } from '../utils/Base_url';
import LoaderSpinner from '../utils/LoaderSpinner';
import Toast from '../utils/Toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom'

import UserLayout from './UserLayout';
import logo from '../images/logo.png';
import { faUser, faBell } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';


const FAQS = (props) => {

    let Navigate = useNavigate();

    const [faq, setFaq] = useState([]);
    const [show, setShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
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
        async function getFaq() {
            setIsLoading(true);
            try {
                await axios.get(`${Api_Url}/userfaq/all-faqs`
                    , { headers: { "Authorization": `Bearer ${userToken.token}` } })
                    .then((res) => {
                        if (res.status === 200) {
                            setIsLoading(false);
                            setFaq(res.data.faqs)

                        }

                    })


            }
            catch (err) {
                Toast.error(err)
            }
        }
        getFaq();

    }, [props]


    )

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
                                <h1 className="card-title text-white textSize px-5 mt-3">FAQs</h1>
                            </div>
                            <div className="px-5">
                                <hr className="hr-style" />
                            </div>
                            <div className="card-body px-5">
                                {isLoading ? <LoaderSpinner /> :
                                    <div className="row">
                                        <div className="card py-3 cardBg">
                                            <div className="accordion mb-4 cardBg" id="accordionExample">
                                                {faq.map((faqData, indx) => {
                                                    return (
                                                        <div className="accordion-item mt-2">
                                                            <h2 className="accordion-header" id="headingOne">
                                                                <button className="accordion-button btn-bg" type="button" data-bs-toggle="collapse" data-bs-target={"#index" + indx} aria-expanded="false" aria-controls={"#index" + indx} >
                                                                    {faqData.question}
                                                                </button>
                                                            </h2>
                                                            <div id={"index" + indx} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                                <div className="accordion-body text-black">
                                                                    {faqData.answer}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )


                                                })}

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

export default FAQS;