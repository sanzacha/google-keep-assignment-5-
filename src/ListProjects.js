import React, { Fragment, Component } from 'react';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
  mainTopGap: {
    margin: 18
  } 
});

class App extends Component {
  deleteIconStyle = {
    marginTop: 20,
    padding: 20
  }

  render() {
      return (
      <Fragment>
          <CssBaseline />
          <main style={this.deleteIconStyle}>
            <Typography variant="headline">Projects</Typography>
            <Grid container spacing={40} style={this.styles}>
                {this.props.posterData.map((poster, index) => (
                    <Grid key={index} item xs={12} id={index}>
                        <Typography color="textSecondary">
                            <strong>{poster.title}</strong>
                        </Typography>
                        <Typography color="textSecondary">
                            {poster.note}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
          </main>
      </Fragment>
    )
  }
}

export default withStyles(styles)(App);
