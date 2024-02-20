import { useState } from "react";

const AddEmployeeForm = ({ addEmployee }) => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState("");
  const [contractType, setContractType] = useState("");
  const [start, setStart] = useState("");
  const [finish, setFinish] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee({ name, position, wage, contractType, start, finish });
    setName("");
    setPosition("");
    setContractType("");
    setWage("");
    setStart("");
    setFinish("");
  };

  return (
    <form onSubmit={handleSubmit}>
        <h3>Cadastre um Funcionário</h3>
      <section>
        <label>Nome:</label>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </section>
      <section>
        <label>Posição:</label>
        <input
          type="text"
          placeholder="Posição"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
      </section>
      <section>
        <label>Contrato:</label>
        <input
          type="text"
          placeholder="Contrato"
          value={contractType}
          onChange={(e) => setContractType(e.target.value)}
        />
      </section>
      <section>
        <label>Salário:</label>
        <input
          type="number"
          placeholder="Salário"
          value={wage}
          onChange={(e) => setWage(e.target.value)}
        />
      </section>
      <section>
        <label>Início:</label>
        <input
          type="date"
          placeholder="Início"
          value={start}
          onChange={(e) => setStart(e.target.value)}
        />
      </section>
      <section>
        <label>Final:</label>
        <input
          type="date"
          placeholder="Final"
          value={finish}
          onChange={(e) => setFinish(e.target.value)}
        />
      </section>
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default AddEmployeeForm;
