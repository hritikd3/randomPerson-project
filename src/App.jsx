import React, { useState, useEffect } from 'react'
import './App.css'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'
const url = 'https://randomuser.me/api/'
const defaultImage = 'https://randomuser.me/api/portraits/men/85.jpg'
function App() {
const[loading,setLoading]=useState(true)
  const[person,setPerson]=useState(null)
const [title,setTitle]=useState('name')
const [value,setValue]=useState('random person')

const getPerson=async ()=>{
  const response= await fetch(url);
 const data = await response.json();
  const person =data.results[0];
  const {phone,email} = person;
  const {large:image} = person.picture;
  const {login: password}, = person;
}
  useEffect(()=>{
      getPerson();
  },[])
  
  const handleValue=(e)=>{
    console.log(e.target)
  }
  return <main>
  <div className="block bcg-black"> </div>
    <div className="block ">
<div className="container">
<img src={(person && person.image) || defaultImage} alt="random user" className="user-img"/>
<p className="user-title" > my {title} is </p>
<p className="user-value" > my {value} is </p>
  <div className="values-list">

<button className="icon" data-label="user" onMouseOver={handleValue} > <FaUser /></button>
<button className="icon" data-label="email" onMouseOver={handleValue} > <FaEnvelopeOpen /></button>
<button className="icon" data-label="age" onMouseOver={handleValue} > <FaCalendarTimes /></button>
<button className="icon" data-label="address" onMouseOver={handleValue} > <FaMap /></button>
<button className="icon" data-label="phone" onMouseOver={handleValue} > <FaPhone /></button>
<button className="icon" data-label="password" onMouseOver={handleValue}> <FaLock /></button >


  </div>
<button className="btn" type="button"> { loading ? ' loading...' : 'random user'}</button >

  
  
  


  
 </div>

    </div>
  </main>
}

export default App
