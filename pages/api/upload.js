import multiparty from 'multiparty'
import {v2 as cloudinary} from 'cloudinary'
import detenv from 'dotenv'




export default async function handle(req, res){
    var url = ''
    const form = new multiparty.Form();
 
    const {fields,files} = await new Promise((resolve,reject) => {
        form.parse(req, (err, fields, files) => {
          if (err) reject(err);
          resolve({fields,files});
        });
      });

    //console.log(files)

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
     

    // try{    
    //     const { secure_url } = await cloudinary.uploader.upload(files.file[0].path,uploadOptions);
    //     url = secure_url;
    //    // console.log(secure_url)
    // }catch (err) {
    //     console.error('cloudinary Error : ', err)
    // }
    

    return res.json({links})
  

}
    

   

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



export const config =  {
    api: {bodyParser : false}
}

