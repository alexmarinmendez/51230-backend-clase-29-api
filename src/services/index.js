import MongoDAO from "../models/mongoDAO.js";
import UserService from './user.service.js'
import config from "../config/config.js";

let dao
switch(config.app.persistence) {
    case "MONGO": 
        dao = new MongoDAO(config.mongo)
        break
}

export const userService = new UserService(dao)