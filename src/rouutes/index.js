import Router from "@koa/router";
import exemplesRoutes from '#components/exemple/exemple-route.js'
import tasksRoutes from "#components/tasks/tasks-route.js";

const API_V1_ROUTER = new Router({prefix: '/api/v1'})

API_V1_ROUTER.use('/exemples', exemplesRoutes.routes(), exemplesRoutes.allowedMethods())
API_V1_ROUTER.use('/tasks', tasksRoutes.routes(), tasksRoutes.allowedMethods())

export { API_V1_ROUTER }

/*
import Koa from 'koa'
import Router from '@koa/router'
import bodyParser from 'koa-bodyparser'

const app = new Koa()
const router = new Router()

const todo = [
    {
        id: 1,
        title: 'Acheter des patates'
    },
    {
        id: 2,
        title: 'Acheter des pommes'
    },
    {
        id: 3,
        title: 'Acheter des bananes'
    },
    {
        id: 4,
        title: 'Acheter des ADIDAS'
    }
]

router.get('/todos', (ctx)=>{
    ctx.body=todo
})

router.get('/todos/:id', (ctx)=>{
    const foundId = ctx.params.id
    ctx.body= todo.find((item)=> item.id===Number(foundId))
})

router.post('/todos', (ctx)=>{
    const newItem = ctx.request.body
    todo.push(newItem)
    console.log(todo)
    ctx.status=204
    console.log(ctx)
})

router.put('/todos/:id', (ctx)=>{
    const task = todo.find((t)=> t.id === Number(ctx.params.id))
    console.log(task)
    task.title = ctx.request.body.title
    ctx.body = todo
})

router.delete('/todos/:id', (ctx)=>{
    const updatedTodo = todo.filter(t=> t.id !==ctx.params.id)
    console.log(todo)
    ctx.status=200
    ctx.body= updatedTodo
})

// Exemple Middleware
// app.use(async (ctx, next)=>{
//     // if(notConnected){
//     //     ctx.body= {id:1, product:'iphone', coolor:'blue'}
//     // }else{
//     //     next()
//     // }
//     // ctx.body= {id:1, product:'iphone', coolor:'blue'}
//     next()
// })

app.use(bodyParser())
.use(router.routes())
.use(router.allowedMethods())
app.listen(process.env.PORT, ()=> console.log(`Server listening to port: ${process.env.PORT}`))
*/