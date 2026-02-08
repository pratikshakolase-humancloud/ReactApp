import { useState } from "react";

function TaskInput({ setTasks }) {
  const [text, setText] = useState("");

  const addTask = () => {
    setTasks(prev => [...prev, { id: Date.now(), text, completed: false }]);
    setText("");
  };

  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={addTask}>Add</button>
    </>
  );
}

export default TaskInput;
