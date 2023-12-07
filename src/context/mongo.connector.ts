import { MongoClient, Collection, Db } from 'mongodb'
import dotenv from 'dotenv'

dotenv.config()

const collections: { [key: string]: Collection } = {}
const username = process.env.MONGO_USERNAME || 'username'
const password = process.env.MONGO_PASSWORD || 'password'
const host = process.env.MONGO_HOST || 'localhost'
const port = process.env.MONGO_PORT || '27017'
const dbName = process.env.MONGO_DB_NAME
const url = `mongodb+srv://${username}:${password}@${host}/`

async function createMongoConnection() {
  try {
    const client = await MongoClient.connect(url)
    const db = client.db(dbName)
    addCollections(db)
    console.log('Connected to MongoDB')
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
  }
}

const addCollections = (db: Db) => {
  collections.users = db.collection('users')
}

createMongoConnection()

export default createMongoConnection
export { collections }
