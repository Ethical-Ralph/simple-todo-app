import React from "react";
import { Alert } from "react-bootstrap";

const AlertTemplate = ({ style, options, message, close }) => {
  const { type } = options;
  return (
    <div style={style}>
      <Alert
        variant={
          type === "info"
            ? "info"
            : type === "success"
            ? "success"
            : type === "error"
            ? "danger "
            : "info"
        }
      >
        {message}
      </Alert>
    </div>
  );
};

export default AlertTemplate;
