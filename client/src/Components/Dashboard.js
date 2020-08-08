import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { Col, Row, Card } from "react-bootstrap";
import {
  getUserTodosAction,
  createTodoAction,
  removeTodoAction,
} from "../Redux/todo/action";
import { connect } from "react-redux";
import cancel from "../assets/cancel.png";

const Dashborad = ({
  auth,
  getUserTodosAction,
  createTodoAction,
  todoList,
  api,
  removeTodoAction,
}) => {
  const alert = useAlert();
  const [todoName, setTodoName] = useState("");
  useEffect(() => {
    getUserTodosAction();
  }, [getUserTodosAction]);

  useEffect(() => {
    api.error && alert.error(api.error.message);
  }, [api.error, alert]);

  useEffect(() => {
    api.loading && alert.show(api.message, { timeout: 2000 });
  }, [api.loading, api.message, alert]);

  const removeTodo = (id) => {
    removeTodoAction(id);
  };

  const addTask = (e) => {
    e.preventDefault();
    const data = String(todoName);
    createTodoAction(data);
    setTodoName("");
  };

  const handleChange = (e) => {
    setTodoName(e.target.value);
  };

  return (
    <>
      <div className="padding">
        <Row className="d-flex justify-content-center">
          <Col xl={12}>
            <Card className="px-3">
              <Card.Body>
                <Card.Title>
                  Welcome, <b>{auth.fullName}</b>
                </Card.Title>
                <div className="add-items d-flex">
                  <input
                    type="text"
                    name="taskName"
                    value={todoName}
                    className="form-control todo-list-input"
                    placeholder="Add a new Todo List"
                    onChange={handleChange}
                  />
                  <button
                    onClick={addTask}
                    className="add btn btn-primary font-weight-bold todo-list-add-btn"
                  >
                    Add
                  </button>
                </div>
                <div
                  className="list-wrapper  overflow-auto"
                  style={{ maxHeight: "300px" }}
                >
                  <ul className="d-flex flex-column-reverse todo-list">
                    {todoList.length === 0 ? (
                      <li>
                        {!api.loading && (
                          <b>
                            You dont have any todolist, you can create one above
                          </b>
                        )}
                      </li>
                    ) : (
                      todoList.map((val, i) => {
                        return (
                          <li key={val._id}>
                            <div className="form-check">
                              <Link to={`/todo/${val._id}`}>
                                <label className="form-check-label">
                                  <b style={{ fontSize: "1rem" }}>
                                    {val.todoName}
                                  </b>
                                  <i className="input-helper"></i>
                                </label>
                              </Link>
                            </div>
                            <i
                              onClick={() => removeTodo(val._id)}
                              className="remove"
                            >
                              <img src={cancel} alt="remove" width="10rem" />
                            </i>
                          </li>
                        );
                      })
                    )}
                  </ul>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  api: state.api,
  todoList: state.todo.todos,
  auth: state.auth,
});

const mapDispatchToProps = {
  getUserTodosAction,
  createTodoAction,
  removeTodoAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashborad);
