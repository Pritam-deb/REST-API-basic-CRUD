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

export const createUser = (req, res) => {
  const user = { ...req.body, id: uuidv4() };
  users.push(user);
  console.log(`${req.body} added to database`);
  res.send(users);
};

export const userWithID = (req, res) => {
  const { id } = req.params;
  const result = users.find((user) => user.id == id);
  res.send(result);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(users);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id == id);
  const { firstName, lastName, age } = req.body;
  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send(users);
};
