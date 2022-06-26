import { useState , useContext, useRef} from 'react'
import { UserContext } from '../context/UserContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Login() {

    const { user, setUser } = useContext(UserContext);
    const enrolidRef = useRef("");
    const passwordRef = useRef("");
    const [samasya, setSamasya] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e, enrolid, password) => {
      e.preventDefault()
      if(!enrolid || !password) {
          setSamasya("Please fill all details")
          return
      }
      const response = await axios.post('http://localhost:5000/api/users/login', {
        enrolid,
        password
      })
      const data = response.data;
      setUser(data);
      window.localStorage.removeItem('user')
      window.localStorage.setItem('user', JSON.stringify(data))
      navigate('/home')
  }
  return (
    <div>
      <div className="w-screen flex flex-col justify-start overflow-x-hidden items-center min-h-screen">
        <form className="flex flex-col bg-primary shadow-pn rounded-lg p-7 mt-14 w-5/6 tb:w-4/6 lp:w-3/6 dp:w-2/6 font-sans">
          <div className="font-medium text-xl tb:text-3xl text-center">
            Login
          </div>
          {samasya && (
            <p className="text-sm tb:text-lg font-sans text-secondary-brightred text-center">
              {samasya}
            </p>
          )}
          <label htmlFor="email" className="mt-3 tb:mt-5 text-md tb:text-xl">
            Enrolment Id:
          </label>
          <input
            type="text"
            name="enrolid"
            ref={enrolidRef}
            className="mt-1 tb:mt-2 w-86 h-7 tb:h-8 rounded-md border border-opacity-20 border-secondary-lightgray focus:outline-none p-4"
          ></input>
          <label htmlFor="password" className="mt-3 tb:mt-5 text-md tb:text-xl">
            Password:
          </label>
          <input
            type="password"
            name="pass"
            ref={passwordRef}
            className="mt-1 tb:mt-2 w-86 h-7 tb:h-8 rounded-md border border-opacity-20 border-secondary-lightgray focus:outline-none p-4"
          ></input>
          <button
            onClick={(e) =>
              handleLogin(
                e,
                enrolidRef.current.value,
                passwordRef.current.value
              )
            }
            className="mt-4 tb:mt-8 w-28 tb:w-36 h-8 tb:h-10 bg-secondary-red items-center rounded-md shadow-md text-primary text-md tb:text-xl font-medium"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login