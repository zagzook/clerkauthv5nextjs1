import mongoose, { Mongoose } from 'mongoose'

const MONGODB_URL = process.env.MONGODB_URL!

interface MongooseConn {
  conn: Mongoose | null
  promise: Promise<Mongoose> | null
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let cached: MongooseConn = (global as any).mongoose

if (!cached) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cached = (global as any).mongoose = { conn: null, promise: null }
}

export const connect = async () => {
  if (cached.conn) return cached.conn

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URL, {
      dbName: 'zagzook',
      bufferCommands: false,
      connectTimeoutMS: 30000,
    })

  cached.conn = await cached.promise

  return cached.conn
}
