import express from "express";
import { v4 as uuidv4 } from "uuid";
import { Router } from "express";

import { createUser } from "../controllers/users.js";

const router = Router();

let users = [
  {
    firstName: "Josh",
    lastName: "Doe",
    age: 35,
    id: 1,
  },
  {
    firstName: "Jean",
    lastName: "Poe",
    age: 38,
    id: 2,
  },
];

//SHOW ALL USERS
router.get("/", (req, res) => {
  res.send(users);
});

//ADD NEW USERS
router.post("/", createUser);

//SHOW ONLY THE USER WITH GIVEN ID
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const result = users.find((user) => user.id == id);
  res.send(result);
});

//DELETE THE USER
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(users);
});

//UPDATE A USER
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id == id);
  const { firstName, lastName, age } = req.body;
  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send(users);
});

export default router;
