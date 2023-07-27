import { useEffect,useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import tw from "tailwind-styled-components"
import Map from './components/Map'
import Link from 'next/link'
import { auth } from '@/firebase'
import { onAuthStateChanged,signOut } from 'firebase/auth'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

const[user, setUser] = useState(null)
const router = useRouter()
 

useEffect(()=> {
 return onAuthStateChanged(auth,user=>{
  if(user){
    setUser({
      name:user.displayName,
      photoUrl:user.photoURL,
    })
  } else{
    setUser(null)
    router.push('/login')
  }
 })

},[])





  return (

    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <CabLogo src="https://cdn.dribbble.com/userupload/3261442/file/original-79302dac2eb04d0f9aecac39e67b596b.png?compress=1&resize=400x300&vertical=top" />
          <Profile>
            <Name>{user && user.name}</Name>
            <UserImg src={user && user.photoUrl} 
            onClick={() => signOut(auth)}
            />
          </Profile>


        </Header>
        <ActionButtons>
          <Link href="/Search">
          <ActionButton>

          <ActionButtonImage src = "/1.png" />
            Ride
           
          </ActionButton>
          </Link>
          <Link href="/Search">
          <ActionButton>
          <ActionButtonImage src = "/b.png" />
            Wheels
          </ActionButton>
          </Link>
          <Link href="/login">
          <ActionButton>
          <ActionButtonImage src = "/c.png" />
            Reserve
          </ActionButton>
          </Link>
        </ActionButtons>
        <InputButton>
        Where to ?
        
        </InputButton> 
      </ActionItems>


    </Wrapper>
  )
}


const Wrapper = tw.div`  
flex flex-col  h-screen

`

const ActionItems = tw.div`
flex-1 p-4
`

const Header = tw.div`
flex justify-between items-center



`
const CabLogo = tw.img`
h-28 object-contain 

`
const Profile = tw.div`
flex  items-center
`

const Name = tw.div`
mr-4 w-35 text-sm
`

const UserImg = tw.img`
h-12 w-12 rounded-full border border-black-400 p-px cursor-pointer

`
const ActionButtons = tw.div`
flex flex-1

 `
const ActionButton = tw.div`
flex  bg-gray-200 flex-1  m-1 h-32 items-center flex-col  justify-center rounded-lg transform hover:scale-105 transition 
text-xl 
 `
const ActionButtonImage = tw.img`
h-3/5 bg-transparant
`
const InputButton = tw.div`
bg-gray-200  h-20 text-2xl flex items-center  mt-8 mx-2 rounded-lg text - ml 

`