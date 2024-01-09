import react, { useState, useCallback } from 'react'
import axios from 'axios'
import SignupImage from '../images/SignupBack.png'
import Logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import { Api_Url } from '../utils/Base_url'
import Toast from '../utils/Toast'
import { useNavigate } from 'react-router-dom'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import GoogleLogin from 'react-google-login'
import LoaderSpinner from '../utils/authloader/authLoaderSpinner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEye,
  faEyeSlash,
  faUser,
  faEnvelope,
  faPhone,
} from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify'
import ReCAPTCHA from 'react-google-recaptcha'

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


const Signup = () => {
  const [firstname, setfirstname] = useState('')
  const [lastname, setlastname] = useState('')
  const [email, setemail] = useState('')
  const [phoneNumber, setphoneNumber] = useState('')
  const [password, setpassword] = useState('')
  const [confirmpassword, setconfirmpassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showError, setShowError] = useState(false)
  const [showFirstNameError, setShowFirstNameError] = useState(false)
  const [showLastNameError, setShowLastNameError] = useState(false)
  const [showEmailError, setShowEmailError] = useState(false)
  const [showPhoneNumberError, setShowPhoneNumberError] = useState(false)
  const [showPasswordError, setShowPasswordError] = useState(false)
  const [showConfirmPasswordError, setShowConfirmPasswordError] =
    useState(false)
  const [passwordErrorMsg, setPasswordErrorMsg] = useState(false)
  const [isPassword, setIsPassword] = useState(false)
  const [isConfirmPassword, setIsConfirmPassword] = useState(false)
  const user = { firstname, lastname, email, phoneNumber, password }

  const [recaptchaChecked, setRecaptchaChecked] = useState(false);

  let Navigate = useNavigate()
  const getToken = () => {
    const tokenString = sessionStorage.getItem('token')
    const userToken = JSON.parse(tokenString)

    return userToken
  }

  const saveToken = (userToken) => {
    sessionStorage.setItem('token', JSON.stringify(userToken))
  }

  const responseFacebook = (response) => {
    const type = 'facebook'
    const firstname = response.name
    const email = response.email
    const profileImage = response.picture.data.url
    const Fbuser = { firstname, email, type, profileImage }

    try {
      axios.post(`${Api_Url}/signup-social`, Fbuser).then((res) => {
        if (res.status === 200) {
          toast.success(res.data.message)
          saveToken(res.data)
          Navigate('/Login')
        } else {
        }
      })
    } catch (err) {
      toast.error(err?.response?.data?.error)
    }
  }

  const responseGoogle = (response) => {
    let type = 'google'
    let firstname = response.profileObj.givenName
    let email = response.profileObj.email
    // const profileImage = response.picture.data.url
    const Fbuser = { firstname, email, type }

    try {
      axios.post(`${Api_Url}/signup-social`, Fbuser).then((res) => {
        if (res.status === 200) {
          toast.success(res.data.message)
          saveToken(res.data)
          Navigate('/Dashboard')
        } else {
        }
      })
    } catch (err) {
      toast.error(err?.response?.data?.error)
    }
  }

  async function onFormSubmit(e) {
    e.preventDefault()
    try {
      if (firstname === '') {
        setShowFirstNameError(true)
        return
      } else {
        setShowFirstNameError(false)
      }
      if (lastname === '') {
        setShowLastNameError(true)
        return
      } else {
        setShowLastNameError(false)
      }
      if (email === '') {
        setShowEmailError(true)
        return
      } else {
        setShowEmailError(false)
      }
      if (phoneNumber === '') {
        setShowPhoneNumberError(true)
        return
      } else {
        setShowPhoneNumberError(false)
      }
      if (password === '') {
        setShowPasswordError(true)
        return
      } else {
        setShowPasswordError(false)
      }
      if (confirmpassword === '') {
        setShowConfirmPasswordError(true)

        return
      } else {
        setShowConfirmPasswordError(false)
      }
      if (!recaptchaChecked) {
        toast.error("Please check reCAPTCHA");
        return
      }
      if (password !== confirmpassword) {
        setPasswordErrorMsg(true)
        return
      } else {
        setPasswordErrorMsg(false)
        setIsLoading(true)
        await axios.post(`${Api_Url}/signup`, user).then((res) => {
          setIsLoading(false)
          if (res.status === 200) {
            toast.success(res.data.message)
            Navigate('/Login')
          } else {
          }
        })
      }
    } catch (err) {
      toast.error(err?.response?.data?.error)
      setIsLoading(false)
    }
  }
  const errorGoogle = (error) => { }
  const handleKeyDown = (e) => {
    if (e.key === ' ') {
      e.preventDefault()
    }
  }

  return (
    <>
      <div
        className='container-fluid max-width-container'
        style={{ marginTop: '20px' }}
      >
        <ToastContainer />
        <div className='max-width-login'>
          <div className='row signup-row'>
            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-lg-5 pt-md-5'>
              <div className='text-center mb-3'>
                {' '}
                <img className='AlienLogo img-fluid' src={Logo} />
              </div>

              <div className='login-box'>
                <h3 className='text-center text-white mt-2 newAcc-h'>
                  Create New Account
                </h3>
                <div className='row justify-content-center'>
                  <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group mb-2'>
                    <div className='input-group'>
                      <input
                        aria-describedby='basic-addon3'
                        onChange={(e) => {
                          setfirstname(
                            e.target.value.replace(/[^A-Za-z]/gi, '')
                          )
                          setShowFirstNameError(false)
                        }}
                        type='text'
                        name='firstname'
                        value={firstname}
                        className='form-control f-name-field'
                        placeholder='First Name'
                        autocomplete='off'
                      />
                      <span
                        class='input-group-text eye-icon-rounded-corner'
                        id='basic-addon3'
                      >
                        <FontAwesomeIcon icon={faUser} />
                      </span>
                    </div>
                    <span
                      style={
                        showFirstNameError
                          ? { display: 'block', color: 'red' }
                          : { display: 'none' }
                      }
                    >
                      Pleae enter your first name
                    </span>
                  </div>
                  <div className=' col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group mb-2'>
                    <div className='input-group'>
                      <input
                        aria-describedby='basic-addon4'
                        onChange={(e) => {
                          setlastname(e.target.value.replace(/[^A-Za-z]/gi, ''))
                          setShowLastNameError(false)
                        }}
                        type='text'
                        name='lastname'
                        value={lastname}
                        className='form-control l-name-field'
                        placeholder='Last Name'
                        autocomplete='off'
                      />
                      <span
                        class='input-group-text eye-icon-rounded-corner'
                        id='basic-addon4'
                      >
                        <FontAwesomeIcon icon={faUser} />
                      </span>
                    </div>
                    <span
                      style={
                        showLastNameError
                          ? { display: 'block', color: 'red' }
                          : { display: 'none' }
                      }
                    >
                      Pleae enter your last name
                    </span>
                  </div>
                </div>
                <div className='row justify-content-center'>
                  <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group mb-2'>
                    <div className='input-group'>
                      <input
                        onKeyDown={handleKeyDown}
                        aria-describedby='basic-addon5'
                        onChange={(e) => {
                          setemail(e.target.value)
                          setShowEmailError(false)
                        }}
                        type='email'
                        name='email'
                        value={email}
                        className='form-control email-field'
                        placeholder='Email'
                        autocomplete='off'
                      />
                      <span
                        class='input-group-text eye-icon-rounded-corner'
                        id='basic-addon5'
                      >
                        <FontAwesomeIcon icon={faEnvelope} />
                      </span>
                    </div>
                    <span
                      style={
                        showEmailError
                          ? { display: 'block', color: 'red' }
                          : { display: 'none' }
                      }
                    >
                      Pleae enter your email
                    </span>
                  </div>
                  <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group mb-2'>
                    <div className='input-group'>
                      <PhoneInput
                        country={'pk'}
                        value={phoneNumber}
                        placeholder={"Phone Number"}
                        onChange={(phoneNumber) => { setphoneNumber(phoneNumber); setShowPhoneNumberError(false) }}
                      />
                    </div>
                    <span
                      style={
                        showPhoneNumberError
                          ? { display: 'block', color: 'red' }
                          : { display: 'none' }
                      }
                    >
                      Pleae enter your phone number
                    </span>
                  </div>
                </div>
                <div className='row justify-content-center'>
                  <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-2'>
                    <div className='input-group'>
                      <input
                        aria-describedby='basic-addon1'
                        onChange={(e) => {
                          setpassword(e.target.value)
                          setShowPasswordError(false)
                        }}
                        type={isPassword ? 'text' : 'password'}
                        name='password'
                        value={password}
                        className='form-control inputIcon'
                        placeholder='Password'
                        autocomplete='off'
                      />
                      <span
                        onClick={() => {
                          setIsPassword(!isPassword)
                        }}
                        class='input-group-text eye-icon-rounded-corner'
                        id='basic-addon1'
                      >
                        <FontAwesomeIcon
                          icon={isPassword ? faEyeSlash : faEye}
                        />
                      </span>
                    </div>
                    <span
                      style={
                        showPasswordError
                          ? { display: 'block', color: 'red' }
                          : { display: 'none' }
                      }
                    >
                      Pleae enter your password
                    </span>
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 inputIcon mb-2'>
                    <div className='input-group'>
                      <input
                        aria-describedby='basic-addon2'
                        onChange={(e) => {
                          setconfirmpassword(e.target.value)
                          setShowConfirmPasswordError(false)
                        }}
                        type={isConfirmPassword ? 'text' : 'password'}
                        className='form-control inputIcon'
                        name='confirmPassword'
                        value={confirmpassword}
                        placeholder='Confirm Password'
                        autocomplete='off'
                      />
                      <span
                        onClick={() => {
                          setIsConfirmPassword(!isConfirmPassword)
                        }}
                        class='input-group-text eye-icon-rounded-corner'
                        id='basic-addon2'
                      >
                        <FontAwesomeIcon
                          icon={isConfirmPassword ? faEyeSlash : faEye}
                        />
                      </span>
                    </div>
                    <span
                      style={
                        showConfirmPasswordError
                          ? { display: 'block', color: 'red' }
                          : { display: 'none' }
                      }
                    >
                      Pleae confirm your password
                    </span>
                  </div>
                  <span
                    className='d-flex justify-content-center'
                    style={
                      passwordErrorMsg
                        ? { visibility: 'visible', color: 'red' }
                        : { visibility: 'hidden' }
                    }
                  >
                    Password and Confirm Password should be same
                  </span>
                </div>
                <div className="d-flex justify-content-center">
                  <ReCAPTCHA
                    className="col-lg-8 col-md-12 col-sm-12 col-xs-12 form-group mb-2 d-flex justify-content-center"
                    sitekey="6LdO1wcfAAAAAI6G-OY-6LrPkOAufQJhibVrHB8x"
                    onChange={useCallback(() => { setRecaptchaChecked(true); })} />
                </div>

                <div className='text-center mt-4'>
                  {isLoading ? (
                    <LoaderSpinner />
                  ) : (
                    <button
                      onClick={onFormSubmit}
                      style={{ backgroundColor: '#0E2E96' }}
                      type='submit'
                      className='btn btn-lg text-white px-5 pt-2 pb-1'
                    >
                      Sign Up
                    </button>
                  )}
                </div>
                <p
                  style={{
                    width: '100%',
                    textAlign: 'center',
                    borderBottom: '1px solid white',
                    lineHeight: '0.1em',
                  }}
                  className='forgot-password text-center textSize text-white mt-4 or-line-cus'
                >
                  <span style={{ background: '#011f44', padding: '0 10px' }}>
                    or
                  </span>
                </p>
                <div className='d-flex justify-content-center gap-2 mt-3'>
                  <FacebookLogin
                    appId='598907911109419'
                    // appId="985244659088530"
                    autoLoad={false}
                    fields='name,email,picture'
                    render={(renderProps) => (
                      <button
                        onClick={renderProps.onClick}
                        className='btn btn-primary pt-2 pb-1 lg-bt-size'
                      >
                        <i className='fa fa-facebook'></i>{' '}
                      </button>
                    )}
                    callback={responseFacebook}
                  />
                  <GoogleLogin
                    clientId='766795129474-dbk9fvtco9r7i7l7turb6ltq7s3ub9i4.apps.googleusercontent.com'
                    // clientId="558385257015-85663017de0a9e043b20k4tqnv8a9ecf.apps.googleusercontent.com"
                    render={(rendProps) => (
                      <button
                        onClick={rendProps.onClick}
                        className='btn btn-danger pt-2 pb-1 lg-bt-size'
                      >
                        {' '}
                        <i className='fa fa-google'></i>{' '}
                      </button>
                    )}
                    buttonText='Signup'
                    onSuccess={responseGoogle}
                    onFailure={errorGoogle}
                    cookiePolicy={'single_host_origin'}
                    pluginName='chat'
                  />
                </div>
              </div>
              <p className='forgot-password textSize text-center text-white mt-4 not-create-title'>
                Already have an account? &nbsp;
                <Link to='/Login'>
                  <a className='text-primary text-decoration-none' href='#'>
                    Login
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
