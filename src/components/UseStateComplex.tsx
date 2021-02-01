import React, { useState, ReactElement } from "react";
import { useForm, Controller } from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from "@material-ui/core/TextField";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

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

interface UserI {
  name: string,
  email: string
}

const defaultValues = {
  name: '',
  email: ''
};

// https://stackoverflow.com/questions/60647976/using-textfield-component-from-material-ui-with-react-hook-form-shows-warnin
export default function UseStateComplex(): ReactElement {
  const { reset, control, handleSubmit, errors } = useForm<UserI>({ defaultValues });
  const [users, setUserInfo] = useState<UserI[] | []>([])
  const classes = useStyles();

  const submitHandler = handleSubmit(({ name, email }) => {
    setUserInfo(user => [...user, { name, email }]);
    reset();
  });

  const CarriersAvailable = ({ usersList }: { usersList: UserI[]}) => {
    return usersList.length ? (
      <div>
        <Button
          variant="outlined" 
          color="primary" 
          type="submit"
          onClick={() => setUserInfo([])}
        >
          Clear
        </Button>
        <ul>
          {usersList.map(({ name, email }: UserI, index: number): ReactElement => (
            <li key={index}>
              <span>{`name: ${name}`}</span> // <span>{`email: ${email}`}</span>
            </li>
          ))}
        </ul>
      </div>
    ) : (
      <span>There are no carriers available in your area</span>
    );
  }

  return (
    <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography 
              className={classes.header} 
              variant="h5" 
              gutterBottom>
                TS useEffect Single Var
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <h2>User Info</h2>
              <form onSubmit={submitHandler}>
                <div className={classes.fields}>
                  <Controller
                    name="name"
                    control={control}
                    render={({ onChange, onBlur, value }) => (
                      <TextField
                        label="First Name"
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                      />
                    )}
                  />
                  <Controller
                    name="email"
                    control={control}
                    render={({ onChange, onBlur, value }) => (
                      <TextField
                        label="Email"
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                      />
                    )}
                  />
                  <Button variant="outlined" color="primary" type="submit">
                    Submit
                  </Button>
                </div>
              </form>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <h2>User List</h2>
              <CarriersAvailable usersList={users} />
            </Paper>
          </Grid>
        </Grid>
    </div>
  )
}

// ALTERNATIVE WAY : DEFINE A SEPARATE TYPE FOR THIS >>
  // interface UserList {
  //   userList: (UserI)[];
  // }

  // const CarriersAvailable = ({ userList }: UserList): ReactElement => {
  //   return userList.length ? (
  //     <div>
  //       <Button 
  //         variant="outlined" 
  //         color="primary" 
  //         type="submit"
  //         onClick={() => setUserInfo([])}
  //       >
  //         Clear
  //       </Button>
  //       <ul>
  //         {userList.map(({ name, email }: UserI, index: number): ReactElement => (
  //           <li key={index}>
  //             <span>{`name: ${name}`}</span> // <span>{`email: ${email}`}</span>
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   ) : (
  //     <span>There are no carriers available in your area</span>
  //   );
  // }