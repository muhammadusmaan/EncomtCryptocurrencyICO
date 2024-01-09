import React, { useState, Suspense, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Canvas } from "react-three-fiber";
import Scene1 from '../Components/Scene1';
import { OrbitControls } from "@react-three/drei";

import Lottie from "react-lottie";
import animation from '../images/lazyloader.json'


function Header() {

  const [isLoad, setIsLoad] = useState(true);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {

    // setTimeout(() => {
    //   setIsLoad(false)
    // }
    //   , 1000);

  }, []);


  return (
    <>
      <section className="header" id="header">
        <div className="container-fluid max-width-container">
          <div className="row">
            <div className="col-10 mx-auto py-4">
              <div className="row">

                <div className="col-lg-8 order-1 order-lg-2 globe">

                  {/* {isLoad ?
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: "60vw",
                      height: "90vh",
                      objectFit: "contain",
                      // backgroundColor: "transparent",
                      // marginLeft: "1rem",
                    }}>
                    
                      <Lottie options={defaultOptions} height={300} width={300} />
                      </div>
                    : */}
                  <Suspense fallback={
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: "60vw",
                      height: "90vh",
                      objectFit: "contain",
                      // backgroundColor: "transparent",
                      // marginLeft: "1rem",
                    }}>

                      <Lottie options={defaultOptions} height={300} width={300} />
                    </div>
                  }>
                    <Canvas shadows={true} camera={{ position: [0, 0, 2.75] }} id="canvas-responsive"
                      style={{
                        width: "55vw",
                        height: "90vh",
                        objectFit: "contain",
                        backgroundColor: "transparent",
                        marginLeft: "1rem",
                      }}>
                      <OrbitControls enableZoom={false} />
                      <spotLight intensity={0.3} angle={0.05} penumbra={1} position={[5, 25, 0]} />
                      <Scene1 />
                    </Canvas>
                  </Suspense>
                  {/* } */}
                </div>
                <div className="col-md-6 col-lg-4 pt-3 order-2  order-lg-1 d-flex justify-content-center  flex-column">
                  <p className="text-white mb-0 fs-h">A CRYPTOCURRENCY</p>
                  <p className="text-white p-size">THAT COMPLIANT MOST ADVANCED TECHNOLOGY</p>
                  <div className="d-flex  mt-1 start-btn-custom">
                    <a className=" btn btn-get-started text-white" href="/Signup">Get Started  <FaArrowRight />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Header;