import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { Col, Row, Card } from "react-bootstrap";
import { connect } from "react-redux";
import {
  getTodoAction,
  removeTaskAction,
  addTaskAction,
  markAsCompleted,
  markAsUncompleted,
} from "../Redux/todo/action";
import cancel from "../assets/cancel.png";
import back from "../assets/back.png";

const Todo = ({
  match,
  getTodoAction,
  addTaskAction,
  removeTaskAction,
  todo,
  api,
  markAsCompleted,
  markAsUncompleted,
  history,
}) => {
  const alert = useAlert();
  const [taskName, setTaskName] = useState("");
  const {
    params: { todoId },
  } = match;

  useEffect(() => {
    getTodoAction(todoId);
  }, [getTodoAction, todoId]);

  useEffect(() => {
    api.loading && alert.show(api.message, { timeout: 2000 });
  }, [api.loading, api.message, alert]);

  useEffect(() => {
    api.error && alert.error(api.error.message);
  }, [api.error, alert]);

  const removeTodo = (taskId) => {
    removeTaskAction(todoId, taskId);
  };

  const addTask = (e) => {
    e.preventDefault();
    const data = String(taskName);
    addTaskAction(todoId, data);
    setTaskName("");
  };

  const handleChange = (e) => {
    setTaskName(e.target.value);
  };

  return (
    <div className="padding">
      <Row className="d-flex justify-content-center">
        <Col xl={12}>
          <Card className="px-3">
            <Card.Body>
              <i onClick={() => history.push("/todo")}>
                <img src={back} alt="remove" width="15rem" />
              </i>
              <Card.Title>
                <b>Todo List: {todo && todo.todoName}</b>
              </Card.Title>
              <div className="add-items d-flex">
                <input
                  type="text"
                  className="form-control todo-list-input"
                  placeholder="What do you need to do today?"
                  value={taskName}
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
                className="list-wrapper overflow-auto"
                style={{ maxHeight: "300px" }}
              >
                <ul className="d-flex flex-column-reverse todo-list">
                  {todo &&
                    todo.tasks.map((val) => (
                      <li
                        className={val.isCompleted ? "completed" : ""}
                        key={val._id}
                      >
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="checkbox"
                              type="checkbox"
                              checked={val.isCompleted}
                              onChange={() =>
                                val.isCompleted
                                  ? markAsUncompleted(todoId, val._id)
                                  : markAsCompleted(todoId, val._id)
                              }
                            />
                            {val.taskName}
                            <i className="input-helper"></i>
                          </label>
                        </div>
                        <i
                          onClick={() => removeTodo(val._id)}
                          className="remove"
                        >
                          <img src={cancel} alt="remove" width="10rem" />
                        </i>
                      </li>
                    ))}
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todo: state.todo.todo,
  api: state.api,
});

const mapDispatchToProps = {
  getTodoAction,
  addTaskAction,
  removeTaskAction,
  markAsCompleted,
  markAsUncompleted,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
