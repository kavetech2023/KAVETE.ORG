import { onAuthStateChanged, signOut } from '@firebase/auth'
import React, {useEffect, useState} from 'react'
import {auth} from './firebase.js'

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null)

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if(user){
                setAuthUser(user)
            }else{
                setAuthUser(null)
            }
        })

    })
    


    const usersignOut = () => {
         signOut(auth)
    }


  return (
    <div>
        {authUser ? <><p>{`Logged In ${authUser.email}`}</p> <button onClick={usersignOut}>Log Out</button></>: <button className='bg-black px-4 py-2 rounded-md text-white cursor-pointer' >LogIn</button> }
        
        </div>
  )
}

export default AuthDetails