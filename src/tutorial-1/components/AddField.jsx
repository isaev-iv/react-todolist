import React from "react";

const Addfield = ({ onClickAdd }) => {
  const [value, setValue] = React.useState("");
  const [checked, setChecked] = React.useState(false);

  function onClick() {
    onClickAdd(value, checked);
    setValue("");
    setChecked(false);
  }
  return (
    <div className="item">
      <div className="item__title">
        <h3>Cписок задач</h3>
      </div>
      <div className="item__addBlock">
        <input
          onChange={() => setChecked((prev) => !prev)}
          type="checkbox"
          checked={checked}
        />
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type="text"
          placeholder="Введите текст задачи..."
          className="item__addInput"
        />
        <button onClick={onClick}>+</button>
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
