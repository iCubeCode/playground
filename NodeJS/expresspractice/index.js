const express = require('express')
const { users } = require('./src/utils/users_data')

const app = express()

app.use(express.json({ extended: true }))

let allUsers = users;

app.get('/', (req, res) => {

    res.send("Hello World!!")

})

// GET

app.get('/api/get_users', (req, res) => {

    try {
        res.status(200).json({
            status: true,
            data: allUsers
        })
    }
    catch (err) {
        console.log('Error in Get User API', err)
        res.status(500).json({
            status: false
        })
    }

})

// GET with Params

app.get('/api/get_users/:id', (req, res) => {

    try {

        const { id } = req.params

        let userData = allUsers.filter((item) => item._id === parseInt(id))

        if (userData.length === 0) {
            res.status(204).json({
                status: false
            })
        }

        res.status(200).json({
            status: true,
            data: userData[0]
        })

    }
    catch (error) {
        console.log('Error in Get User By Id', error)
        res.status(500).json({
            status: false
        })
    }

})


// POST

app.post('/api/add_user', (req, res) => {

    try {

        const { name, email, phonenumber } = req.body

        allUsers.push({
            _id: new Date().getTime(),
            name: name,
            email: email,
            phonenumber: phonenumber
        })

        res.status(201).json({
            status: true
        })

    }
    catch (error) {
        console.log('Error in Add User API', error)
        res.status(500).json({
            status: false
        })
    }

})


// PUT

app.put('/api/update_user', (req, res) => {

    try {

        const { id, name } = req.body

        allUsers = allUsers.map((item) => item._id === id ? { ...item, "name": name } : item)

        res.status(200).json({
            status: true
        })

    }
    catch (error) {
        console.log('Error in Update User API', error)
        res.status(500).json({
            status: false
        })
    }

})


// DELETE

app.delete('/api/delete_user', (req, res) => {

    try {

        const { id } = req.body

        allUsers = allUsers.filter((item) => item._id !== id)

        res.status(200).json({
            status: true
        })

    }
    catch (error) {
        console.log('Error in Delete User API', error)
        res.status(500).json({
            status: false
        })
    }
})


app.listen(8080, () => {
    console.log('Server is started')
})