import mutiparty from 'multiparty'
// import fs from 'fs'
import {v2 as cloudinary} from 'cloudinary'
import detenv from 'dotenv'
import { resolve } from 'path'
import { rejects } from 'assert'
import { error } from 'console'

export default async function handle(req, res){
 
    console.log(req.body)

    const form = new mutiparty.Form()

    form.parse(req, (error, fields, files) => {
        if(error) return console.error(error)

        console.log(fields)

        console.log(files)
    })

    return res.json('ok')
    
    

   

    //  detenv.config();

    //  cloudinary.config({
    //     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    //     api_key: process.env.CLOUDINARY_API_KEY,
    //     api_secret: process.env.CLOUDINARY_API_SECRET,
    //  })

    //  try {
    //     const result = await cloudinary.uploader.upload(tmpFileName, {
    //         folder: 'Products_Images',
    //     })
    //  } catch (error) {
    //     console.error('Error : ',error);
    //     throw error;
    //  }

 


//   const form = new mutiparty.Form();

//   const {fields, files} = await new Promise((resolve, reject) =>{
//     form.parse(req,  (err, fields, files)=>{
//         if(err) reject(err);
//         resolve({fields,files})
//   })
//   })
//   console.log('length:',files.file);
   
//   return res.json('ok')

}

// export const config =  {
//     api: {bodyParser : false}
// }

