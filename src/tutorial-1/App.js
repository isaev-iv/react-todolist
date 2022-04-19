import "./App.scss";
import React, { useReducer } from "react";
import Item from "./components/Item.jsx";
import AddField from "./components/AddField";

function reducer(state, action) {
  if (action.type === "ADD_TASK") {
    const newId = state.length + 1;
    return [
      ...state,
      {
        id: newId,
        text: action.payload.text,
        completed: action.payload.checked,
      },
    ];
  }
  if (action.type === "CHANGE_TASK_STATUS") {
    state.map((item) => {
      if (item.id === action.payload) {
        return { ...item, completed: !item.completed };
      }
    });
  }
  return state;
}

function App() {
  const [state, dispatch] = useReducer(reducer, [
    {
      id: 1,
      text: "First task",
      completed: false,
    },
    {
      id: 2,
      text: "Second task",
      completed: false,
    },
    {
      id: 3,
      text: "Third task",
      completed: false,
    },
  ]);

  const onClickAdd = (text, checked) => {
    dispatch({
      type: "ADD_TASK",
      payload: {
        text: text,
        checked: checked,
      },
    });
  };

  const taskStatusChange = (id) => {
    dispatch({
      type: "CHANGE_TASK_STATUS",
      payload: id,
    });
  };

  return (
    <div className="app">
      <AddField onClickAdd={onClickAdd} />
      <Item tasks={state} taskStatusChange={taskStatusChange} />
    </div>
  );
}

export default App;
