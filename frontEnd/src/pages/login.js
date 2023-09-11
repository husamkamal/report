import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useNavigation } from 'react-router-dom'
import { useUser } from '../context'
import './login.css'
export default function Login() {
    const [username, setUsernameInput] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const { setUsername } = useUser();

    const handleLogin = async (e) =>{
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:3000/api/login', {username, password}) 
            setUsername(response.data)
            localStorage.setItem('username',response.data )
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    } 
  return (
<div class="container container-md container-sm" id="container">
        
        <div class="form-container sign-in-container">
            <form onSubmit={handleLogin} >
                <h2 class="heading">تسجيل دخول</h2>
                <input type="text" value={username} onChange={(e)=> { setUsernameInput(e.target.value)}} placeholder=" اسم المستخدم" class="email" />
                <input type="password" placeholder="كلمة المرور" value={password} onChange={(e)=> { setPassword(e.target.value)}} class="password" />
                <a class="password-forget">هل نسيت كلمة السر؟</a>
                <button type='submit'  class="button-login">تسجيل دخول</button>
            </form>
        </div>
        <div class="overlay-container">
          <div class="image-illustration">
            <img src="image/OIP-removebg-preview.png" alt='f' style={{width: "45%"}}/>
            <div class="text-heading">
                <h4>الهيئة الملكية للجبيل وينبع</h4>
                <h4>Royal Comission for jubail & Yanbu</h4>
            </div>

          </div>
        </div>
    </div>  )
}
