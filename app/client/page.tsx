'use client'

import { useUser } from '@clerk/nextjs'

const ClientPage = () => {
  const { isSignedIn, user, isLoaded } = useUser()
  if (!isLoaded || !isSignedIn) {
    return null
  }
  return (
    <div className="h-full flex flex-col items-center justify-center text-2xl">
      Hello, {user.firstName} welcome to Clerk
    </div>
  )
}

export default ClientPage
