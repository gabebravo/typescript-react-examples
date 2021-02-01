import { ReactElement, useContext } from 'react'
import { TodoContext } from './TodoProvider'
import { useForm, Controller } from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    minHeight: 500,
  },
  fields: {
    display: 'flex',
    width: '60%',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
}));

interface TodoI {
  task: string,
}

const defaultValues = {
  task: '',
};

export default function TodoField(): ReactElement {
  const { reset, control, handleSubmit, errors } = useForm<TodoI>({ defaultValues });
  const { dispatch } = useContext(TodoContext);
  const classes = useStyles();

  const submitHandler = handleSubmit(({ task }) => {
    console.log('task', task)
    dispatch({ type: "add", task })
    reset();
  });

  return (
    <Paper className={classes.paper}>
      <h2>User Info</h2>
      <form onSubmit={submitHandler}>
        <div className={classes.fields}>
          <Controller
            as={<TextField />}
            name="task"
            label="Enter Task"
            control={control}
          />
          <Button variant="outlined" color="primary" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </Paper>
  )
}
