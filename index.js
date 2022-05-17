const http = require('http')
const url = require('url')

const { createUser, getAllUser, getUserByID, removeUserById } = require('./usersRepository.js')

const server = http.createServer(async (req, res) => {
    const urlx = new URL(req.url, 'http://localhost:3000')
    const method = req.method
    console.log(method)

    if (urlx.pathname === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('<h1>Hello World</h1>')
        res.end()
    }

    else if (urlx.pathname === '/users' && method === 'GET') {
        const data = await getAllUser()
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.write(JSON.stringify(data))
        res.end()
    }

    else if (urlx.pathname === '/getby-id') { // Ejemplo: http://localhost:3000/getby-id?id=3
        const parametros = url.parse(req.url, true).query
        const data = await getUserByID(parametros.id)
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.write(JSON.stringify(data))
        res.end()
    }

    else if (urlx.pathname === '/users' && method === 'POST') { // Ejemplo: http://localhost:3000/create-user?name=Pablo&id=11
        const parametros = url.parse(req.url, true).query
        await createUser({ name: parametros.name, id: `${parametros.id}` })

        const data = await getUserByID(parametros.id)
        res.writeHead(201, { 'Content-Type': 'application/json' }) // Debe ser 201 cuando se crea y debe ser con el motodo POST
        res.write(JSON.stringify(data))
        res.end()
    }
    else if (urlx.pathname === '/users' && method === 'DELETE') { // Ejemplo: http://localhost:3000/getby-id?id=3
        const parametros = url.parse(req.url, true).query
        const id = await removeUserById(parametros.id)
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.write(JSON.stringify(id))
        res.end()
    }
    else {
        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.write('Not found')
        res.end()
    }
})

server.listen(3000, () => {
    console.log('Server runing at http://localhost:3000')
})