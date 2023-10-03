import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/category";
import {isAdminRequest } from "./auth/[...nextauth]";

export default async function handle(req, res) {
    const {method} = req;
    await mongooseConnect();
    //await isAdminRequest(req,res);

    if(method === 'GET') {
        const categories = await Category.find().populate('parent')
        res.json(categories);
    }

    if(method === 'POST') {
        const {name,parentCategory,properties} = req.body;
        var CategoryDoc = null
        if(parentCategory){
             CategoryDoc = await Category.create({
                name,
                parent:parentCategory,
                properties
            });
        } else {
             CategoryDoc = await Category.create({
                name
            });
        }
        res.json(CategoryDoc)
    }

    
    if(method === 'PUT') {
        const {name,parentCategory,properties,_id} = req.body;
        const CategoryDoc = await Category.updateOne({_id}, {
            name,
            parent:parentCategory,
            properties
        });
        res.json(CategoryDoc)
    }

    if(method === 'DELETE') {
        const {_id} = req.query;
        await Category.deleteOne({_id})
        res.json('ok')
    }
}