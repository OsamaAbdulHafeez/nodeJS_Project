import express from 'express'
import dotenv from 'dotenv'
import connectDB from './utils/connectDB.js'
import mongoose from 'mongoose'

dotenv.config()
const app = express()

const PORT = process.env.PORT
connectDB()

app.use(express.json())


app.get("/",(req,res)=>{
    return res.send("Hello World")
})

app.get('/api/getCollections', async(req,res)=>{
    try {
        const collections = await mongoose.connection.db.listCollections().toArray();
        return res.status(200).send({
            status:true,
            error:false,
            message:"Get All Tables",
            data:collections
        })
    } catch (error) {
        console.log(error)
    }
})

app.listen(PORT,(req,res)=>{
    console.log(`Server is Connect is ${PORT}`)
})