import React, { useState, useEffect } from 'react';
import {
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
} from 'recharts';
import CoinLogo from './CoinLogo.png';
import PurchaseLogo from './PurchaseLogo.png';
import UserLogo from '../images/user-icon.png';
import './sidebar.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Api_Url } from '../utils/Base_url';
import LoaderSpinner from '../utils/LoaderSpinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminNavbar from '../Dashboard/AdminNavbar';
import AdminLayout from './AdminLayout';

const AdminHome = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isSidebar, setIsSidebar] = useState(false);
  const [isClicked, setIsClicked] = useState('');
  const [TabName, setTabName] = useState('Home');
  const [isShow, setIsShow] = useState(false);
  const navigate = useNavigate();

  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString) || {};

  const [adminCoin, setAdminCoin] = useState('');
  const [adminPurchaseCoin, setAdminPurchaseCoin] = useState('');
  const [yourCoin, setYourCoin] = useState('');
  const [purchaseCoin, setPurchaseCoin] = useState('');
  const [bonusCoin, setBonusCoin] = useState('');
  const [notificationCounter, setNotificationCounter] = useState('');
  const [totalUser, setTotalUser] = useState('');
  const [renderComponent, setRenderComponent] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [homeTab, setHomeTab] = useState();
  const [graphData, setGraphData] = useState([]);
  const [userGraphData, setUserGraphData] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [userImage, setUserImage] = useState();
  const [isUrl, setIsUrl] = useState();

  const saveToken = (userToken) => {
    sessionStorage.setItem('Notification', JSON.stringify(userToken));
  };

  useEffect(() => {
    //setIsAdmin(userToken?.user?.isAdmin || false);
    //setIsUrl(window.location.pathname);
    //setHomeTab(TabName);
   // sidebarHighlight();
   // getAdminDashboardData();
    //getDashboardData();
   // getUserProfile();

    //if (typeof isAdmin !== 'undefined') {
     // if (isAdmin) {
     //   getAdminDashboardData();
     // } else {
      //  setUserImage(userToken?.user?.profileImage);
       // getDashboardData();
       // getUserProfile();
      //}
   // }

    if (window.innerWidth <= 760) {
      setIsSidebar(true);
    }
  }, [homeTab]);

  async function getUserProfile() {
    try {
      const profile = await axios.get(`${Api_Url}/user/${userToken.user._id}`, {
        headers: { Authorization: `Bearer ${userToken.token}` },
      });

      if (profile.data.isAccountVerified === false) {
        // Code of Logout
        toast.error('You are blocked by Admin!');
        logout(profile.data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function getDashboardData() {
    setIsLoading(true);
    try {
      const response = await axios.get(`${Api_Url}/user-dashboard`, {
        headers: { Authorization: `Bearer ${userToken.token}` },
      });

      setIsLoading(false);

      if (response.status === 200) {
        setBonusCoin(response.data.bonus[0].total);
        setPurchaseCoin(response.data.totalPurchase[0].total);
        setYourCoin(response.data.balance);
        setNotificationCounter(response.data.totalnotifications[0].total);
        saveToken(response.data.totalnotifications[0].total);
        setUserGraphData(response.data.graph);
        setHomeTab(TabName);
      } else {
        toast.error(response.error);
        setIsLoading(false);
      }
    } catch (error) {
      toast.error(error?.response?.data?.error);
      setIsLoading(false);
    }
  }

  async function getAdminDashboardData() {
    setIsLoading(true);
    try {
      const response = await axios.get(`${Api_Url}/admin-dashboard`, {
        headers: { Authorization: `Bearer ${userToken.token}` },
      });

      setIsLoading(false);

      if (response.status === 200) {
        setAdminPurchaseCoin(
          response.data.totalPurchase[0].total +
            response.data.totalPurchase[0].totalfee
        );
        setAdminCoin(response.data.balance);
        setTotalUser(response.data.totalUser[0].total);
        setGraphData(response.data.graph);
      } else {
        toast.error(response.error);
        setIsLoading(false);
      }
    } catch (error) {
      toast.error(error?.response?.data?.error);
      setIsLoading(false);
    }
  }

  const iconClicked = (isClicked, e) => {
    e.preventDefault();
    return setIsClicked(isClicked);
  };

  const logout = () => {
    navigate('/Login');
    sessionStorage.removeItem('token');
    navigate('/Login');
  };

  const sidebarHighlight = () => {
    const result = window.location.pathname;
    return result;
  };

  const handleClick = () => {
    return setIsSidebar(!isSidebar);
  };

  return (
    <>
      {/* Dashboard Navbar */}
      <AdminNavbar handleClick={handleClick} />

      <div className="container-fluid max-width-dashboard">
        <div
          className="row"
          onClick={() => {
            if (window.innerWidth <= 760) {
              setIsSidebar(true);
            }
          }}
        >
          {/* Sidebar */}
          <div
            className="col-lg-2 col-md-3 col-sm-3 col-xs-3 container fontWeight"
            style={{ left: isSidebar ? '-260px' : '0' }}
          >
            <div className="sidebar-block">
              <AdminLayout />
            </div>
          </div>

          <div
            style={
              TabName === 'Home'
                ? { display: 'block' }
                : { display: 'none' }
            }
            className={
              isSidebar
                ? 'col-lg-12 col-md-12 col-sm-12 col-xs-12 py-3 container dashboardBodyBgColor '
                : ' col-lg-10 col-md-9 col-sm-9 col-xs-9 py-3 container dashboardBodyBgColor'
            }
          >
            {isLoading ? (
              <LoaderSpinner />
            ) : (
              <>
                <div id='NIC' className='row mt-3'>
                  <div className='col-lg-4 col-md-12 col-sm-12 col-xs-12 mb-3'>
                    <div className='card cardBg cardShadowColor'>
                      <div className='card-body pt-4'>
                        <div className='row'>
                          <div className='col-lg-7 col-md-9 col-sm-9 col-xs-9'>
                            <h4 className='card-title text-white textSize'>
                              Your Coins
                            </h4>
                            <p className='card-text admin-coin-fs fw-bold text-white mb-0'>
                              {adminCoin}
                            </p>
                            <hr className='hr-style m-0' />
                          </div>
                          <div className='col-lg-5 col-md-3 col-sm-3 col-xs-3 mt-3'>
                            <img
                              width='100'
                              height='80'
                              src={CoinLogo}
                              alt=''
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=' col-lg-4 col-md-12 col-sm-12 col-xs-12 mb-3'>
                    <div className='card cardBg cardShadowColor'>
                      <div className='card-body pt-4'>
                        <div className='row'>
                          <div className='col-lg-7 col-md-9 col-sm-9 col-xs-9'>
                            <h4 className='card-title text-white text-Size'>
                              Total Purchase
                            </h4>
                            <p className='card-text admin-coin-fs fw-bold text-white mb-0'>
                              {adminPurchaseCoin}
                            </p>
                            <hr className='hr-style m-0' />
                          </div>
                          <div className='col-lg-5 col-md-3 col-sm-9 col-xs-3 mt-3'>
                            <img
                              width='100'
                              height='80'
                              className='purchase-logo'
                              src={PurchaseLogo}
                              alt=''
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-12 col-sm-12 col-xs-12 mb-3'>
                    <div className='card cardBg cardShadowColor'>
                      <div className='card-body pt-4'>
                        <div className='row'>
                          <div className='col-lg-7 col-md-9 col-sm-9 col-xs-9'>
                            <h4 className='card-title text-white textSize'>
                              Total Users
                            </h4>
                            <p className='card-text admin-coin-fs fw-bold text-white mb-0'>
                              {totalUser}
                            </p>
                            <hr className='hr-style m-0' />
                          </div>
                          <div className='col-lg-5 col-md-3 col-sm-3 col-xs-3 mt-3 user-logo-card'>
                            <img
                              width='75'
                              height='58'
                              className='purchase-logo'
                              src={UserLogo}
                              alt=''
                              style={{
                                marginTop: '10px',
                                marginBottom: '10px',
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row mt-3'>
                  <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-3'>
                    <div>
                      <div className='card py-3 cardBg cardShadowColor'>
                        <div>
                          <h4 className='card-title text-white textSize px-5 mt-3'>
                            Coin Selling Graph
                          </h4>
                        </div>
                        <div className='px-5'>
                          <hr className='hr-style' />
                        </div>
                        <div className='row px-5'>
                          <div className='col-lg-3 text-white'>
                            Total Sell{' '}
                            <div
                              style={{
                                height: '10px',
                                width: '10px',
                                backgroundColor: '#e83184',
                                borderRadius: '50%',
                                display: 'inline-block',
                              }}
                            ></div>
                          </div>
                        </div>
                        <div className='card-body'>
                          <div className='row'>
                            <ResponsiveContainer width='100%' height={300}>
                              <BarChart
                                className='barChart'
                                data={graphData}
                                margin={{
                                  top: 5,
                                  right: 30,
                                  left: 20,
                                  bottom: 5,
                                }}
                                label='heaf'
                              >
                                <ResponsiveContainer strokeDasharray='1 1' />
                                <XAxis
                                  dataKey='_id'
                                  tick={{ fontSize: 12 }}
                                />
                                <YAxis tick={{ fontSize: 12 }} />
                                <Tooltip
                                  cursor={false}
                                  contentStyle={{
                                    width: '100%',
                                    color: '#e83184',
                                    backgroundColor: '#020926',
                                  }}
                                />
                                <Legend />
                                <Bar
                                  label={10}
                                  barSize={10}
                                  dataKey='total'
                                  fill='#e83184'
                                />
                              </BarChart>
                            </ResponsiveContainer>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHome;
