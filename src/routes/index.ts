import { Router } from "express";
import {
  createUser,
  getUserById,
  getUsers,
} from "../controllers/usersController";
const router = Router();

router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users", createUser);
// router.put('/users/:id', getUsers)
// router.delete('/users/:id', getUsers)

export default router;
