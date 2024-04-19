import React, { useState, useEffect } from "react";

import axios from "axios";

export default function TodoList() {
  const [tasks, setTasks] = useState();

  const onEditHandler = async (id) => {
    const task = tasks.filter((item) => item.id === id);
    const index = task.findIndex((task) => task._id === id);
    task[index].completed = !task[index].completed;

    try {
      const response2 = await axios.put(
        `http://localhost:8000/todos/${id}`,
        task[index]
      );
      console.log(response2.status);
      fetchTasks();
    } catch (error) {
      console.log("Error in editing", error);
    }
  };

  const deleteHandler = async (id) => {
    try {
      const response1 = await axios.delete(`http://localhost:8000/todos/${id}`);
      console.log(response1.status);
      fetchTasks();
    } catch (error) {
      console.log("Error in editing", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:8000/todos/");
      setTasks(response.data);
    } catch (error) {
      console.error("Error in fetching data", error);
    }
  };

  return (
    <div className="container">
      <table className="tasks">
        <thead>
          <tr>
            <th>Title</th>
            <th>Completed</th>
            <th>Delete</th>
          </tr>
        </thead>
        {tasks && (
          <tbody>
            {tasks.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.name}</td>

                <td>
                  {" "}
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onEditHandler(todo.id)}
                  />
                </td>
                <td>
                  {" "}
                  <button
                    className="btn-warning"
                    onClick={() => deleteHandler(todo.id)}
                  >
                    Delete
                  </button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
}
