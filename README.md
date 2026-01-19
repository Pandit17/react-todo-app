# React To-Do List

A **modern, dark-themed To-Do List** built with **React** and **Vite**, featuring smooth animations, persistent state, and a responsive UI. Designed for seamless task management with **Add/Edit/Complete/Undo/Delete/Reorder** functionality.

---

## ✨ Features

- **Add Tasks:** Quickly add new tasks with the input field.  
- **Edit Tasks:** Update existing tasks with inline editing.  
- **Mark Complete / Undo:** Move tasks between active and completed states.  
- **Delete Tasks:** Permanently remove completed tasks.  
- **Reorder Tasks:** Drag and drop tasks to reorder them dynamically.  
- **Filters:** View tasks by:
  - **All** – Shows all tasks.
  - **Active** – Shows only current tasks.
  - **Completed** – Shows completed tasks.
- **Persistent Storage:** Tasks are saved in `localStorage` to maintain state on page refresh.  
- **Dark Elegant UI:** Subtle glow effects, smooth transitions, and a modern look.  
- **Responsive Design:** Fully functional on mobile and desktop.  
- **Animated Interactions:** Checkbox glow, task reordering, and hover effects for buttons.

---

## 📸 Screenshots / Demo

*(It Will Be Added Soon.....)*

---

## ⚡ Installation

1. Clone the repository:

```bash
git clone https://github.com/Pandit17/react-todo-app.git
```

2. Navigate to the project directory:

```bash
cd react-todo-app
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open your browser at the URL shown in the terminal (usually `http://localhost:5173`).

---

## 📂 Project Structure

```
src/
├── App.jsx
├── main.jsx
├── index.css
├── components/
│   ├── Filters.jsx
│   ├── ToDoForm.jsx
│   └── ToDoItem.jsx
└── index.html
```

---

## 📋 Usage

* **Add Task:** Type in the input field and press `Enter` or click **Add**.
* **Edit Task:** Click **Edit**, update text, then click **Save**.
* **Complete Task:** Click the checkbox to mark as completed (moves to "Completed" filter).
* **Undo Task:** In the Completed filter, click the checkbox to move it back to Active.
* **Delete Task:** Permanently remove a completed task by clicking **Delete**.
* **Filters:** Click **All**, **Active**, or **Completed** to filter tasks in real-time.
* **Reorder Tasks:** Drag tasks up or down to change their order dynamically.

---

## 🛠️ Technologies

* **React 18** – Frontend library
* **Vite** – Build tool and dev server
* **Framer Motion** – Smooth animations and reorderable lists
* **CSS Variables & Flexbox** – Modern styling and layout
* **LocalStorage** – Persistent task storage

---

## 🎨 Styling

* Dark, glowy, and elegant theme
* Animated checkbox glow
* Reddish-orange fill for active tasks
* Green glow for completed tasks
* Yellow-golden hover for Edit/Save buttons
* Red hover for Delete button
* Smooth transitions and fused animations for a premium feel

---

## 📜 License

This project is open-source and free to use for learning and practice.

---

### 👨‍💻 Author

**Shwet Gautam**


