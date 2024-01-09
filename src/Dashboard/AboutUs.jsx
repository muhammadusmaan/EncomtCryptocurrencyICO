import { useState, useEffect } from 'react'
import { Api_Url } from '../utils/Base_url';
import axios from 'axios';
import LoaderSpinner from '../utils/LoaderSpinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom'
import UserNavbar from '../Dashboard/UserNavbar'
import UserLayout from './UserLayout';

const AboutUs = (props) => {

    let Navigate = useNavigate();

    const [aboutUs, setAboutUs] = useState('');
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
        async function getAbout() {
            setIsLoading(true);
            try {
                const aboutUsData = await axios.get(`${Api_Url}/setting/1`
                    , { headers: { "Authorization": `Bearer ${userToken.token}` } });
                setIsLoading(false);
                setAboutUs(aboutUsData.data.aboutus);
            }
            catch {
            }
        }
        getAbout();

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
                                <h1 className="card-title text-white textSize px-5 mt-3">About Us</h1>
                            </div>
                            <div className="px-5">
                                <hr className="hr-style" />
                            </div>
                            <div className="card-body px-5">
                                {isLoading ? <LoaderSpinner /> :
                                    <div className="row">
                                        <div className="card py-3 cardBg">
                                            <div className="row aboutus-mt">
                                                <p className="col p-aboutus">{aboutUs} </p>
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
export default AboutUs;