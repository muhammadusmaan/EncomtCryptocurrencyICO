import Sidebar from '../Dashboard/Sidebar';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import AdminNavbar from '../Dashboard/AdminNavbar'

const Dashboard = (props) => {

    const Navigate = useNavigate();
    const tokenString2 = sessionStorage.getItem('userData');
    const userData = JSON.parse(tokenString2);

    useEffect(() => {
      
       // Remove authentication-related code, and navigate to the desired route directly
Navigate("/Dashboard/AdminHome");

    }, [props])

    // return (
    //     <>
    //         <Sidebar />
    //     </>
    // );
}
export default Dashboard;