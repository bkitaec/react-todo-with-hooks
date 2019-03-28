
import React, { memo, useState } from 'react';

import { Typography, Grid, Paper, withStyles } from '@mic3/platform-ui';

import TodoForm from 'app/presentational/TodoForm';
import TodoList from 'app/presentational/TodoList';

const styles = (theme) => ({
    root: { flexGrow: 1 },
    paper: { paddingp: theme.spacing.unit * 2 },
});

const useCtrlTodoList = (initialValue = []) => {
    const [todos, setTodos] = useState(initialValue);

    const addTodo = (todo) => setTodos([...todos, todo]);

    const deleteTodo = (todoIndex) => {
        console.log('$$$ delete');
        setTodos(
            todos.filter((_, index) => index !== todoIndex)
        )
    };

    return [todos, addTodo, deleteTodo];
};

const Todo = ({ classes }) => {
    const [todos, addTodo, deleteTodo] = useCtrlTodoList();
    console.log('$$$ [todos]', todos);
    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={24}
            className={classes.root}
        >
            <Grid item spacing={16}>
                <Paper elevation={1} className={classes.paper}>
                    <Typography variant="title">React To Do List with Hooks</Typography>
                    <TodoForm onSubmit={addTodo} />
                </Paper>
            </Grid>
            <Grid item>
                <Paper>
                    <TodoList todos={todos} deleteTodo={deleteTodo} />
                </Paper>
            </Grid>
        </Grid>
    );
};

export default memo(withStyles(styles)(Todo));
