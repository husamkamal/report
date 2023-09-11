import React, { useEffect } from 'react'
import Dashboard from '../components/Dashboard';
import LeftSideBar from '../components/LeftSideBar';
import { useUser } from '../context';
import { useNavigate } from 'react-router-dom';

export default function DashboardMain() {
  const { username } = useUser();
  const navigate = useNavigate();

  console.log(username, "username") 
  useEffect(()=>{

    if(!localStorage.getItem('username')) {
      navigate('/login')
    }
  },[username])
  return (
    <>
    <Dashboard />
    {/* <LeftSideBar /> */}
    </>
  )
}
