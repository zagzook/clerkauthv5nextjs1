import { UserProfile } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import { auth, currentUser } from '@clerk/nextjs/server'

const Profile = async () => {
  const { userId } = await auth()
  const isAuth = !!userId
  const user = await currentUser()
  if (!isAuth) {
    redirect('/')
  }
  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <h1 className="text-2xl mb-4">Welcome back {user?.username}</h1>
      <UserProfile />
    </div>
  )
}

export default Profile
