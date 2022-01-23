import express from "express";
import { Router } from "express";

const router = Router();

const users = [
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
  users.push(req.body);
  console.log(`${req.body} added to database`);
  res.send(users);
});

export default router;
