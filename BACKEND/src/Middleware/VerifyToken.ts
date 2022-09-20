
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import { NextFunction, Request, Response } from 'express'
dotenv.config()

import { Data } from './../Interfaces/interfaces';

interface Extended extends Request{
    info?:Data
}

export const VerifyToken = (req:Extended, res:Response, next:NextFunction)=>{

try {

    const token = req.headers['token'] as string

    if(!token){
        return res.json({message:' you are not allowed to access this page'});  
       
    }
    
    const data = jwt.verify(token, process.env.KEY as string) as Data
     req.info = data

} catch (error) {
    return res.json ({error}) 
}

next()

}