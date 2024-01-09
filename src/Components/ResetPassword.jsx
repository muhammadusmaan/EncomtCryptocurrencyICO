import react, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import SignupImage from '../images/SignupBack.png'
import Logo from '../images/logo.png'
import axios from 'axios';
import { Api_Url } from '../utils/Base_url'
import { useNavigate } from 'react-router-dom'
import LoaderSpinner from '../utils/authloader/authLoaderSpinner';
import { ToastContainer, toast } from 'react-toastify';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";


const ResetPassword = () => {

    const location = useLocation();

    const [resetToken, setResetToken] = useState("");
    const [password, setpassword] = useState("");
    const [id, setId] = useState(location.state.id);
    const [confirmpassword, setconfirmpassword] = useState("");
    const [showError, setshowerror] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [showTokenError, setShowTokenError] = useState(false);
    const [showPasswordError, setShowPasswordError] = useState(false);
    const [showConfirmPasswordError, setShowConfirmPasswordError] = useState(false);
    const [passwordErrorMsg, setPasswordErrorMsg] = useState(false);
    const [isConfirmPassword, setIsConfirmPassword] = useState(false);
    const [isPassword, setIsPassword] = useState(false);

    let Navigate = useNavigate();
    const user = { resetToken, password, id }

    async function onFormSubmit(e) {
        e.preventDefault()
        try {

            if (resetToken === "") {
                setShowTokenError(true)
                return
            }
            else {
                setShowTokenError(false)
            }
            if (password === "") {
                setShowPasswordError(true)
                return
            }

            else {
                setShowPasswordError(false)
            }
            if (confirmpassword === "") {
                setShowConfirmPasswordError(true)

                return
            }
            else {
                setShowConfirmPasswordError(false)

            }
            if (password !== confirmpassword) {
                setPasswordErrorMsg(true)
                return
            }

            else {
                setPasswordErrorMsg(false)
                setIsLoading(true);
                await axios.post(`${Api_Url}/reset-password`, user)
                    .then((res) => {
                        setIsLoading(false);
                        if (res.status === 200) {
                            toast.success(res.data.message);
                            Navigate("/Login")
                        }
                        else {
                        }
                    })
            }
        }
        catch (err) {
            toast.error(err?.response?.data?.error);
            setIsLoading(false);
        }
    }


    return (
        <>
            <div className='container-fluid max-width-container' style={{ marginTop: "20px" }}>
            <ToastContainer />  
            
                <div className='row signup-row' >
                    <img className='col-lg-6 col-md-6 col-sm-12 col-xs-12  signupimg imageShadow' src={SignupImage} />
                    <div className='col-lg-5 col-md-6 col-sm-12 col-xs-12 px-2 pt-5 mt-5'>
                        <div className='text-center'> <img className='AlienLogo' width="40%" src={Logo} /></div>
                        <h3 className='text-center text-white mt-3 mb-3'>Reset Password</h3>
                        <div className="row">
                            <div className=' col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-xs-12 form-group mb-2'>
                                <input onWheel={event => { event.currentTarget.blur() }} style={{ borderRadius: "10px" }} onChange={e => { setResetToken(e.target.value); setShowTokenError(false) }} type="number" name="resetToken" value={resetToken} className="form-control inputIcon py-2" placeholder="&#xf023; &nbsp; Token" />
                                <span style={showTokenError ? { display: 'block', color: "red" } : { display: 'none' }} >Pleae enter your token</span>

                            </div>
                            <div className=' col-lg-6 offset-lg-3  col-md-12 col-sm-12 col-xs-12 form-group mb-2'>
                                <div className="input-group">
                                    <input aria-describedby="basic-addon1" onChange={e => { setpassword(e.target.value); setShowPasswordError(false) }} type={isPassword ? "text" : "password"} name="password" value={password} className="form-control inputIcon" placeholder="New Password" autocomplete="off" />
                                    <span onClick={() => { setIsPassword(!isPassword) }} class="input-group-text eye-icon-rounded-corner" id="basic-addon1"><FontAwesomeIcon icon={isPassword ? faEyeSlash : faEye} /></span>
                                </div>
                                <span style={showPasswordError ? { display: 'block', color: "red" } : { display: 'none' }} >Pleae enter your password</span>
                            </div>
                            <div className=' col-lg-6 offset-lg-3  col-md-12 col-sm-12 col-xs-12 form-group mb-2'>
                                <div className='input-group'>
                                    <input aria-describedby="basic-addon2" onChange={e => { setconfirmpassword(e.target.value); setShowConfirmPasswordError(false) }} type={isConfirmPassword ? "text" : "password"} className="form-control inputIcon" name="confirmPassword" value={confirmpassword} placeholder="Confirm New Password" autocomplete="off" />
                                    <span onClick={() => { setIsConfirmPassword(!isConfirmPassword) }} class="input-group-text eye-icon-rounded-corner" id="basic-addon2"><FontAwesomeIcon icon={isConfirmPassword ? faEyeSlash : faEye} /></span>
                                </div>
                                <span style={showConfirmPasswordError ? { display: 'block', color: "red" } : { display: 'none' }} >Pleae confirm your password</span>
                            </div>
                            <span className="d-flex justify-content-center" style={passwordErrorMsg ? { visibility: 'visible', color: "red" } : { visibility: 'hidden' }} >Password and Confirm Password should be same</span>
                        </div>


                        <div className='text-center mt-4'>
                            {isLoading ? <LoaderSpinner /> :
                                <button onClick={onFormSubmit} type="submit" className="btn btn-primary px-4 py-2 buttons border-0" style={{ backgroundColor: "#0E2E96" }}>Submit</button>
                            }
                        </div>
                    </div>
                </div>
            </div>

        </>
    );



}



export default ResetPassword