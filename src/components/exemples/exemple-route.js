import Router from '@koa/router'
import * as ExempleControllers from '#components/exemple/exemple-controllers.js'


const exemples = new Router()

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

exemples.get('/', ExempleControllers.index)

exemples.get('/:id', (ctx)=>{
    const foundId = ctx.params.id
    ctx.body= todo.find((item)=> item.id===Number(foundId))
})

exemples.post('/', ExempleControllers.create)

exemples.put('/:id', (ctx)=>{
    const task = todo.find((t)=> t.id === Number(ctx.params.id))
    console.log(task)
    task.title = ctx.request.body.title
    ctx.body = todo
})

exemples.delete('/:id', (ctx)=>{
    const updatedTodo = todo.filter(t=> t.id !==ctx.params.id)
    console.log(todo)
    ctx.status=200
    ctx.body= updatedTodo
})

export default exemples