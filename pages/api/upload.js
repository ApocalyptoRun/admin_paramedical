import multiparty from 'multiparty'
import {v2 as cloudinary} from 'cloudinary'
import detenv from 'dotenv'
import { mongooseConnect } from '@/lib/mongoose'
import { isAdminRequest } from './auth/[...nextauth]';




export default async function handle(req, res){
    await mongooseConnect();
    await isAdminRequest(req,res);

    var url = ''
    const form = new multiparty.Form();
    const {fields,files} = await new Promise((resolve,reject) => {
        form.parse(req, (err, fields, files) => {
          if (err) reject(err);
          resolve({fields,files});
        });
      });

    detenv.config();

    cloudinary.config({
       cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
       api_key: process.env.CLOUDINARY_API_KEY,
       api_secret: process.env.CLOUDINARY_API_SECRET,
    })

    const uploadOptions = {
        folder : 'Products_Images'
    }

    const links = []
    for(const file of files.file){
        const ext = file.originalFilename.split('.').pop();
        const newFilename = Date.now() + '.' + ext;
        
    try{    
        const { secure_url } = await cloudinary.uploader.upload(file.path,uploadOptions);
        links.push(secure_url)
    }catch (err) {
        console.error('cloudinary Error : ', err)
    }
    
    }
     
    return res.json({links})
  

}
    


export const config =  {
    api: {bodyParser : false}
}

