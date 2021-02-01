import React, { ReactElement, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { TodoContext } from './TodoProvider'
import { ITodoListItem } from './todoReducer'
import CompleteButton from './CompleteButton'
import DeleteButton from './DeleteButton'

const useStyles = makeStyles((theme) => ({
  root: {
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    minHeight: 500,
  },
  item: {
    marginTop: 10,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '30%',
    marginTop: 10,
  }
}));

export default function Todos(): ReactElement {
  const { state } = useContext(TodoContext);
  const classes = useStyles();

  const TodoList = ({ todoList }: { todoList: ITodoListItem[]}) => { 
    return todoList.length ? (
      <div>
        <ul>
          {todoList.map(({ id, task, completed }: ITodoListItem): ReactElement => (
            <li className={classes.item} key={id}>
              <Typography component="span">{`Task: ${task}`}</Typography>
              <Typography component="span">{` // `}</Typography>
              <Typography component="span">{`completed: ${ completed ? 'Done' : 'Pending'}`}</Typography>
              <div className={classes.buttons}>
                <CompleteButton id={id} completed={completed} />
                <DeleteButton id={id} />
              </div>
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
