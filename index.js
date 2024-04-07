const process = require('process')
const Controller = require('./controllers/index')

const input = process.argv[2]
switch (input) {
    case 'get':
        Controller.getToDos()
        break;

    case 'create':
        const id = process.argv[3]
        const name = process.argv[4]
        const isDone = process.argv[5]
        Controller.createTodos(id, name, isDone)
        break;

    case 'delete':
        break;

    default:
        console.log('Syntax error')
        break;
}