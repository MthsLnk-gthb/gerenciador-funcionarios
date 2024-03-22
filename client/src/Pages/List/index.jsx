import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";

const EmployeeList = ({ employees, deleteEmployee }) => {
  return (
    <>
      {employees && employees.length > 0 ? (
        <>
          <h3>Lista Funcionários: </h3>
          <Accordion defaultActiveKey="0">
            {employees.map((employee) => (
              <Accordion.Item key={employee.id} eventKey={employee.id}>
                <Accordion.Header>{employee.name}</Accordion.Header>
                <Accordion.Body>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={employee.image} />
                    <Card.Body>
                      <Card.Title>{employee.name}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        Nascimento: {employee.bornDate}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Cargo: {employee.position}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Contrato: {employee.contractType}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Salário: R$
                        {parseFloat(employee.wage).toLocaleString("pt-BR")}
                      </ListGroup.Item>
                      <ListGroup.Item>Começo: {employee.start}</ListGroup.Item>
                      <ListGroup.Item>
                        Término: {employee.finish}
                      </ListGroup.Item>
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
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </>
      ) : (
        <h3>A lista está vazia.</h3>
      )}
    </>
  );
};

export default EmployeeList;
