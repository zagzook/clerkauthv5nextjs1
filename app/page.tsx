'use client'

import { useUser } from '@clerk/nextjs'

export default function Home() {
  const { isLoaded, isSignedIn, user } = useUser()

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-screen text 2xl">
        <span className="loading loading-spinner loading-lg"> Loading...</span>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4 items-center justify-center h-full">
      <div className="text-2xl">HOME PAGE </div>
      {isSignedIn && <div>Signed in as {user?.firstName}</div>}
    </div>
  )
}
