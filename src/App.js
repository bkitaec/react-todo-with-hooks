import React from 'react';
import { MuiThemeProvider, DarkTheme } from '@mic3/platform-ui';
import { Paper, withStyles } from '@mic3/platform-ui';

import TodoList from 'app/containers/TodoList';

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
            <TodoList />
        </Paper>
    </MuiThemeProvider>;

export default withStyles(styles)(App);
