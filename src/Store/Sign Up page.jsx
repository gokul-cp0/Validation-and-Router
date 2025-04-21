import React, {useState } from "react";
import './Sign up.css';
import { useNavigate } from "react-router-dom";

const SignUp=()=>
{
        const navigate=useNavigate();
        
                    //State Values
    const [user,setUser]=useState({
        name:'',
        userName:'',
        password:'',
    });
    const [error,setError]=useState({
        name:'',
        userName:'',
        password:'',
        ConfPassword:''
    });
    const [Color,setColor]=useState({
        name:'Error red',
        userName:'Error red',
        password:'Error red',
        ConfPassword:'Error red'
    });
                            //function for onChange
    const StoreData=(event)=>
    {   
        const {name,value}=event.target;        
        if(name==="name"){

            setUser({...user,[name]:value.trim()});

            if(value.trim().length>4){
                setError({...error,[name]:"Valid name"});
                setColor({...Color,[name]:"Error green"});
            }
            else{
                setError({...error,[name]:"Name must be more than 8 characters "});
                setColor({...Color,[name]:"Error red"});
            }
        }
        else if(name==="userName"){

            setUser({...user,[name]:value.trim()});
            const userValid=/^(?=.*[a-z]{3,})(?=.*\d{2,})[a-z0-9_]{6,16}$/;

            if(userValid.test(value.trim())){
                setError({...error,[name]:"Valid username"});
                setColor({...Color,[name]:"Error green"});
            }
            else{
                setError({...error,[name]:"username must have only lowercase, numbers and _"});
                setColor({...Color,[name]:"Error red"});
            }
        }
        else if(name==="password")
        {
            setUser({...user,[name]:value});

            const passValid=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[a-zA-Z0-9\d!@#$%^&*]{8,20}$/;
            
        if(passValid.test(value.trim()))
            {
                setError({...error,[name]:"Valid Password"});
                setColor({...Color,[name]:"Error green"});
            }
            else
            {
                setError({...error,[name]:'Password must include [A-Z], [! @ # $ % ^ & *] and [0-9]'});
                setColor({...Color,[name]:"Error red"});
            }
        }
        else if(name==="ConfPassword")
        {
            if(user.password===value)
            {
                setError({...error,[name]:"Passwords match"});
                setColor({...Color,[name]:"Error green"});
            }
            else
            {
                setError({...error,[name]:"Passwords do not match"});
                setColor({...Color,[name]:"Error red"});
            }
        }
    }
    
    const ClickFunc=(e)=>
    {
        e.preventDefault();
        if( 
            error.name === "Valid name" &&
            error.userName === "Valid username" &&
            error.password === "Valid Password" &&
            error.ConfPassword === "Passwords match"
        )
        {
            navigate('/login',{state:user});
        }
        else
        {
            alert("Fix the errors before submitting")
        }
    }
    return(
        <div className="SignupBody">
        <div className="main p-4">
            <h1 className="text-center">Sign Up</h1>
            <form className="">
                <div className="input-box">

                    <input  name="name" type="text" placeholder="Name" required autoComplete="off"
                     onChange={StoreData} value={user.name}/><span className={Color.name} >{error.name}</span>

                    <input  name="userName" type="text" placeholder="User Name" required 
                    onChange={StoreData} value={user.userName}/><span className={Color.userName}>{error.userName}</span>

                    <input  name="password" type="password" placeholder="New Password" required
                     onChange={StoreData} value={user.password}/><span className={Color.password}>{error.password}</span>

                    <input  name="ConfPassword" type="password" placeholder="Confirm new Password"
                     required onChange={StoreData}/><span className={Color.ConfPassword}>{error.ConfPassword}</span>

                </div>
                <div className="w-100 text-center my-4 signup">
                    <button onClick={ClickFunc}>Sign Up</button>
                </div>
                <div className="w-100 text-center">
                    <label>Have an Account? <a href="/login">Log in</a></label>
                </div>
            </form>
        </div>
        </div>
    )
}
export default SignUp;