const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let employees = [];

app.get("/", (req, res) => {
  res.json(employees);
});

app.post("/", (req, res) => {
  const { name, image, bornDate, position, contractType, wage, start, finish } = req.body;
  const id = uuidv4();
  const newEmployee = { id, name, image, bornDate, position, contractType, wage, start, finish };

  const existingEmployee = employees.find(
    (employee) => employee.name.trim() === name.trim()
  );
  if (existingEmployee) {
    return res
      .status(400)
      .json({ message: "Já existe um funcionário com esse nome" });
  }
  employees.push(newEmployee);
  res.status(201).json(newEmployee);
});

app.delete("/:id", (req, res) => {
  const id = req.params.id;
  const index = employees.findIndex((employee) => employee.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Employee not found" });
  }

  employees.splice(index, 1);
  res.status(200).json({ message: "Employee deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});