import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";


const EmployeeList = ({ employees, deleteEmployee }) => {
  return (
    <main id="tela-lista">
      <h3>Lista Funcionários: </h3>
      <ul className="lista-funcionarios">
        {employees.map((employee) => (
          <Card key={employee.id} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={employee.img} />
            <Card.Body>
              <Card.Title>{employee.name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Nascimento: {employee.bornDate}</ListGroup.Item>
              <ListGroup.Item>Cargo: {employee.position}</ListGroup.Item>
              <ListGroup.Item>Contrato: {employee.contractType}</ListGroup.Item>
              <ListGroup.Item>
                Salário: R${parseFloat(employee.wage).toLocaleString("pt-BR")}
              </ListGroup.Item>
              <ListGroup.Item>Começo: {employee.start}</ListGroup.Item>
              <ListGroup.Item>Término: {employee.finish}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Button
                variant="danger"
                onClick={() => deleteEmployee(employee.id)}
              >
                Remover
              </Button>
            </Card.Body>
          </Card>
        ))}
      </ul>
    </main>
  );
};

export default EmployeeList;
