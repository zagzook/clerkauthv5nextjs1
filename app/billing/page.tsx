'use client'

import { getUser } from '@/actions/user.action'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const ClientPage = () => {
  const { isSignedIn, user } = useUser()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [userData, setUserData] = useState<any>(null)
  const router = useRouter()
  console.log('userData,router', userData, router)

  useEffect(() => {
    const getUserData = async () => {
      //do somthing
      const userData = await getUser(user?.id || '')
      setUserData(userData)
    }
    if (isSignedIn) {
      //do something
      getUserData()
    }
  }, [isSignedIn, user])

  return (
    <div className="h-full flex flex-col items-center justify-center text-2xl">
      Hello, {user?.firstName} welcome to Clerk
    </div>
  )
}

export default ClientPage
