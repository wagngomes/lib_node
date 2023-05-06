const req = require("express/lib/request")
const {User} = require('../models/index')

exports.create = async(req, res, next) => {
    
    try {
        const {firstName, password, email} = req.body
        if (firstName.length == 0){
            return res.json({msg: 'firstName não pode ser vazio'})
        }
        if (password.length == 0){
            return res.json({msg: 'password não pode ser vazio'})
        }
        if (password.length < 6){
            return res.json({msg: 'password não pode ter menos de 6 caracteres'})
        }
        const userValid = await User.findOne({where: {email}})
        if (userValid){
            return res.json({msg: 'user exist on database'})
        }

        const newUser = await User.create(req.body)
        res.json(newUser)

    }catch(error){
        console.log(error)
        res.status(500)
    }
}

exports.listAll = async(req, res, next) => {
    try {
        const userList = await User.findAll()
        res.json(userList)
    }catch(error){
        console.log(error)
        res.status(500)
    }

}

exports.listOne = async(req, res, next) => {
    try {
        const id = req.params.id

        const userDatails = await User.findOne({where: {id}})
        if (!userDatails){
            return res.json({msg: 'usuario não encontrado'})
        }
        return res.json(userDatails)

    }catch(error){
        console.log(error)
        res.status(500)
    }
}   

exports.update = async(req, res, next) => {
    try {
        const id = req.params.id

        const updatedUser = await User.update(req.body, {where: {id}})
        
        return res.json({msg: 'usuario atualizado'})

    }catch(error){
        console.log(error)
        res.status(500)
    }

}

exports.delete = async (req, res, next) => {
    try {
        const id = req.params.id

        const userDeleted = await User.destroy({where: {id}})

        return res.json({msg: `usuário ${id}não encontrado`})
    }catch(error){
        console.log(error)
        res.status(500)
    }

}