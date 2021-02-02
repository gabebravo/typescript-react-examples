import { ReactElement, useState, useEffect, useReducer } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

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

interface DadJokeResponse {
  id: string;
  joke: string;
  status: 200;
}
const JOKE_URL = "https://icanhazdadjoke.com/";

interface FetchState {
  state: "loading" | "error" | "data";
  data: null | DadJokeResponse;
  error: null | Error;
}
interface FetchDataAction {
  type: "data";
  data: DadJokeResponse;
}
interface FetchErrorAction {
  type: "error";
  error: Error;
}
interface FetchLoadingAction {
  type: "loading";
}

type FetchActions = FetchDataAction | FetchErrorAction | FetchLoadingAction;

function fetchReducer(state: FetchState, action: FetchActions): FetchState {
  //  Implement your reducer here.
  switch (action.type) {
    case "data":
      return { state: "data", data: action.data, error: null };
    case "error":
      return { state: "error", data: null, error: action.error };
    case "loading":
      return { state: "loading", data: null, error: null };
  }
  return state;
}

function useFetch(url: string) {
  const [refetch, setRefetch] = useState(false);
  const [state, dispatch] = useReducer(fetchReducer, {
    state: "loading",
    data: null,
    error: null
  });

  useEffect(() => {
    async function performFetch() {
      try {
        const response = await fetch(url, {
          headers: {
            accept: "application/json"
          }
        });
        const data: DadJokeResponse = await response.json();
        dispatch({ type: "data", data });
      } catch (error) {
        dispatch({ type: "error", error });
      }
    }
    dispatch({ type: "loading" });
    performFetch();
  }, [url, refetch]);
  return { fetchData: state, setRefetch };
}

export default function DadJoke(): ReactElement | null {
  const classes = useStyles();
  const { fetchData, setRefetch } = useFetch(JOKE_URL);
  const { state, data, error } = fetchData

  if (state === "loading") return <div><CircularProgress /></div>;
  if (state === "error") return <div><Typography>Error: {error?.message}</Typography></div>;

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h5" gutterBottom>Dad Joke API</Typography>
            <Grid item xs={12} sm container>
              <Grid container direction="column" spacing={2}>
                <Typography variant="h6" gutterBottom>{state === "data" ? data?.joke : 'Woops something went wrong!'}</Typography>
                <Grid item xs={12}>
                  <Button variant="contained" color="primary" onClick={() => setRefetch(fetch => !fetch)}>Joke Me</Button>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}
