import react, { useState } from 'react'
import SignupImage from '../images/SignupBack.png'
import Logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Api_Url } from '../utils/Base_url'
import { useNavigate } from 'react-router-dom'
import LoaderSpinner from '../utils/authloader/authLoaderSpinner'
import { ToastContainer, toast } from 'react-toastify'

const ForgetPassword = () => {
  const [email, setemail] = useState('')
  const [showEmailError, setShowEmailError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  let Navigate = useNavigate()

  async function onFormSubmit(e) {
    e.preventDefault()

    try {
      if (email === '') {
        setShowEmailError(true)
        return
      } else {
        setShowEmailError(false)
      }
      setIsLoading(true)
      await axios.post(`${Api_Url}/forgot-password`, { email }).then((res) => {
        setIsLoading(false)
        if (res.status === 200) {
          toast.success(res.data.message)
          Navigate('/ResetPassword', {
            state: {
              id: res.data.id,
            },
          })
        } else {
        }
      })
    } catch (err) {
      toast.error(err?.response?.data?.error)
      setIsLoading(false)
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
          <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 px-2 pt-lg-5 pt-md-5 mt-5'>
              <div className='text-center mb-5'>
                {' '}
                <img className='AlienLogo' width='40%' src={Logo} />
              </div>

              <div className='login-box'>
                <h3 className='text-center text-white mt-2 mb-3 forpass-h'>
                  Forget Password
                </h3>
                <div className='row'>
                  <div className=' col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group mb-2'>
                    <input
                      style={{ borderRadius: '10px' }}
                      onChange={(e) => {
                        setemail(e.target.value)
                        setShowEmailError(false)
                      }}
                      type='email'
                      name='email'
                      value={email}
                      className='form-control inputIcon'
                      placeholder='Email'
                      autocomplete='off'
                      required
                    />
                  </div>
                  <span
                    className='d-flex justify-content-center'
                    style={
                      showEmailError
                        ? { visibility: 'visible', color: 'red' }
                        : { visibility: 'hidden' }
                    }
                  >
                    Pleae enter your email
                  </span>
                </div>

                <div className='text-center mt-4'>
                  {isLoading ? (
                    <LoaderSpinner />
                  ) : (
                    <button
                      onClick={onFormSubmit}
                      type='submit'
                      className='btn btn-primary px-4 py-2 border-0'
                      style={{ backgroundColor: '#0E2E96' }}
                    >
                      Submit
                    </button>
                  )}
                </div>
              </div>
              <p className='forgot-password textSize text-center text-white mt-4 not-create-title'>
                Back to &nbsp;
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

export default ForgetPassword
