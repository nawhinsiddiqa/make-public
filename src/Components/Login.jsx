import { Link, useNavigate } from "react-router-dom";
import loginBanner from'../assets/Login.json'
import Lottie from "lottie-react";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useRef, useState } from "react";
import {AuthContext} from "../Provider/AuthProvider"
import useAxiosPublic from "../hooks/useAxiosPublic";
import axios from "axios";

const Login = () => {
    const captchaRef =useRef(null)
    const[disabled,setDisabled] =useState(true);
    const{ signInUser,googleSignIn} =useContext(AuthContext);
    const axiosPublic =useAxiosPublic();
    const navigate =useNavigate();
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)


        signInUser(email, password)
            .then(result => {
                // Swal.fire("Successfully Logged in")
                console.log(result)
                const user = {email:result.user.email}
                // axios.post('https://assignment-11-server-blond-omega.vercel.app/jwt',user,{withCredentials:true})
                // .then(res =>{
                //     console.log(res.data)
                // })
                     
                
                setTimeout(() => {
                    // navigate('/')
                }, 1000)

            })
            .catch(error => {
                console.log('ERROR', error.message)
            })
           

    }
            const handleValidateCaptcha=()=>{
                const user_captcha_value  =captchaRef.current.value;
                if(validateCaptcha(user_captcha_value)) {
                 setDisabled(false);
                }
               

            }
            const  handleGoogleSignIn =()=>{
                googleSignIn()
                .then(result =>{
                    console.log(result.user)
                    const userInfo ={
                        email:result.user?.email,
                        name:result.user?.displayName
                    }
                axiosPublic.post('/users',userInfo)
                .then(res =>{
                    console.log(res.data)
                    navigate('/');
                })
                })
            }
    return (
        <div>
            

            <div>
                <h1 className="text-5xl font-bold text-center my-7 text-amber-500 script">Login now!!!</h1>

                <div className="hero bg-amber-200 min-h-screen">

                    <div className="hero-content flex-col lg:flex-row-reverse">

                        <div className=" ml-8 mt-4 text-center lg:text-left w-[400px]">


                            <Lottie animationData={loginBanner}
                            ></Lottie>

                        </div>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                            <form onSubmit={(e) => handleLogin(e)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                    <LoadCanvasTemplate />
                                    </label>
                                    <input type="text" ref={captchaRef} name="captcha" placeholder="type the captcha above" className="input input-bordered" required />
                                   <button onClick={handleValidateCaptcha} className="btn btn-outline btn-xs mt-2">Validate</button>
                                </div>
                                <div className="form-control mt-6">
                                   <input disabled={disabled} className="btn btn-primary" type="submit" value="Login"></input>
                                </div>
                            </form>
                            <p className="ml-4 mb-4 mr-4 font-bold">
                                Welcome to this website?please <Link to="/register"><span className="text-green-600">Register</span></Link>

                            </p>
                            <p>
                                <button
                                    onClick={handleGoogleSignIn}
                                    className="btn bg-slate-500 w-full mx-auto text-black">Google</button>
                            </p>

                        </div>
                    </div>
                </div>
            </div>         
                        
                    
             
         
            
        </div>
    );
};

export default Login;