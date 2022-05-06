import React, { useState } from 'react'
import header from './header.css'
import {ImHome} from 'react-icons/im'
import {IoIosContact} from 'react-icons/io'
import {FcAbout} from 'react-icons/fc'
import {FaPencilRuler} from 'react-icons/fa'
import {MdOutlineHomeRepairService} from 'react-icons/md'


export const Tabs = () => {

  const [active, setActive] = useState('#');
  return (

    <div className='tabs'>
     
    <a href='#' onClick={()=>setActive("#")} className = {active === "#" ? "active" : ""}><ImHome /></a>
    <a href='#contact' onClick={()=>setActive("#contact")} className = {active==="#contact"?"active":""}><IoIosContact /></a>
    <a href='#about' onClick={()=>setActive("#about")} className = {active==="#about"?"active":""}><FcAbout /></a>
    <a href='#services' onClick={()=>setActive("#services")} className = {active==="#services"?"active":""}><MdOutlineHomeRepairService /></a>
    <a href='#experience' onClick={()=>setActive("#experience")} className = {active==="#experience"?"active":""}><FaPencilRuler /></a>

    </div>
  )
}
