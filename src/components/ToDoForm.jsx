import { useState } from "react";

export default function TodoForm({ addTodo }) {
  /* ---------- Local State ----------
     text → holds the current input value
  */
  const [text, setText] = useState("");

  /* ---------- Form Submit Handler ----------
     - Prevents page reload
     - Ignores empty / whitespace input
     - Adds new todo
     - Resets input field
  */
  const submitHandler = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    /* ---------- Add Todo Form ---------- */
    <form className="form" onSubmit={submitHandler}>
      {/* Task input field */}
      <input
        type="text"
        placeholder="Add a task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {/* Submit button */}
      <button>Add</button>
    </form>
  );
}
