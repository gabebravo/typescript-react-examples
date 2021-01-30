import React, { ReactElement } from 'react'
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import LinkIcon from '@material-ui/icons/Link';

interface Link {
  text: string, 
  url: string
}

interface Props {
  links: Link[]
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  subHeader: {
    fontSize: '1.5rem'
  }
}));

export default function Home({ links = [] }: Props): ReactElement {
  let history = useHistory();
  const classes = useStyles();

  // MAGIC: React will internally assign unique keys when using React.Children.toArray for mapping elements
  const RenderLinks = (): ReactElement => (
    <>
      {React.Children.toArray(
        links.map(({ text, url }) => (
          <ListItem button onClick={() => history.push(`${url}`)}>
            <ListItemIcon>
              <LinkIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))
      )}
    </>
  );

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader 
                  component="div"
                  id="nested-list-subheader"
                  className={classes.subHeader}>
                  Typescript Examples
                </ListSubheader>
              }
              className={classes.root}
            >
              {links && <RenderLinks />}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}