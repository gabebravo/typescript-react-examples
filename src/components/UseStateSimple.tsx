import { ReactElement, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& .MuiButton-containedPrimary': {
      margin: 5
    }
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

interface Props {
  startCount: number
}

export default function UseStateSimple({ startCount }: Props): ReactElement {
  const [count, setCount] = useState(startCount);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h5" gutterBottom>TS useEffect Single Var</Typography>
            <Grid item xs={12} sm container>
              <Grid container direction="column" spacing={2}>
                <Typography variant="h6" gutterBottom>{`Count is: ${count}`}</Typography>
                <Grid item xs={12}>
                  <Button variant="contained" color="primary" onClick={() => setCount(count => count - 1)}>Dec</Button>
                  <Button variant="contained" color="primary" onClick={() => setCount(count => count + 1)}>Inc</Button>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}
