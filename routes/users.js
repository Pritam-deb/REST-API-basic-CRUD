import express from "express";
import { v4 as uuidv4 } from "uuid";
import { Router } from "express";

import {
  createUser,
  userWithID,
  deleteUser,
  updateUser,
} from "../controllers/users.js";

const router = Router();

router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", createUser);

router.get("/:id", userWithID);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

export default router;
