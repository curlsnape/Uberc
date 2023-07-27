import React,{useEffect} from 'react'
import tw from 'tailwind-styled-components/'

import { useRouter } from 'next/router'
import { signInWithPopup,onAuthStateChanged } from 'firebase/auth'
import { auth, provider } from '../firebase'
const login = () => {
const router = useRouter()

useEffect(()=>{
    onAuthStateChanged(auth, user=>{
     if (user) {
        router.push('/')
     }

    })
},[]);

    return (
        <Wrapper>
            <CabLogo src="/6.png" />
            <Title>Log in to access your account</Title>
            <Signup src='/7.png'></Signup>
            <SignInBUtton onClick = {()=>signInWithPopup(auth,provider)}>
             
                Sign in with Google

            </SignInBUtton>
        </Wrapper>
    )
}

export default login


const Wrapper = tw.div`
flex flex-col h-screen w-screen bg-gray-200 p-4`

const SignInBUtton = tw.div`
bg-black text-white text-center py-4 mt-8 self-center w-full cursor-pointer transform hover:scale-110 transition  `

const CabLogo = tw.img`
h-20 w-auto object-contain self-start 
`
const Title = tw.div`
text-5xl pt-4 text-gray-500


`
const Signup = tw.img`
object-contain w-full
`