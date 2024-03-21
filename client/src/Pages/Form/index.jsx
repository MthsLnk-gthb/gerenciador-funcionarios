import { useState } from "react";
import Input from "../../Components/Input";

const AddEmployeeForm = ({ addEmployee }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null)
  const [bornDate, setBornDate] = useState("")
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState("");
  const [contractType, setContractType] = useState("");
  const [start, setStart] = useState("");
  const [finish, setFinish] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !position || !wage || !contractType || !start || !finish) {
      alert("Por favor, preencha todos os campos.");
      return false;
    }

    addEmployee({ name, position, wage, contractType, start, finish });
    setName("");
    setPosition("");
    setContractType("");
    setWage("");
    setStart("");
    setFinish("");
  };

  const inputs = [
    {
      label: "Name",
      type: "text",
      placeholder: "Nome do funcionário",
      value: name,
      setter: setName,
    },
    {
      label: "Image",
      type: "text",
      placeholder: "Url de foto do funcionário",
      value: image,
      setter: setImage,
    },
    {
      label: "Nascimento",
      type: "date",
      placeholder: "Data de nascimento do funcionário",
      value: bornDate,
      setter: setBornDate,
    },
    {
      label: "Posição",
      type: "text",
      placeholder: "Posição do funcionário",
      value: position,
      setter: setPosition,
    },
    {
      label: "Salário",
      type: "number",
      placeholder: "Salário do funcionário",
      value: wage,
      setter: setWage,
    },
    {
      label: "Contrato",
      type: "text",
      placeholder: "Contrato do funcionário",
      value: contractType,
      setter: setContractType,
    },
    {
      label: "Início",
      type: "date",
      placeholder: "Início do contrato",
      value: start,
      setter: setStart,
    },
    {
      label: "Final",
      type: "date",
      placeholder: "Final do contrato",
      value: finish,
      setter: setFinish,
    },
  ];

  return (
    <main>
      <h3>Cadastre um Funcionário</h3>
      <form onSubmit={handleSubmit}>
        {inputs.map((input, index) => (
          <Input
            key={index}
            inputType={input.type}
            inputLabel={input.label}
            placeholderText={input.placeholder}
            value={input.value}
            inputSetter={input.setter}
          />
        ))}
        <button type="submit">Adicionar</button>
      </form>
    </main>
  );
};

export default AddEmployeeForm;
