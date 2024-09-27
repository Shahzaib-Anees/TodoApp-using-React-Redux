import React from "react";
import "./TaskCreator.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTodo, removeTodo } from "../configs/redux/reducers/todoHandler";

function TaskCreator() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(
      addTodo({
        title: data.todo,
      })
    );
    console.log(data.todo);
  };
  return (
    <>
      <form className="input-container" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Enter task Todo"
          id="task-input"
          {...register("todo", { required: true })}
        />
        {errors.todo && <span>This field is required</span>}
        <button type="submit" id="task-push-btn">
          Submit
        </button>
      </form>
    </>
  );
}

export default TaskCreator;
