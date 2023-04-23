import { useContext, useState } from "react"
import "./login.css"
import { AuthContext } from "../../context/AuthContext"
import axiosInstance from "../../axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';

const Login = ()=>{
    const [ credentials, setCredentials] = useState({
        username:undefined,
        password:undefined,
    })

const {loading, error, dispatch} = useContext(AuthContext);

const [cookies, setCookie,removeCookie] = useCookies(['access_token']);

const navigate = useNavigate()

const handleChnage = (e)=>{
    setCredentials((prev) =>({...prev, [e.target.id]: e.target.value}));
};

const handleClick = async e =>{
    e.preventDefault()
    dispatch({type:"LOGIN_START"})
    try {
        const res = await axiosInstance.post("/auth/login", credentials);
        setCookie('access_token', 'token', { path: '/' });

        dispatch({type:"LOGIN_SUCCESS", payload: res.data});
        navigate("/")
    } catch (err) {
        dispatch({type:"LOGIN_FAILURE", payload:err.response.data});
    }
};



    return <div className="login">
        <div className="lContainer">
            <input type="text" placeholder="username" id="username" onChange={handleChnage} className="lInput"/>
            <input type="password" placeholder="password" id="password" onChange={handleChnage} className="lInput"/>
            <button disabled={loading} onClick={handleClick} className="lButton">Login</button>
            {error && <span>{error.message}</span>}
        </div>
    </div>;
    
};

export default Login