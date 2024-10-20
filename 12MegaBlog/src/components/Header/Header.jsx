import React from 'react'
import { Link } from 'react-router-dom'
import {Container,Logo, LogoutBtn} from '../index'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
    const authStatus = useSelector((state)=>state.auth.status)
    cons
  return (
    <div>Header</div>
  )
}

export default Header