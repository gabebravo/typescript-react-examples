import React, { ReactElement, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { TodoContext } from './TodoProvider'
import { ITodoListItem } from './todoReducer'

const useStyles = makeStyles((theme) => ({
  root: {
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    minHeight: 500,
  },
}));

export default function Todos(): ReactElement {
  const { state } = useContext(TodoContext);
  const classes = useStyles();

  const TodoList = ({ todoList }: { todoList: ITodoListItem[]}) => {
    return todoList.length ? (
      <div>
        <ul>
          {todoList.map(({ id, task, completed }: ITodoListItem): ReactElement => (
            <li key={id}>
              <span>{`task: ${task}`}</span> // <span>{`completed: ${completed}`}</span>
            </li>
          ))}
        </ul>
      </div>
    ) : (
      <span>You have no todos. Please add one.</span>
    );
  }

  console.log('state', state)
  return (
    <Paper className={classes.paper}>
      <h2>Todo List</h2>
      <TodoList todoList={state} />
    </Paper>
  )
}
