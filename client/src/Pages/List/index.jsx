import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

const EmployeeList = ({ employees, deleteEmployee }) => {
  return (
    <>
      {employees && employees.length > 0 ? (
        <>
          <h2 style={{textAlign: "center", fontSize: "1.5rem", marginTop: "5dvh"}}>Lista Funcionários: </h2>
          <article style={{display: "flex", flexWrap: "wrap", gap: "15px", justifyContent: "center", alignItems: "center", margin: "5dvh auto"}}>
            {employees.map((employee) => (
                  <Card style={{ width: "18rem" }} key={employee.name}>
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
            ))}
          </article>
        </>
      ) : (
          
        <h3>A lista está vazia.</h3>
      )}
    </>
  );
};

export default EmployeeList;
