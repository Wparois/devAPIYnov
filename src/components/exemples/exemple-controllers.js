import Exemple from "#components/exemple/exemple-model.js";
import Joi from "joi"

export async function index(ctx){
    try{
        ctx.body = await Exemple.find({})
    }catch(err){
        console.log(err);
        ctx.badRequest({message: err.message})
    }
}

export async function create(ctx){
    try{
        const exempleValidationSchema= Joi.object({
            name: Joi.string().required(),
            description:Joi.string(),
            price: Joi.number().required(),
            colors: Joi.array().has(Joi.string()),
        })
        const {error} = exempleValidationSchema.validate(ctx.request.body)
        if(error){ 
            throw new Error(error)
        }
        await Exemple.create(ctx.request.body)
        ctx.status = 201
    } catch(err){
        console.log(err);
        ctx.badRequest({message: err.message})
    }
}