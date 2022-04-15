import React from "react";
import { ReactComponent as Trash } from "../assets/img/trash.svg";
import { ReactComponent as Redact } from "../assets/img/redact.svg";

const Item = () => {
  return (
    <div className="task">
      <div className="task__list">
        <input type="radio" name="nameradio" value="1" />
        <input
          type="text"
          placeholder="Задача №1"
          className="task__list_input"
        />
        <Redact className="task__redact" width="30px" height="20px" />
        <Trash className="task__trash" width="40px" height="24px" />
      </div>
      <div className="task__button">
        <button>ОТМЕТИТЬ ВСЕ</button>
        <button>ОЧИСТИТЬ</button>
      </div>
    </div>
  );
};

export default Item;
