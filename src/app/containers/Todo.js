
import React, { memo, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import {
    Typography, Grid, Paper, withStyles,
} from '@mic3/platform-ui';

import TodoForm from 'app/presentational/TodoForm';
import TodoList from 'app/presentational/TodoList';

const styles = theme => ({
    root: { flexGrow: 1, maxWidth: '400px', margin: 'auto' },
    paper: { paddingp: theme.spacing.unit * 2 },
});

const useCtrlTodoList = (initialValue = []) => {
    const [todos, setTodos] = useState(initialValue);
    const [todosDone, setTodosDone] = useState([]);

    const addTodo = todo => setTodos([...todos, todo]);

    const deleteTodo = useCallback((todoIndex) => {
        setTodos(
            todos.filter((_, index) => index !== todoIndex),
        );
    }, [todos, setTodos]);
    const deleteTodoDone = useCallback((todoIndex) => {
        setTodosDone(
            todosDone.filter((_, index) => index !== todoIndex),
        );
    }, [todosDone, setTodosDone]);

    const doneTodo = useCallback((todoIndex) => {
        setTodosDone([...todosDone, todos[todoIndex]]);
        setTodos(
            todos.filter((_, index) => index !== todoIndex),
        );
    }, [setTodosDone, setTodos, todos, todosDone]);

    return [todos, todosDone, addTodo, deleteTodo, doneTodo, deleteTodoDone];
};

const initialList = ['Morning exercise', 'Evening latin party', 'Pranayama', 'Read a book'];

const Todo = ({ classes }) => {
    const [todos, todosDone, addTodo, deleteTodo, doneTodo, deleteTodoDone] = useCtrlTodoList(initialList);
    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="stretch"
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
                <TodoList doneTodo={doneTodo} todos={todos} deleteTodo={deleteTodo} />
                <TodoList todos={todosDone} deleteTodo={deleteTodoDone} />
            </Grid>
        </Grid>
    );
};

Todo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default memo(withStyles(styles)(Todo));
