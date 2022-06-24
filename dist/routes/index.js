"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = require("../controllers/usersController");
const router = (0, express_1.Router)();
router.get("/users", usersController_1.getUsers);
router.get("/users/:id", usersController_1.getUserById);
router.post("/users", usersController_1.createUser);
// router.put('/users/:id', getUsers)
// router.delete('/users/:id', getUsers)
exports.default = router;
