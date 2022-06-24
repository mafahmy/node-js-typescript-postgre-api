"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUserById = exports.getUsers = void 0;
const database_1 = require("../database");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query("SELECT * FROM users");
        console.log(response.rows);
        return res.status(201).send(response.rows);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json("internal server error");
    }
});
exports.getUsers = getUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const response = yield database_1.pool.query("SELECT * FROM users WHERE id = $1", [id]);
        if (response.rowCount === 0) {
            return res.status(401).send("no user found");
        }
        else
            return res.json(response.rows);
    }
    catch (error) {
        console.log(error);
        return res.status(500).send("internal server error");
    }
});
exports.getUserById = getUserById;
const createUser = () => {
};
exports.createUser = createUser;
