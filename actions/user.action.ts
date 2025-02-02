'use server'

import User from '@/models/user.model'
import { connect } from '@/db'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function createUser(user: any) {
  try {
    await connect()
    const newUser = await User.create(user)
    return JSON.parse(JSON.stringify(newUser))
  } catch (error) {
    console.log('error', error)
  }
}

export async function getUser(userId: string) {
  try {
    await connect()
    const user = await User.findOne({ where: { clerkId: userId } })
    return JSON.parse(JSON.stringify(user))
  } catch (error) {
    console.log('error', error)
  }
}
