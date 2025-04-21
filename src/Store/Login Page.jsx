import React, { useState } from "react";
import './Login.css';
import { useLocation, useNavigate } from "react-router-dom";
const Login=()=>
{
   const navigate=useNavigate();
   const LogUser=useLocation().state;

   const [track,setTrack]=useState({
        userName:false,
        password:false
   });
   const [warn,setWarn]=useState('');

    const LogOnchange=(event)=>
    {
        const {name,value}=event.target;
        if(name==="userName")
        {
            LogUser.userName===value ? setTrack({...track,[name]:true}):setTrack({...track,[name]:false});
        }else if(name==="password"){
            LogUser.password===value ? setTrack({...track,[name]:true}) : setTrack({...track,[name]:false});
        };
    }
    const ClickButton=(event)=>
    {
        event.preventDefault();
        
        if(track.userName && track.password)
        {
        navigate('/home',{state : LogUser}); 
        }
        else{
            if(!track.userName && !track.password) {setWarn("Check username and Password")}
            else if(!track.password) {setWarn("Check the password")};
        }
    }
    return(
        <div className="LoginBody">
            <div className="banner p-4">
                <h1 className="text-center mb-3 text-white">Login</h1>
                <form>
                    <div className="LoginInput-box">
                        <input name="userName" type="text" placeholder="Username" required onChange={LogOnchange}/>                    
                        <input name="password" type="password" placeholder="Password" required onChange={LogOnchange}/>
                    </div>
                    <div className="text-start w-100">
                        <label htmlFor="checkbox" className="text-white ms-2 my-3"><input type="checkbox" /> Remember me</label>
                    </div>
                    <div className="w-100 buttonDiv">
                        <button className="w-100" onClick={ClickButton}>Log in</button>
                        <span className="warnSpan">{warn}</span>
                    </div>
                    <div className="w-100  text-center mt-4 text-white">
                        <label className="newAccount">Don't have an Account ? <a href="/">Register now</a></label>
                    </div>
                </form>
            </div>
            </div>
    )
}
export default Login;