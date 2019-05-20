
import React, { useCallback, useMemo, memo } from 'react';
import PropTypes from 'prop-types';

import {
    List, ListItem, ListItemSecondaryAction, ListItemText, Checkbox, IconButton, MdiIcon, withStyles,
} from '@mic3/platform-ui';

const styles = {
    list: {
        wordBreak: 'break-all',
    },
    through: {
        textDecoration: 'line-through',
    },
};

const TodoList = ({
    todos, deleteTodo, classes, doneTodo,
}) => {
    const onDelete = useCallback((index) => {
        deleteTodo(index);
    }, [deleteTodo]);

    const onDone = useCallback((index) => {
        doneTodo(index);
    }, [doneTodo]);

    const todosList = useMemo(() => todos.map((todo, index) => (
        <ListItem key={index.toString()} dense button>
            {doneTodo && <Checkbox tabIndex={-1} onClick={() => onDone(index)} />}
            <ListItemText className={`${classes.list} ${!doneTodo ? classes.through : ''}`} primary={todo} />
            <ListItemSecondaryAction>
                <IconButton
                    aria-label="Delete"
                    onClick={() => onDelete(index)}
                >
                    <MdiIcon name="delete" />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )), [classes.list, classes.through, doneTodo, onDelete, onDone, todos]);

    return (
        <List>
            {todosList}
        </List>
    );
};

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    doneTodo: PropTypes.func,
};

export default memo(withStyles(styles)(TodoList));
