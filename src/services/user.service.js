import UserModel from "../models/userModel.js";
import Respository from "./Repository.js";

export default class UserService extends Respository {
    constructor(dao) {
        super(dao, UserModel.model)
    }
}