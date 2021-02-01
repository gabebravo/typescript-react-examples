import { ReactElement } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TodoField from './TodoField'
import Todos from './Todos'
import TodoProvider from './TodoProvider'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
  },
  header: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
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

export default function TodoList(): ReactElement {
  const classes = useStyles();

  return (
    <TodoProvider>
      <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography 
                className={classes.header} 
                variant="h5" 
                gutterBottom>
                  TS useReducer Todo List Example
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TodoField />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Todos />
            </Grid>
          </Grid>
      </div>
      </TodoProvider>
  )
}
