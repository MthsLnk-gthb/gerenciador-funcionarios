import { useState, useEffect } from "react";
import axios from "axios";
import AddEmployeeForm from "./Pages/Form";
import EmployeeList from "./Pages/List";

function App() {
  const [employees, setEmployees] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/employees")
      .then((response) => setEmployees(response.data))
      .catch((error) => console.error("Erro ao carregar funcionários:", error));
  }, []);

  const addEmployee = (employee) => {
    axios
      .post("http://localhost:5000/employees", employee)
      .then((response) => {
        setEmployees([...employees, response.data]);
        setErrorMessage(""); // Limpar a mensagem de erro se o envio for bem-sucedido
      })
      .catch((error) => {
        setErrorMessage(
          "Erro ao adicionar funcionário: " + error.response.data.message
        );
      });
  };

  const deleteEmployee = (id) => {
    axios
      .delete(`http://localhost:5000/employees/${id}`)
      .then(() => {
        setEmployees(employees.filter((employee) => employee.id !== id));
      })
      .catch((error) => console.error("Erro ao excluir funcionário:", error));
  };

  return (
    <>
      <main className="App">
        <AddEmployeeForm
          addEmployee={addEmployee}
          errorMessage={errorMessage}
        />
        <EmployeeList employees={employees} deleteEmployee={deleteEmployee} />
      </main>
    </>
  );
}

export default App;
