import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

const AddEmployeeForm = ({ addEmployee }) => {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [bornDate, setBornDate] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState("");
  const [contractType, setContractType] = useState("");
  const [start, setStart] = useState("");
  const [finish, setFinish] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);

    if (
      !name ||
      !image ||
      !bornDate ||
      !position ||
      !wage ||
      !contractType ||
      !start ||
      !finish
    ) {
      return false;
    }

    addEmployee({
      name,
      image,
      bornDate,
      position,
      wage,
      contractType,
      start,
      finish,
    });
    setName("");
    setImage("");
    setBornDate("");
    setPosition("");
    setContractType("");
    setWage("");
    setStart("");
    setFinish("");
    setValidated(false);
  };

  return (
    <>
      <h2>Cadastre um funcionário</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Nome do funcionário</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nome do funcionário"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid">
              Por favor, preencha este campo.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Foto do funcionário</Form.Label>
            <Form.Control
              type="text"
              placeholder="URL de foto do funcionário"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid">
              Por favor, preencha este campo.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Data de nascimento do funcionário</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="date"
                placeholder="Data de nascimento do funcionário"
                value={bornDate}
                onChange={(e) => setBornDate(e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Por favor, preencha este campo.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Posição do funcionário</Form.Label>
            <Form.Control
              type="text"
              placeholder="Posição do funcionário"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid">
              Por favor, preencha este campo.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>Salário do funcionário</Form.Label>
            <Form.Control
              type="number"
              placeholder="Salário do funcionário"
              value={wage}
              onChange={(e) => setWage(e.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid">
              Por favor, preencha este campo.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Contrato do funcionário</Form.Label>
            <Form.Control
              type="text"
              placeholder="Contrato do funcionário"
              value={contractType}
              onChange={(e) => setContractType(e.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid">
              Por favor, preencha este campo.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom06">
            <Form.Label>Início do contrato</Form.Label>
            <Form.Control
              type="date"
              placeholder="Início do contrato"
              value={start}
              onChange={(e) => setStart(e.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid">
              Por favor, preencha este campo.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom07">
            <Form.Label>Final do contrato</Form.Label>
            <Form.Control
              type="date"
              placeholder="Final do contrato"
              value={finish}
              onChange={(e) => setFinish(e.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid">
              Por favor, preencha este campo.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button type="submit">Adicionar</Button>
      </Form>
    </>
  );
};

export default AddEmployeeForm;
