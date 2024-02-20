import { useState, useEffect } from "react"
import axios from "axios"
import AddEmployeeForm from "./Pages/Form"
import EmployeeList from "./Pages/List"

function App() {
   const [employees, setEmployees] = useState([]);

     useEffect(() => {
       axios
         .get("http://localhost:5000/employees")
         .then((response) => setEmployees(response.data));
     }, []);

      const addEmployee = (employee) => {
        axios
          .post("http://localhost:5000/employees", employee)
          .then((response) => {
            setEmployees([...employees, response.data]);
          });
      };

       const deleteEmployee = (id) => {
         axios.delete(`http://localhost:5000/employees/${id}`).then(() => {
           setEmployees(employees.filter((employee) => employee.id !== id));
         });
       };


  return (
    <>
      <main className="App">
        <AddEmployeeForm addEmployee={addEmployee} />
        <EmployeeList employees={employees} deleteEmployee={deleteEmployee} />
      </main>
    </>
  );
}

export default App
