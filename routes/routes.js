module.exports = app => {

    const routesController = require('../controllers/routes.controller')
    const userController = require('../controllers/user.controller')

    const router = require('express').Router

    app.get('/', routesController.hello )
    app.get('/users', userController.listAll)
    app.get('/user/:id', userController.listOne)
    app.post('/user', userController.create)
    app.put('/user/:id', userController.update)
    app.delete('/user/:id', userController.delete)

}
