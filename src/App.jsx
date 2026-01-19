import { useState, useEffect } from "react";
import { AnimatePresence, Reorder } from "framer-motion";
import TodoItem from "./components/ToDoItem";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState("all");
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([
      ...todos,
      { id: Date.now(), text: input, completed: false }
    ]);
    setInput("");
  };

  const updateTodo = (id, newText) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, text: newText } : todo));
  };

  const completeTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: true } : todo));
  };

  const undoTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: false } : todo));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // mark visibility instead of removing from DOM
  const visibleTodos = todos.map(todo => ({
    ...todo,
    visible:
      filter === "all" ||
      (filter === "active" && !todo.completed) ||
      (filter === "completed" && todo.completed)
  }));

  return (
    <div className="container">
      <h1>My To-Do List</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Add new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <div className="filters">
        <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>All</button>
        <button className={filter === "active" ? "active" : ""} onClick={() => setFilter("active")}>Active</button>
        <button className={filter === "completed" ? "active" : ""} onClick={() => setFilter("completed")}>Completed</button>
      </div>

      {visibleTodos.every(todo => !todo.visible) ? (
        <div className="empty">No Tasks</div>
      ) : (
        <Reorder.Group axis="y" values={visibleTodos} onReorder={setTodos}>
          <AnimatePresence>
            {visibleTodos.map(todo => todo.visible && (
              <TodoItem
                key={todo.id}
                todo={todo}
                updateTodo={updateTodo}
                completeTodo={completeTodo}
                undoTodo={undoTodo}
                deleteTodo={deleteTodo}
              />
            ))}
          </AnimatePresence>
        </Reorder.Group>
      )}
    </div>
  );
}
