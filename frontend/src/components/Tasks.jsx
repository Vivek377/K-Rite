import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/task/actions";

const Tasks = ({ title, description, completed, id }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{completed ? "Completed" : "Not Completed"}</p>
      <button>Edit Task</button>
      <button onClick={() => handleDelete(id)}>Delete Task</button>
    </>
  );
};

export default Tasks;
