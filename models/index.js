const fs = require('fs')
class Model {
    static getAllTodos () {
        const data = JSON.parse(fs.readFileSync('database.json'))
        return data
    }
    static createTodos(data) {
        fs.writeFileSync('database.json', JSON.stringify(data, null, 2))
    }
}

module.exports = Model