
import React, { useCallback, useMemo, memo } from 'react';

import { List, ListItem, ListItemSecondaryAction, ListItemText, Checkbox, IconButton, MdiIcon } from '@mic3/platform-ui';


const TodoList = ({ todos, deleteTodo }) => {
    const onDelete = useCallback((index) => {
        deleteTodo(index);
    }, [deleteTodo]);

    const todosList = useMemo(() => todos.map((todo, index) => (
        <ListItem key={index.toString()} dense button>
            <Checkbox tabIndex={-1} />
            <ListItemText primary={todo} />
            <ListItemSecondaryAction>
                <IconButton
                    aria-label="Delete"
                    onClick={() => onDelete(index)}
                >
                    <MdiIcon name="delete" />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )), [todos]);

    return (
        <List>
            {todosList}
        </List>
    );
};

export default memo(TodoList);
