import "./style.scss";

const EmployeeList = ({ employees, deleteEmployee }) => {
  return (
    <main id="tela-lista">
      <h3>Lista Funcionários: </h3>
      <ul className="lista-funcionarios">
        {employees.map((employee) => (
          <li key={employee.id} className="card-funcionario">
            <h2>{employee.name}</h2>

            <h3>{employee.position}</h3>
            <span>Tipo de contrato: {employee.contractType}</span>
            <h4>
              Salário: R${parseFloat(employee.wage).toLocaleString("pt-BR")}
            </h4>

            <h5>Começo: {employee.start}</h5>
            <h5>Término: {employee.finish}</h5>

            <button onClick={() => deleteEmployee(employee.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default EmployeeList;
