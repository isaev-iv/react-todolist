import React from "react";
import { Paper, Divider, Button, List, Tabs, Tab } from "@mui/material";
import { AddField } from "./components/AddField";
import { Item } from "./components/Item";

function reducer(state, action) {
  if (action.type === "ADD_TASK") {
    return {
      ...state,
      tasks: [
        ...state.tasks,
        {
          id: state.tasks[state.tasks.length - 1].id + 1,
          text: action.payload.text,
          completed: action.payload.checked,
        },
      ],
    };
  }

  if (action.type === "DELETE_TASK") {
    return {
      ...state,
      tasks: state.tasks.filter((obj) => obj.id !== action.payload),
    };
  }

  if (action.type === "TOGGLE_TASK") {
    return {
      ...state,
      tasks: state.tasks.map((obj) => {
        if (obj.id === action.payload) {
          return {
            ...obj,
            completed: !obj.completed,
          };
        }
        return obj;
      }),
    };
  }

  if (action.type === "CHECK_ALL") {
    return {
      ...state,
      tasks: state.tasks.map((obj) => ({
        ...obj,
        completed: true,
      })),
    };
  }

  if (action.type === "REMOVE_ALL") {
    return {
      ...state,
      tasks: [],
    };
  }
  if (action.type === "SET_FILTER") {
    return {
      ...state,
      filterBy: action.payload,
    };
  }
}

const filterIndex = {
  all: 0,
  completed: 1,
  active: 2,
};

function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    filterBy: "all",
    tasks: [
      {
        id: 1,
        text: "Task #1",
        completed: true,
      },
      {
        id: 2,
        text: "Task #12",
        completed: true,
      },
      {
        id: 3,
        text: "Task #13",
        completed: false,
      },
      {
        id: 4,
        text: "Task #14",
        completed: true,
      },
    ],
  });

  const addTask = (text, checked) => {
    console.log(text);
    dispatch({
      type: "ADD_TASK",
      payload: { text, checked },
    });
  };

  const onClickTaskDelete = (id) => {
    dispatch({
      type: "DELETE_TASK",
      payload: id,
    });
  };

  const toggleComplete = (id) => {
    dispatch({
      type: "TOGGLE_TASK",
      payload: id,
    });
  };

  const onCheckedAll = () => {
    dispatch({
      type: "CHECK_ALL",
    });
  };

  const onRemoveAll = () => {
    dispatch({
      type: "REMOVE_ALL",
    });
  };

  const setFilter = (_, newIndex) => {
    const status = Object.keys(filterIndex)[newIndex];
    dispatch({
      type: "SET_FILTER",
      payload: status,
    });
  };

  return (
    <div className="App">
      <Paper className="wrapper">
        <Paper className="header" elevation={0}>
          <h4>Список задач</h4>
        </Paper>
        <AddField onAdd={addTask} />
        <Divider />
        <Tabs onChange={setFilter} value={filterIndex[state.filterBy]}>
          <Tab label="Все" />
          <Tab label="Активные" />
          <Tab label="Завершённые" />
        </Tabs>
        <Divider />
        <List>
          {state.tasks
            .filter((obj) => {
              if (state.filterBy === "all") {
                return true;
              }
              if (state.filterBy === "completed") {
                return obj.completed;
              }
              if (state.filterBy === "active") {
                return !obj.completed;
              }
            })
            .map((obj) => (
              <Item
                key={obj.id}
                text={obj.text}
                completed={obj.completed}
                onClickRemove={() => onClickTaskDelete(obj.id)}
                onToggleSwitch={() => toggleComplete(obj.id)}
              />
            ))}
        </List>
        <Divider />
        <div className="check-buttons">
          <Button disabled={!state.tasks.length} onClick={onCheckedAll}>
            Отметить всё
          </Button>
          <Button disabled={!state.tasks.length} onClick={onRemoveAll}>
            Очистить
          </Button>
        </div>
      </Paper>
    </div>
  );
}

export default App;
