'use client'

import Image from 'next/image'
import {useContext} from 'react';
import { AuthContext, UseAuth } from './context/auth';

export default function Home() {
  const { user, login, logout } = UseAuth();

 
  return (
    <>
    <h1>Home</h1>
    <p>name: {user?.nome}</p>

    <button  onClick={logout}>
      Logout
    </button>
    </>
  )
}
