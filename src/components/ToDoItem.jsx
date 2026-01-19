import { useState } from "react";
import { motion as Motion } from "framer-motion";

export default function TodoItem({ todo, updateTodo, completeTodo, undoTodo, deleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const saveEdit = () => {
    if (!editText.trim()) return;
    updateTodo(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <Motion.div
      layout
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className={`todo ${todo.completed ? "done" : ""}`}
    >
      <div className="left">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() =>
            todo.completed ? undoTodo(todo.id) : completeTodo(todo.id)
          }
        />

        {isEditing ? (
          <input
            className="editing-input"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && saveEdit()}
            autoFocus
          />
        ) : (
          <span>{todo.text}</span>
        )}
      </div>

      <div className="actions">
        {!todo.completed && !isEditing && (
          <button className="edit" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        )}
        {isEditing && (
          <button className="save" onClick={saveEdit}>
            Save
          </button>
        )}
        {todo.completed && (
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        )}
      </div>
    </Motion.div>
  );
}
