const { Router } = require("express")

const { addUser, listUsers, updateUser, deleteUser } = require("./userControlles")

const userRouter = Router()

userRouter.post("/user", addUser)
userRouter.get("/user", listUsers)
userRouter.put("/user/:id", updateUser)
userRouter.delete("/user/:id", deleteUser)

module.exports = userRouter