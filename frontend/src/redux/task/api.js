import axios from "axios";

const getTaskApi = async () => {
  const res = await axios.get("http://localhost:3287/task", {
    headers: {
      Authorization: `${localStorage.getItem("token")}`,
    },
  });

  return res;
};

const addTaskApi = async (task) => {
  const res = await axios.post("http://localhost:3287/task/add", task, {
    headers: {
      Authorization: `${localStorage.getItem("token")}`,
    },
  });

  return res;
};

const editTaskApi = async (id, task) => {
  const res = await axios.patch(`http://localhost:3287/task/edit/${id}`, task, {
    headers: {
      Authorization: `${localStorage.getItem("token")}`,
    },
  });

  return res;
};

const deleteTaskApi = async (id) => {
  const res = await axios.delete(`http://localhost:3287/task/delete/${id}`, {
    headers: {
      Authorization: `${localStorage.getItem("token")}`,
    },
  });

  return res;
};

export { getTaskApi, addTaskApi, editTaskApi, deleteTaskApi };
