import React, {useEffect} from 'react'
import tw from 'tailwind-styled-components'
import { useRouter } from 'next/router'
import { signInWithPopup , onAuthStateChanged } from 'firebase/auth'
import { auth , provider } from '../firebase'


const Login = () => {
    const router = useRouter()

    useEffect(() => {
onAuthStateChanged(auth , user => {
    if(user){
        router.push('/')
    }
})

    } ,[])
    return (
        <Wrapper>
            <HawaiiLogo src="https://i.postimg.cc/YSyXyTHz/Hawaii.png"/>
            <Title>
                Log in to access your account
                </Title>
                <Haed>
                <HeadImage src="https://i.ibb.co/CsV9RYZ/login-image.png"/>
                </Haed>
            <SignInButton onClick={() => signInWithPopup(auth , provider)}>
                Sign in with google
            </SignInButton>
        </Wrapper>
    )
}

export default Login

const Wrapper=tw.div`
flex flex-col h-screen w-screen bg-gray-200 p-4`
const SignInButton=tw.button`
bg-black text-white text-center py-4 mt-8 self-center w-full`
const HawaiiLogo=tw.img`
h-20 w-auto object-contain self-start`
const Title=tw.div`
text-5xl pt-4 text-gray-500`
const HeadImage=tw.img``
const Haed=tw.div`h-60 w-60 flex flex-col items-center flex-grow`