const {
    asyncWriteFile,
    asyncReadFile
} = require('./async-file-system')

const createUser = async (user) => {
    const preData = await asyncReadFile('users.json')
    const preDataJSON = JSON.parse(preData)

    preDataJSON.push(user)

    await asyncWriteFile('users.json', JSON.stringify(preDataJSON), 'utf8')
}

const getAllUser = async () => {
    const preData = await asyncReadFile('users.json')
    const preDataJSON = JSON.parse(preData)
    return preDataJSON
}

const getUserByID = async (userId) => {
    const data = await asyncReadFile('users.json')
    const dataArray = JSON.parse(data)

    const dataUserID = dataArray.find(user => {
        return user.id === userId
    })

    return dataUserID
}

const removeUserById = async (userId) => {
    const data = await asyncReadFile('users.json')
    const dataArray = JSON.parse(data)

    const dataUserID = dataArray.filter(user => {
        return user.id !== userId
    })

    await asyncWriteFile('users.json', JSON.stringify(dataUserID), 'utf8')
    return userId
}

/*createUser({name: 'Jose', id: '7'}).then(() => {
    console.log('Exito')
}).catch((err) => {
    console.log(err)
})

getAllUser().then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})

getUserByID('5').then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})*/

module.exports = {
    createUser,
    getAllUser,
    getUserByID,
    removeUserById
}