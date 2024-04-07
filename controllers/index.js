const Model = require('../models/index')
class Controller {
    static getToDos() {
        const data = Model.getAllTodos()
        console.log({
            data: data,
            message: 'Sucsesfully get todos data'
        })
    }
    static createTodos(id, name, isDone) {
        //  get all data menggunakan fs membaca database.json
        const data = Model.getAllTodos()
        // menambahkan data ke dalam array
        data.push({
            id: id,
            name: name,
            isDone: JSON.parse(isDone)
        })
        // menggunakan fs.writefile untuk memodifikasi database.json
        Model.createTodos(data)
    }
}

module.exports = Controller