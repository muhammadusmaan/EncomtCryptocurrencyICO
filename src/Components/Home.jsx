import React, { Component } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import About from './About';
import DaysCounter from './DaysCounter';
import Converter from './Converter';
import RobotAbout from './RobotAbout';
import AlRoadMap from './AlRoadMap';
import Blog from './Blog';
import Footer from './Footer';
import { useState, useEffect } from 'react'
import axios from 'axios';
import { Api_Url } from '../utils/Base_url';
import Toast from '../utils/Toast';


const Home = (props) => {

    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [aboutUs, setAboutUs] = useState("");
    const [blogs, setBlogs] = useState([]);
    const [converter, setConverter] = useState();
    const [roadMap, setRoadMap] = useState();
    const [footerData, setFooterData] = useState({});
    const [navbarData, setNavbarData] = useState();
    const [graphData, setGraphData] = useState([]);

    var date1 = new Date();
    var date2 = new Date(endDate);
    var date3 = new Date(startDate);
    var DaysPassed = date1.getTime() - date3.getTime()
    DaysPassed = DaysPassed / (1000 * 3600 * 24);
    var DifferenceInTime;
    var DifferenceInDays
    var dateTimeAfterRespectiveDays;


    if (date2 < date1) {
        DifferenceInTime = 0;
    }
    else {
        DifferenceInTime = date2.getTime() - date1.getTime();
    }
    // To calculate the no. of days between two dates
    DifferenceInDays = DifferenceInTime / (1000 * 3600 * 24);

    //Converting days into milliseconds
    const DaysInMs = DifferenceInDays * 24 * 60 * 60 * 1000;
    //Currrent time in milliseconds
    const NowInMs = new Date().getTime();

    dateTimeAfterRespectiveDays = NowInMs + DaysInMs;

    useEffect(() => {
        async function getLandingPageData() {
            // setIsLoading(true);
            try {
                await axios.get(`${Api_Url}/landing-page`)
                    .then((res) => {
                        // setIsLoading(false);

                        if (res.status === 200) {
                            setEndDate(res.data.package.end_date)
                            setStartDate(res.data.package.created)
                            setAboutUs(res.data.appdetail)
                            setBlogs(res.data.blog)
                            setConverter(res.data.package.rate)
                            setRoadMap(res.data.roadmap)
                            setFooterData({
                                facebook: res.data.facebook,
                                twitter: res.data.twitter,
                                linkedin: res.data.linkedin,
                                youtube: res.data.youtube,
                                instagram: res.data.instagram,
                                location: res.data.location,
                                telegram: res.data.telegram,
                                reddit: res.data.reddit,
                                medium: res.data.medium,
                                discord: res.data.discord
                            })
                            setNavbarData(res.data.location)
                            setGraphData(res.data.graph)
                        }
                        else {
                            Toast.error(res.error);
                        }
                    })

            }
            catch (err) {

                // setIsLoading(false);
                Toast.error(err?.response?.data?.error);
            }

        }

        getLandingPageData();
        // getGraphData();

    }, [props]
    )


    return (
        <>
            <Navbar navbarLinkData={navbarData} />
            <Header />
            <About about={aboutUs} />
            <DaysCounter GraphData={graphData} targetDate={dateTimeAfterRespectiveDays} startDate={startDate} endDate={endDate} diffInDays={Math.round(DaysPassed)} />
            <Converter converterRate={converter} />
            <RobotAbout />
            <AlRoadMap roadMapData={roadMap} />
            <Blog blogData={blogs} />
            <Footer footerLinksData={footerData} />
        </>
    );
}
export default Home;
