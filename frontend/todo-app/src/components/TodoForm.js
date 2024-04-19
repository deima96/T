import React, { useState } from "react";
import axios from "axios";

export default function Todo() {
  const [task, setTask] = useState("");
  const [completed, setCompleted] = useState(false);

  const onChangeTask = (event) => {
    setTask(event.target.value);
  };

  const onCompleted = (value) => {
    setCompleted(value);
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log("submitted");
    try {
      const response = await axios.post("http://localhost:8000/todos/", {
        name: task,
        completed: completed,
      });

      console.log("Response from API:", response.data);
    } catch (error) {
      console.error("Error sending data to API:", error);
    }
  };

  return (
    <div className="container main flex justify-center">
      <form onSubmit={onSubmitHandler} className="Form">
        <div>
          <label>Enter your Task:</label>
          <br></br>
          <input type="text" value={task} onChange={onChangeTask} />
        </div>

        <div>
          <label>Completed:</label>
          <br></br>
          <input
            type="radio"
            id="option1"
            value={true}
            checked={completed === true}
            onChange={() => onCompleted(true)}
          />
          <label htmlFor="option1">Yes</label>
          <input
            type="radio"
            id="option2"
            value={false}
            checked={completed === false}
            onChange={() => onCompleted(false)}
          />
          <label htmlFor="option1">No</label>
        </div>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
