'use server'

import User from '@/models/user.model'
import { connect } from '@/db'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function createUser(user: any) {
  try {
    await connect()
    const newUser = await User.create(user)
    return JSON.parse(JSON.stringify(newUser))
  } catch (error) {}
}
