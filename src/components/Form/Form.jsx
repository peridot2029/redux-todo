import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./Form.scss";

const Form = () => {
  return (
    <form className="form-add">
      <Input type="text" name="add" placeholder="add a new task" />
      <Button type="submit" name="add" />
    </form>
  );
};

export default Form;
