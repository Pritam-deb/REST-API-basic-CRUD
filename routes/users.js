import express from "express";
import { v4 as uuidv4 } from "uuid";
import { Router } from "express";
const router = Router();

let users = [
  {
    firstName: "Josh",
    lastName: "Doe",
    age: 35,
  },
  {
    firstName: "Jean",
    lastName: "Poe",
    age: 38,
  },
];

router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  // let user = req.body;
  // const userId = uuidv4();
  const user = { ...req.body, id: uuidv4() };
  users.push(user);
  console.log(`${req.body} added to database`);
  res.send(users);
});

export default router;
