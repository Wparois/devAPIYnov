import Task from "#components/tasks/tasks-model.js";
import Joi from "joi";

export async function findAll(ctx){
    try{
        ctx.body = await Task.find({});
    }catch(error){
        ctx.badRequest({message: error.message})
    }
}

export async function findById(ctx){
    try{
        const idValidationSchema = Joi.object({
            id:Joi.string().required()
        })
        const { error } = idValidationSchema.validate({id:ctx.params.id})
        if(error){
            throw new Error(error)
        }

        ctx.body = await Task.findById(ctx.params.id)
    } catch(err){
        ctx.badRequest({message: err.message})
    }
}

export async function create(ctx){
    try{
        const created_at = new Date();
        const updated_at = new Date();
        const taskValidationSchema = Joi.object({
            title:Joi.string().required(),
            description: Joi.string(),
        })
        const { error } = taskValidationSchema.validate(ctx.request.body)
        if(error) throw new Error(error)
        await Task.create({title : ctx.request.body.title, description: ctx.request.body.description, created_at, updated_at})
        ctx.status = 201
    }catch(err){
        console.log(err)
        ctx.badRequest({message: err.message})
    }
}

export async function update(ctx){
    try{
        const idValidationSchema = Joi.object({
            id:Joi.string().required(),
            title:Joi.string(),
            description:Joi.string()
        })
        const { error } = idValidationSchema.validate({
            id:ctx.params.id, 
            title:ctx.request.body.title, 
            description:ctx.request.body.description})
        if(error){
            throw new Error(error)
        }
        const updatedTask = {
            updated_at : new Date(),
        }
        if(ctx.request.body.title) updatedTask.title = ctx.request.body.title
        if(ctx.request.body.description) updatedTask.description = ctx.request.body.description

        await Task.findByIdAndUpdate(ctx.params.id, updatedTask)
        ctx.status = 200

    } catch(err){
        ctx.badRequest({message: err.message})
    }
}


export async function deleteById(ctx){
    try{
        const idValidationSchema = Joi.object({
            id:Joi.string().required()
        })
        const { error } = idValidationSchema.validate({id:ctx.params.id})
        if(error){
            throw new Error(error)
        }

        ctx.body = await Task.deleteOne({id:ctx.params.id})
    } catch(err){
        ctx.badRequest({message: err.message})
    }
}