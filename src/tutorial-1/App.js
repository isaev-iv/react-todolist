import React from "react";
import { Paper, Divider, Button, List, Tabs, Tab } from "@mui/material";
import { AddField } from "./components/AddField";
import { Item } from "./components/Item";

const reducer = (state, action) => {
  if (action.type === "ADD_TASK") {
    return [
      ...state,
      {
        id: state.length !== 0 ? state[state.length - 1].id + 1 : 1,
        text: action.payload.text,
        completed: action.payload.checked,
      },
    ];
  }
  if (action.type === "DELETE_TASK") {
    const newState = state.filter((item) => item.id !== action.payload);
    return newState;
  }
  if (action.type === "REMOVE_ALL_TASKS") {
    return [];
  }
  if (action.type === "COMPLETED_ALL_TASKS") {
    const allCompleted = state.every((obj) => obj.completed === true);
    return state.map((obj) => {
      return { ...obj, completed: !allCompleted };
    });
  }
  return state;
};

function App() {
  const [state, dispatch] = React.useReducer(reducer, [
    {
      id: 1,
      text: "Task #1",
      completed: true,
    },
    {
      id: 2,
      text: "Task #2",
      completed: false,
    },
  ]);

  const addTask = (text, checked) => {
    dispatch({
      type: "ADD_TASK",
      payload: {
        text,
        checked,
      },
    });
  };

  const onClickRemove = () => {
    if (window.confirm("Вы действительно хотите очистить список задач?")) {
      dispatch({
        type: "REMOVE_ALL_TASKS",
      });
    }
  };

  const handleClickDelete = (id) => {
    if (window.confirm("Are you really want to delete this task?")) {
      dispatch({
        type: "DELETE_TASK",
        payload: id,
      });
    }
  };

  return (
    <div className="App">
      <Paper className="wrapper">
        <Paper className="header" elevation={0}>
          <h4>Список задач</h4>
        </Paper>
        <AddField onAdd={addTask} />
        <Divider />
        <Tabs value={0}>
          <Tab label="Все" />
          <Tab label="Активные" />
          <Tab label="Завершённые" />
        </Tabs>
        <Divider />
        <List>
          {state.map((task) => (
            <Item
              key={task.id}
              text={task.text}
              completed={task.completed}
              onDelete={() => handleClickDelete(task.id)}
            />
          ))}
        </List>
        <Divider />
        <div className="check-buttons">
          <Button>Отметить всё</Button>
          <Button>Очистить</Button>
        </div>
      </Paper>
    </div>
  );
}

export default App;
