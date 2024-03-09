import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/task/actions";

const initTask = {
  title: "",
  description: "",
  completed: false,
  dueDate: "",
};

const AddTask = () => {
  const [task, setTask] = useState(initTask);
  const dispatch = useDispatch();
  const currentDate = new Date().toISOString().split("T")[0];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.title !== "" && task.description !== "" && task.dueDate !== "") {
      dispatch(addTask(task));
    } else {
      alert("Please Fill All Details");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Add Task</h1>
        <label>
          <span>Title</span>
          <br />
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>Description</span>
          <br />
          <textarea
            type="text"
            name="description"
            value={task.description}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>Due Date</span>
          <br />
          <input
            type="date"
            name="dueDate"
            value={task.dueDate}
            min={currentDate}
            onChange={handleChange}
          />
        </label>
        <input type="submit" />
      </form>
    </>
  );
};

export default AddTask;
