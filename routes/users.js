import express from "express";
import { v4 as uuidv4 } from "uuid";
import { Router } from "express";
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
router.post("/", (req, res) => {
  const user = { ...req.body, id: uuidv4() };
  users.push(user);
  console.log(`${req.body} added to database`);
  res.send(users);
});

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

export default router;
