import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [list, setList] = useState([]);
  const [todoItems, setTodoItems] = useState([]);

  const updateInput = (value) => {
    setUserInput(value);
  };

  const addItem = () => {
    if (userInput !== "") {
      const todoItem = {
        id: Math.random(),
        value: userInput,
      };
      if (todoItem) {
        setList([...list, todoItem]);
      }
    }
    setUserInput("");
  };
  console.log(list, "::::::::::::::::::::::::");

  useEffect(() => {
    const setTodoList = JSON.stringify(list);
    localStorage.setItem("TodoList", setTodoList);
  }, [list]);
  useEffect(() => {
    const getTodoList = JSON.parse(localStorage.getItem("TodoList"));
    setTodoItems(getTodoList);
  }, [list]);

  console.log(todoItems, "MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM");

  const deleteItem = (ID) => {
    console.log(ID);
    const updateList = todoItems.filter((item) => item.id !== ID);
    setList(updateList);
  };
  return (
    <>
      <Container>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "3rem",
            fontWeight: "bolder",
          }}
        >
          TODO LIST
        </Row>

        <hr />
        <Row>
          Go to About Page{" "}
          <InputGroup>
            <Link to="/about" variant="dark" className="mt-2">
              About
            </Link>
          </InputGroup>
        </Row>
        <Row>
          <Col md={{ span: 5, offset: 4 }}>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="add item . . . "
                size="lg"
                value={userInput}
                onChange={(item) => updateInput(item.target.value)}
              />

              <InputGroup>
                <Button
                  variant="dark"
                  className="mt-2"
                  onClick={() => addItem()}
                >
                  ADD
                </Button>
              </InputGroup>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 5, offset: 4 }}>
            <div>
              {todoItems.map((item) => {
                return (
                  <div className="d-flex mb-3">
                    <ListGroup.Item variant="dark" action>
                      {item.value}
                    </ListGroup.Item>
                    <AiFillDelete
                      size="20px"
                      onClick={() => deleteItem(item.id)}
                    />
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;

// import logo from "./logo.svg";
// import "./App.css";
// import Home from "./Home";
// import "bootstrap/dist/css/bootstrap.css";
// import { Route, Routes } from "react-router-dom";
// import About from "./About";

// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
