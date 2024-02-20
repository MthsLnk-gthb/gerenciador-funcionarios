const EmployeeList = ({ employees, deleteEmployee }) => {
  return (
    <main>
        <h3>Lista Funcionários: </h3>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            <section>
              <h2>{employee.name}</h2>
            </section>
            <section>
              <h3>{employee.position}</h3>
            <span>Tipo de contrato: {employee.contractType}</span>
            <h4>Salário: R${employee.wage}</h4>
            </section>
            <section>
                <h5>Começo: {employee.start}</h5>
                <h5>Começo: {employee.finish}</h5>
            </section>
            <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default EmployeeList;
