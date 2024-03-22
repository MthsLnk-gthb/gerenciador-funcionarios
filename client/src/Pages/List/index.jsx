import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

const EmployeeList = ({ employees, deleteEmployee }) => {
  return (
    <>
      {employees && employees.length > 0 ? (
        <>
          <h2
            style={{
              textAlign: "center",
              fontSize: "1.5rem",
              marginTop: "5dvh",
            }}
          >
            Lista de funcionários:{" "}
          </h2>
          <article
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
              justifyContent: "center",
              alignItems: "center",
              margin: "5dvh auto",
            }}
          >
            {employees.map((employee) => (
              <Card style={{ width: "18rem" }} key={employee.name}>
                <Card.Img
                  variant="top"
                  src={employee.image}
                  style={{ backgroundColor: "#025b8a" }}
                />
                <Card.Body style={{ backgroundColor: "#262626" }}>
                  <Card.Title
                    style={{ backgroundColor: "inherit", color: "#fff" }}
                  >
                    {employee.name}
                  </Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item
                    style={{ backgroundColor: "#262626", color: "#fff" }}
                  >
                    Nascimento: {employee.bornDate}
                  </ListGroup.Item>
                  <ListGroup.Item
                    style={{ backgroundColor: "#262626", color: "#fff" }}
                  >
                    Cargo: {employee.position}
                  </ListGroup.Item>
                  <ListGroup.Item
                    style={{ backgroundColor: "#262626", color: "#fff" }}
                  >
                    Contrato: {employee.contractType}
                  </ListGroup.Item>
                  <ListGroup.Item
                    style={{ backgroundColor: "#262626", color: "#fff" }}
                  >
                    Salário: R$
                    {parseFloat(employee.wage).toLocaleString("pt-BR")}
                  </ListGroup.Item>
                  <ListGroup.Item
                    style={{ backgroundColor: "#262626", color: "#fff" }}
                  >
                    Começo: {employee.start}
                  </ListGroup.Item>
                  <ListGroup.Item
                    style={{ backgroundColor: "#262626", color: "#fff" }}
                  >
                    Término: {employee.finish}
                  </ListGroup.Item>
                </ListGroup>
                <Card.Body style={{ backgroundColor: "#262626" }}>
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
        <h2
          style={{ textAlign: "center", fontSize: "1.5rem", marginTop: "5dvh" }}
        >
          A lista está vazia.
        </h2>
      )}
    </>
  );
};

export default EmployeeList;
