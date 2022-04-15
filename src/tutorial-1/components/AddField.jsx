import React from "react";

const Addfield = () => {
  return (
    <div className="item">
      <div className="item__title">
        <h3>Cписок задач</h3>
      </div>
      <div className="item__addBlock">
        <input type="radio" name="nameradio" value="1" />
        <input
          type="text"
          placeholder="Введите текст задачи..."
          className="item__addInput"
        />
        <a href="">+</a>
      </div>
      <div>
        <ul className="item__filter">
          <li className="item__filter_active">
            <button>ВСЕ</button>
          </li>
          <li>
            <button>АКТИВНЫЕ</button>
          </li>
          <li>
            <button>ЗАВЕРШЕННЫЕ</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Addfield;
