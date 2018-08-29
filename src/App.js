import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Home from './NotesComponent';
import ListProjects from './ListProjects';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  linkStyle: {
      linkStyle: "none",
      padding: 20
  }
});


class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
        posterData : [
          {
            id: 1,
            title: 'Shrimp and Chorizo Paella',
            note: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'
          },
          {
            id: 2,
            title: 'Transitions',
            note: 'Material-UI provides a number of transitions that can be used to introduce some basic motion to your applications components.'
          },
          {
            id: 3,
            title: 'Popover',
            note: 'Use the radio buttons to adjust the anchorOrigin and transformOrigin positions. You can also set the anchorReference to anchorPosition or anchorEl. When it is anchorPosition, the component will, instead of anchorEl, refer to the anchorPosition prop which you can adjust to set the position of the popover.'
          },
          {
            id: 4,
            title: 'Portal',
            note: 'The component is used internally by the Modal and Popper components. On the server, the content wont be rendered. You have to wait for the client side reconciliation to see the children.'
          }
        ]
    }
  }

  styles = {
    wrapperStyle: {
        marginTop: 18,
        marginLeft: 10
    }
  }

  render() {
    const classes = styles;

    return (
        <div className={classes.root}>
          <AppBar position="static" color="default">
          <Toolbar variant="dense">
              <IconButton color="inherit" aria-label="Menu">
                  <MenuIcon />
              </IconButton>
              <Typography>Google keep</Typography>
          </Toolbar>
        </AppBar>
          <Router>
              <div className="container">
                  <Grid container spacing={24}>
                      <Grid item xs={3} sm={3}>
                        <Paper className={this.props.paper} style={this.styles.wrapperStyle}>
                          <List component="nav">
                            <ListItem button>
                              <ListItemIcon>
                                <InboxIcon />
                              </ListItemIcon>
                              <Link style={classes.linkStyle} to={'/'}>Projects</Link>
                            </ListItem>
                            <ListItem button>
                              <ListItemIcon>
                                <DraftsIcon />
                              </ListItemIcon>
                              <Link style={classes.linkStyle} to={'/NotesComponent'}>Notes</Link>
                            </ListItem>
                          </List>
                        </Paper>
                      </Grid>
                      <Grid item xs={9} sm={9}>
                        <Paper className={this.props.paper}>
                          <Switch>
                              <Route exact path='/NotesComponent' render={(props) => <Home {...props} posterData={this.state.posterData} />}  />
                              <Route exact path='/' render={(props) => <ListProjects {...props} posterData={this.state.posterData} />} />
                          </Switch>
                        </Paper>
                      </Grid>
                  </Grid>
              </div>
          </Router>
      </div>
    );
  }
}

export default withStyles(styles)(App);
