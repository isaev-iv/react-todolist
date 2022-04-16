import React from "react";
import { ReactComponent as Trash } from "../assets/img/trash.svg";
import { ReactComponent as Redact } from "../assets/img/redact.svg";

const Item = ({ tasks, taskStatusChange }) => {
  function onClick(id) {
    taskStatusChange(id);
  }
  return (
    <div className="task">
      {tasks.map((task) => {
        return (
          <div key={task.id} className="task__list">
            <div className="task__list_checkbox">
              <input
                id={`task-${task.id}`}
                type="checkbox"
                checked={task.completed}
                onClick={onClick(task.id)}
              />
              <label htmlFor={`task-${task.id}`}></label>
            </div>
            <p className="task__list_input">{task.text}</p>
            <Redact className="task__redact" width="20px" height="18px" />
            <Trash className="task__trash" width="35px" height="24px" />
          </div>
        );
      })}

      <div className="task__button">
        <button>ОТМЕТИТЬ ВСЕ</button>
        <button>ОЧИСТИТЬ</button>
      </div>
    </div>
  );
};

export default Item;
