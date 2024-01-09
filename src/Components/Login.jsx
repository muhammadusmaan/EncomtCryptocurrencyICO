import react, { useState, useCallback, useEffect } from 'react'
import SignupImage from '../images/SignupBack.png'
import Logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Api_Url } from '../utils/Base_url'
import ReCAPTCHA from 'react-google-recaptcha'
import { useNavigate } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import GoogleLogin from 'react-google-login'
import LoaderSpinner from '../utils/authloader/authLoaderSpinner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEye,
  faEyeSlash,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
// import useToken from './UseToken';

const Login = () => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [disableSubmit, setDisableSubmit] = useState(true)
  const [showEmailError, setShowEmailError] = useState(false)
  const [showPasswordError, setShowPasswordError] = useState(false)
  const [isPassword, setIsPassword] = useState(false)
  const [recaptchaChecked, setRecaptchaChecked] = useState(false);

  const user = { email, password }
  let Navigate = useNavigate()

  const saveToken = (userToken) => {
    sessionStorage.setItem('token', JSON.stringify(userToken))
    sessionStorage.setItem('userData', JSON.stringify(userToken.user));
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
          Navigate('/Dashboard')
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

  const errorGoogle = (error) => {}

  async function onFormSubmit(e) {
    e.preventDefault()
    try {
      if (email === '') {
        setShowEmailError(true)
        return
      } else {
        setShowEmailError(false)
      }
      if (password === '') {
        setShowPasswordError(true)
        return
      }
      if (!recaptchaChecked) {
        toast.error("Please check reCAPTCHA");
        return
    }
      else {
        setShowPasswordError(false)
        setIsLoading(true)
        await axios.post(`${Api_Url}/signin`, user).then((res) => {
          setIsLoading(false)
          if (res.status === 200) {
            toast.success('Login Successfully')
            saveToken(res.data)
            Navigate(
              '/Dashboard'
              //,{ login: "Login" }
            )
          } else {
          }
        })
      }
    } catch (err) {
      toast.error(err?.response?.data?.error)
      setIsLoading(false)
    }
  }
  useEffect(() => {
    window.onpopstate = () => {
      Navigate('/')
    }
  })

  return (
    <>
      <div
        className='container-fluid max-width-container'
        style={{ marginTop: '20px' }}
      >
        <ToastContainer />
        <div className='max-width-login'>
          <div className='row signup-row'>
            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 px-3 mt-5'>
              <div className='text-center mb-3'>
                <img className='AlienLogo img-fluid' src={Logo} />
              </div>

              <div className='login-box'>
                <h3 className='text-center text-white mt-2 mb-3'>
                  Login to your account
                </h3>
                <div className='row justify-content-center gap-3'>
                  <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group'>
                    <div className='input-group'>
                      <input
                        onChange={(e) => {
                          setemail(e.target.value)
                          setShowEmailError(false)
                        }}
                        type='email'
                        name='email'
                        value={email}
                        className='form-control inputIcon py-2'
                        placeholder='Email'
                        autocomplete='off'
                        required
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

                  <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group mb-2'>
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
                        className='form-control inputIcon py-2'
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
                          ? { visibility: 'visible', color: 'red' }
                          : { visibility: 'hidden' }
                      }
                    >
                      Pleae enter your password
                    </span>
                  </div>
                </div>
                <div className='d-flex justify-content-center'>
                  <ReCAPTCHA
                    className='col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group mb-2 d-flex justify-content-center'
                    sitekey='6LdO1wcfAAAAAI6G-OY-6LrPkOAufQJhibVrHB8x'
                    onChange={useCallback(() =>setRecaptchaChecked(true))}
                  />
                </div>

                <div className='text-center mt-3'>
                  {isLoading ? (
                    <LoaderSpinner />
                  ) : (
                    <button
                      onClick={onFormSubmit}
                      style={{ backgroundColor: '#0E2E96' }}
                      type='submit'
                      className='btn btn-lg text-white px-5 pt-2 pb-2 login-btn'
                    >
                      {' '}
                      Login{' '}
                    </button>
                  )}
                </div>

                <p className='forgot-password text-center mt-5'>
                  <Link to='/ForgetPassword'>
                    <a
                      className='text-white textSize text-decoration-none forgot-password-title'
                      href='#'
                    >
                      Forgot Password?
                    </a>
                  </Link>
                </p>

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
                        className='btn btn-primary pt-2 pb-1 fb-btn lg-bt-size'
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
                        className='btn btn-danger pt-2 pb-1 gg-btn  lg-bt-size'
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
                Do not have an account? &nbsp;
                <Link to='/Signup'>
                  <a className='text-primary text-decoration-none login-signbtn'>
                    Sign up
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
export default Login
