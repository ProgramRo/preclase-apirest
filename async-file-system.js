const fs = require('fs')

const asyncWriteFile = (name, content, codify) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(name, content, codify, (err) =>{
            if (err){
                reject()
            } else {
                resolve()
            }
        })
    })
}

const asyncReadFile = (pathName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(pathName, (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}

const asyncRename = (pathName, newName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(pathName, newName, (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}

const asyncUnlink = (pathName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(pathName, (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}

module.exports = {
    asyncWriteFile,
    asyncReadFile,
    asyncRename,
    asyncUnlink
}