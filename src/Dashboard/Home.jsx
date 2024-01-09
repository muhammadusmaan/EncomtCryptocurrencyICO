import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";

import $ from "jquery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
} from "recharts";

import CoinLogo from "./CoinLogo.png";
import PurchaseLogo from "./PurchaseLogo.png";
import BonusCoinLogo from "./BonusCoinLogo.png";
import UserLogo from "../images/user-icon.png";
import "./sidebar.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Api_Url } from "../utils/Base_url";
import Toast from "../utils/Toast";
import Blogs from "./Blogs";
import LoaderSpinner from "../utils/LoaderSpinner";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserNavbar from "./UserNavbar";
import AdminLayout from "./AdminLayout";
import UserLayout from "./UserLayout";

const Home = () => {


  const [isClicked, setIsClicked] = useState("");
  const [TabName, SetTabName] = useState("Home");
  const [isShow, SetIsShow] = useState(false);
  const Navigate = useNavigate();
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);

  const [isSidebar, setIsSidebar] = useState(false);
  
  const [yourCoin, setYourCoin] = useState("");
  const [purchaseCoin, setPurchaseCoin] = useState("");
  const [bonusCoin, setBonusCoin] = useState("");
  const [renderComponent, setRenderComponent] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [homeTab, setHomeTab] = useState();
  const [userGraphData, setUserGraphData] = useState([]);

  const saveToken = (userToken) => {
    sessionStorage.setItem("Notification", JSON.stringify(userToken));
  };

  useEffect(() => {
    getDashboardData();
  }, []);

  async function getDashboardData() {
    setIsLoading(true);
    try {
      await axios
        .get(`${Api_Url}/user-dashboard`, {
          headers: { Authorization: `Bearer ${userToken.token}` },
        })
        .then((res) => {
          setIsLoading(false);

          if (res.status === 200) {
            setBonusCoin(res.data.bonus[0].total);
            setPurchaseCoin(res.data.totalPurchase[0].total);
            setYourCoin(res.data.balance);
            saveToken(res.data.totalnotifications[0].total);
            setUserGraphData(res.data.graph);

            setHomeTab(TabName);
          } else {
            toast.error(res.error);
            setIsLoading(false);
          }
        });
    } catch (err) {
      toast.error(err?.response?.data?.error);
      setIsLoading(false);
    }
  }

  const iconClicked = (isClicked, e) => {
    e.preventDefault();
    return setIsClicked(isClicked);
  };

  const handleClick = () => {
    return setIsSidebar(!isSidebar)
  };

  return (
    <>

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
        style={TabName === "Home" ? { display: "block" } : { display: "none" }}
        className={
          isSidebar
            ? "col-lg-12 col-md-12 col-sm-12 col-xs-12 py-3 container dashboardBodyBgColor "
            : " col-lg-10 col-md-9 col-sm-9 col-xs-9 py-3 container dashboardBodyBgColor"
        }
          >
            

        {isLoading ? (
          <LoaderSpinner />
        ) : (
          <>
            <div id="NIC" className="row mt-3">
              <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 mb-3">
                <div className="card cardBg cardShadowColor">
                  <div className="card-body pt-4">
                    <div className="row">
                      <div className="col-lg-7 col-md-9 col-sm-9 col-xs-9">
                        <h4 className="card-title text-white textSize">
                          Your Coins
                        </h4>
                        <p className="card-text admin-coin-fs fw-bold text-white mb-0">
                          {yourCoin}
                        </p>
                        <hr className="hr-style m-0" />
                      </div>
                      <div className="col-lg-5 col-md-3 col-sm-3 col-xs-3 mt-3">
                        <img width="100" height="80" src={CoinLogo} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" col-lg-4 col-md-12 col-sm-12 col-xs-12 mb-3">
                <div className="card cardBg cardShadowColor">
                  <div className="card-body pt-4">
                    <div className="row">
                      <div className="col-lg-7 col-md-9 col-sm-9 col-xs-9">
                        <h4 className="card-title text-white text-Size">
                          Total Purchase
                        </h4>
                        <p className="card-text admin-coin-fs fw-bold text-white mb-0">
                          {purchaseCoin}
                        </p>
                        <hr className="hr-style m-0" />
                      </div>
                      <div className="col-lg-5 col-md-3 col-sm-9 col-xs-3 mt-3">
                        <img
                          width="100"
                          height="80"
                          className="purchase-logo"
                          src={PurchaseLogo}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 mb-3">
                <div className="card cardBg cardShadowColor">
                  <div className="card-body pt-4">
                    <div className="row">
                      <div className="col-lg-7 col-md-9 col-sm-9 col-xs-9">
                        <h4 className="card-title text-white textSize">
                          Bonus Coin
                        </h4>
                        <p className="card-text admin-coin-fs fw-bold text-white mb-0">
                          {bonusCoin}
                        </p>
                        <hr className="hr-style m-0" />
                      </div>
                      <div className="col-lg-5 col-md-3 col-sm-3 col-xs-3 mt-3">
                        <img
                          width="100"
                          height="80"
                          src={BonusCoinLogo}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Barchart section */}
            <div className="row mt-3">
              <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 mb-3">
                <div>
                  <div className="card py-3 cardBg cardShadowColor">
                    <div>
                      <h4 className="card-title text-white textSize px-5 mt-3">
                        Coin Selling Graph
                      </h4>
                    </div>
                    <div className="px-5">
                      <hr className="hr-style" />
                    </div>
                    <div className="row px-5">
                      <div className="col-lg-3 text-white">
                        <h4> Total Sell</h4>{" "}
                        <div
                          style={{
                            height: "10px",
                            width: "10px",
                            backgroundColor: "#e83184",
                            borderRadius: "50%",
                            display: "inline-block",
                          }}
                        ></div>
                      </div>
                    </div>

                    {/* Barchart */}
                    <div className="card-body">
                      <div className="row">
                        <ResponsiveContainer width="100%" height={300}>
                          <BarChart
                            className="barChart"
                            data={userGraphData}
                            margin={{
                              top: 5,
                              right: 30,
                              left: 20,
                              bottom: 5,
                            }}
                            label="heaf"
                          >
                            <ResponsiveContainer strokeDasharray="3 3" />
                            <XAxis dataKey="_id" tick={{ fontSize: 12 }} />
                            <YAxis tick={{ fontSize: 12 }} />
                            <Tooltip
                              cursor={false}
                              contentStyle={{
                                width: "100%",
                                color: "#e83184",
                                backgroundColor: "#020926",
                              }}
                            />
                            <Legend />
                            <Bar barSize={10} dataKey="total" fill="#e83184" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Buy and Sell buttons                           */}
              <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                <div className="card px-1 py-3 cardBg cardShadowColor">
                  <div className="card-body">
                    <div className="row mb-3">
                      <div className="col-lg-6">
                        <h4 className="card-title text-white textSize">
                          Buy Coins
                        </h4>
                      </div>
                      <div className="col-lg-6">
                        <button
                          onClick={() => {
                            iconClicked.bind(this, "buyCoin");
                            SetTabName("BuyCoin");
                            setRenderComponent(!renderComponent);
                            Navigate("/Dashboard/BuyCoin");
                                  
                          }}
                          className=" btn btn-md px-lg-5 pt-1 pb-0 btnBg"
                        >
                          Buy
                        </button>
                      </div>
                    </div>
                    <div className="row mx-1">
                      <hr className="hr-style" />
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

export default Home;
