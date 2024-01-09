import React, { useState, useRef, useEffect } from 'react'

import './sidebar.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Api_Url } from '../utils/Base_url'
import Blogs from '../Dashboard/Blogs'
import LoaderSpinner from '../utils/LoaderSpinner'
import dateFormat from 'dateformat'
import { Link } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AdminNavbar from '../Dashboard/AdminNavbar'
import AdminLayout from './AdminLayout'
import UserLayout from './UserLayout'

import Home from './Home'
import AdminHome from './AdminHome'


const Sidebar = () => {

  const [isAdmin, setIsAdmin] = useState('');

  const [isSidebar, setIsSidebar] = useState()
  const [isClicked, setIsClicked] = useState('')
  const [TabName, SetTabName] = useState('Home')
  const [isShow, SetIsShow] = useState(false)
  const Navigate = useNavigate()
  const tokenString = sessionStorage.getItem('token')
  const userToken = JSON.parse(tokenString)

  const [adminCoin, setAdminCoin] = useState('')
  const [adminpurchaseCoin, setAdminPurchaseCoin] = useState('')

  const [yourCoin, setYourCoin] = useState('')
  const [purchaseCoin, setPurchaseCoin] = useState('')
  const [bonusCoin, setBonusCoin] = useState('')
  const [notificationCounter, setNotificationCounter] = useState('')
  const [totalUser, setTotalUser] = useState('')
  const [renderComponent, setRenderComponent] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [homeTab, setHomeTab] = useState()
  const [graphData, setGraphData] = useState([])
  const [userGraphData, setUserGraphData] = useState([])
  const [notifications, setNotifications] = useState([])
  const [userImage, setUserImage] = useState()
  const [isUrl, setIsUrl] = useState()

  const saveToken = (userToken) => {
    sessionStorage.setItem('Notification', JSON.stringify(userToken))
  }

  useEffect(() => {
    setIsAdmin(userToken.user.isAdmin);

    setIsUrl(window.location.pathname)
    setHomeTab(TabName)
    sidebarHighlight()
    if (typeof isAdmin != 'undefined') {
      if (isAdmin) {
        getAdminDashboardData()

      } else {
        setUserImage(userToken?.user?.profileImage)
        getDashboardData()
        getUserProfile()

      }
    }
    if (window.innerWidth <= 760) {
      setIsSidebar(true)
    }
  }, [homeTab])

  async function getUserProfile() {
    try {
      const Profile = await axios.get(`${Api_Url}/user/${userToken.user._id}`, {
        headers: { Authorization: `Bearer ${userToken.token}` },
      })

      if (Profile.data.isAccountVerified === false) {
        //Code of Logout
        toast.error('You are blocked by Admin!')
        Logout(Profile.data)
      }
    } catch { }
  }

  async function getDashboardData() {
    setIsLoading(true)
    try {
      await axios
        .get(`${Api_Url}/user-dashboard`, {
          headers: { Authorization: `Bearer ${userToken.token}` },
        })
        .then((res) => {
          setIsLoading(false)

          if (res.status === 200) {
            setBonusCoin(res.data.bonus[0].total)
            setPurchaseCoin(res.data.totalPurchase[0].total)
            setYourCoin(res.data.balance)
            setNotificationCounter(res.data.totalnotifications[0].total)
            saveToken(res.data.totalnotifications[0].total)
            setUserGraphData(res.data.graph)

            setHomeTab(TabName)
          } else {
            toast.error(res.error)
            setIsLoading(false)
          }
        })
    } catch (err) {
      toast.error(err?.response?.data?.error)
      setIsLoading(false)
    }
  }

  async function getAdminDashboardData() {
    setIsLoading(true)
    try {
      await axios
        .get(`${Api_Url}/admin-dashboard`, {
          headers: { Authorization: `Bearer ${userToken.token}` },
        })
        .then((res) => {
          setIsLoading(false)
          if (res.status === 200) {
            // setBonusCoin(res.data.bonus[0].total);
            setAdminPurchaseCoin(
              res.data.totalPurchase[0].total +
              res.data.totalPurchase[0].totalfee
            )
            setAdminCoin(res.data.balance)
            setTotalUser(res.data.totalUser[0].total)
            setGraphData(res.data.graph)
          } else {
            toast.error(res.error)
            setIsLoading(false)
          }
        })
    } catch (err) {
      toast.error(err?.response?.data?.error)
      setIsLoading(false)
    }
  }

  const openSidebar = (isSidebar) => {
    return setIsSidebar(!isSidebar)
  }
  const iconClicked = (isClicked, e) => {
    e.preventDefault()
    return setIsClicked(isClicked)
  }
  const Logout = (e, res) => {
    Navigate('/Login')
    sessionStorage.removeItem('token')
    Navigate('/Login')
  }

  const sidebarHighlight = () => {
    const result = window.location.pathname
    return result
  }
  return (
    <>

      {/* Dashboard Sidebar and Body */}
      <div className='container-fluid max-width-dashboard'>
        <div
          className='row'
          onClick={() => {
            if (window.innerWidth <= 760) {
              setIsSidebar(true)
            }
          }}
        >

          {/* Sidebar */}
          {isAdmin ? (
            <>
              <AdminHome />
              <AdminLayout />
            </>
          ) : (
            <>
              <Home />
              <UserLayout />
            </>
          )}

        </div>
      </div>
    </>
  )
}

export default Sidebar
