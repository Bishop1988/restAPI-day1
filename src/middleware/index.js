const bcrypt = require("bcryptjs")
const User = require("../user/userModel")

exports.hashPass = async (req, res, next) => {
    try {
        req.body.pass = await bcrypt.hash(req.body.pass, 8)
        next()
    } catch (err) {
        console.log(err)
        res.status(500).send({ error: err.message })
    }
}

exports.authenticate = async (req, res, next) => {
    const account = await User.findOne({ email: req.body.email })
    if (!account) {
        return res.status(500).send('cannot find user')
    }
    try {
        if (await bcrypt.compare(req.body.pass, account.pass)) {
            req.user = account
            next()
        } else {
            res.status(500).send("Invalid password")
        }
    } catch (err) {
        console.log(err)
        res.status(500).send({ error: err.message })
    }
}

//signup route
//login route
// bcrypt unhashing