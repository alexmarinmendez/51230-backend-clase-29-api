import { userService } from "../services/index.js";

const getUsers = async (req, res) => {
    let results = await userService.get()
    res.send(results)
}

const saveUser = async(req, res) => {
    let result = await userService.save(req.body)
    res.send(result)
}

export default { getUsers, saveUser }