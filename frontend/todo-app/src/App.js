import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<TodoList />} />
            <Route path="add" element={<TodoForm />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
