import express, { json, NextFunction, Request, Response } from 'express'
import router from './Routes/Routes'
import cors from 'cors'


const app= express() 

app.use(json()) 
app.use(cors())

app.use('/user', router)
app.use('/parcels', router)


app.use((err:Error, req:Request, res:Response,next:NextFunction)=>{
    res.json({Error:err.message})
})


const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log('Application is running');
    
})