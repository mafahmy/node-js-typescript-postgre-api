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
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getUsers = void 0;
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
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email } = req.body;
        yield database_1.pool.query("INSERT INTO users (name, email) values($1, $2)", [
            name,
            email,
        ]);
        return res.send({
            message: "user created",
            body: {
                name,
                email,
            },
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).send("internal error");
    }
});
exports.createUser = createUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const { name, email } = req.body;
        yield database_1.pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id]);
        return res.status(201).send(`user ${id} updated `);
    }
    catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        yield database_1.pool.query('DELETE FROM users WHERE id = $1', [id]);
        return res.status(200).send(`user ${id} deleted`);
    }
    catch (error) {
        return res.status(500).send('error');
    }
});
exports.deleteUser = deleteUser;
