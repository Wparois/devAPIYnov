import Router from '@koa/router'
import * as TaskControllers from '#components/tasks/tasks-controllers.js'

const tasks = new Router()

tasks.get('/', TaskControllers.findAll)

tasks.get('/:id', TaskControllers.findById)

tasks.post('/', TaskControllers.create)

tasks.put('/:id', TaskControllers.update)

tasks.delete('/:id', TaskControllers.deleteById)

export default tasks