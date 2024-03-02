import { configDotenv } from 'dotenv'
import mongoose from 'mongoose'
configDotenv()


async function connectToMongoose(){
   
    console.log("mongodb connected")
   return mongoose.connect(process.env.MONGO_URI)
}

export default connectToMongoose