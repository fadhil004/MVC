const fs = require('fs') //fileSystem

const data = [{
    name: 'Budi',
    age: 30
}]

fs.writeFileSync('test.json', JSON.stringify(data, null, 2))

fs.writeFile('testAsync.txt', 'test tulis async', (err) => {
    if (!err){
        console.log('berhasil membuat teks')
    }
})

const dataRead = JSON.parse(fs.readFileSync('test.json', 'utf-8'))
console.log(dataRead[0])

dataRead.push({
    name: 'Sisil',
    age: 25
})

fs.writeFileSync('test.json', JSON.stringify(dataRead, null, 2))

// fs.readFile('test.json', 'utf-8', (err, data) => {
//     console.log(JSON.parse(data))
// })

