const User = require("./userModel")

exports.addUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body)
        res.status(200).send({ name: newUser })
    } catch (err) {
        console.log(err)  
        res.status(500).send({ error: err.message })    
    }
}

exports.listUsers = async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).send({ users })
    } catch (err) {
        console.log(err)
        res.status(500).send({ error: err.message })
    }
}

exports.updateUser = async (req, res) => {
    const id = req.params.id
    try {
        const user = await User.updateOne(
            { _id: id },
            { name: req.body.name }
        )
        res.status(200).send({ user })
    } catch (err) {
        console.log(err)
        res.status(500).send({ error: err.message })
    }
}

exports.deleteUser = async (req, res) => {
    const id = req.params.id
    try {
        const user = await User.deleteOne({ _id: id })
        res.status(200).send({ user })
    } catch (err) {
        console.log(err)
        res.status(500).send({ error: err.message })
    }
}