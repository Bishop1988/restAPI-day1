const { Router } = require("express")

const { signUp, listUsers, updateUser, deleteUser, login } = require("./userControlles")
const { hashPass, authenticate } = require("../middleware")

const userRouter = Router()

userRouter.post("/user", hashPass, signUp)
userRouter.post("/user/login", authenticate, login)
userRouter.get("/user", listUsers)
userRouter.put("/user/:id", updateUser)
userRouter.delete("/user/:id", deleteUser)

module.exports = userRouter