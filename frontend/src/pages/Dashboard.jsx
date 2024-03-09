import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTask } from "../redux/task/actions";
import Tasks from "../components/Tasks";
import AddTask from "../components/AddTask";

const Dashboard = () => {
  const { tasks } = useSelector((res) => res.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    if (tasks.length === 0) {
      dispatch(getTask());
    }
  }, []);

  return (
    <div>
      <AddTask />
      <div className="task">
        {tasks.length > 0 &&
          tasks.map((ele) => (
            <Tasks
              key={ele._id}
              id={ele._id}
              title={ele.title}
              description={ele.description}
              completed={ele.completed}
            />
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
