import React from 'react';
import { MuiThemeProvider, DarkTheme } from '@mic3/platform-ui';
import { Paper, withStyles } from '@mic3/platform-ui';

import Todo from 'app/containers/Todo';

const styles = theme => ({
    root: {
        width: '100vw',
        height: '100vh',
        flexGrow: 1,
        display: 'flex',
    }
});

const App = ({ classes }) =>
    <MuiThemeProvider theme={DarkTheme}>
        <Paper className={classes.root}>
            <Todo />
        </Paper>
    </MuiThemeProvider>;

export default withStyles(styles)(App);