import { useEffect , useState } from 'react';
import tw from 'tailwind-styled-components'
import Map from './components/Map';
import Link from 'next/link'
import { auth } from '../firebase';
import { onAuthStateChanged , signOut } from 'firebase/auth';
import { useRouter } from 'next/router';




export default function Home() {
   const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
      return onAuthStateChanged(auth , user => {
        if(user) {
          setUser({
            name: user.displayName,
            photoUrl: user.photoURL,
          })
        }else{
          setUser(null)
          router.push('/login')
        }
      })

  }, [])
  
  return (
    <Wrapper>
<Map/>
<ActionItems>
<Header>
  <HawaiiLogo src="https://i.postimg.cc/YSyXyTHz/Hawaii.png"/>
  <Profile>
<Name>
  {user && user.name}
  <UserImage src={user&& user.photoUrl} onClick={() => signOut(auth)}/>
</Name>

  </Profile>
  </Header>
</ActionItems>
<ActionButtons>
<Link href='/search'>
   <ActionButton>
     <ActionButtonImage src="https://i.postimg.cc/QxKtFVhJ/bike-pic.jpg" />
     Ride
   </ActionButton>
   </Link>
   <Link href='/search'>
   <ActionButton2>
   <ActionButtonImage src="https://i.postimg.cc/J7PJNyww/car-pic.png" />
     Wheel
   </ActionButton2>
   </Link>
   
   <ActionButton3 href="calender.google.com">
   <ActionButtonImage 
   src="https://i.postimg.cc/fLgzLQPP/calender-pic.png"
    />
     Reserve
   </ActionButton3>
   
  </ActionButtons>
  <Link href='/search'>
  <InputButton >
  Where to?
  </InputButton>
  </Link>
    </Wrapper>
  )
}
const Wrapper =tw.div`
flex flex-col h-screen
`


const ActionItems =tw.div`
flex-5 p-4
`

const Header=tw.div`
flex justify-between items-center
`
const HawaiiLogo =tw.img`
h-28 
`

const Profile=tw.div`
flex items-center

`
const Name=tw.div`
mr-4 w-20 text-sm
`
const UserImage=tw.img`
h-12 w-12 rounded-full border-gray-200 p-px cursor-pointer
`
const ActionButton=tw.button`
flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center 
rounded-lg transform hover:scale-105 transition text-xl
`
const ActionButton3=tw.button`
flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center 
rounded-lg transform hover:scale-105 transition text-xl
`
const ActionButton2=tw.button`
flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center 
rounded-lg transform hover:scale-105 transition text-xl
`
const ActionButtons=tw.div`
flex 
`
const ActionButtonImage=tw.img`
h-3/5
`
const InputButton=tw.button`
h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8 cursor-pointer`
