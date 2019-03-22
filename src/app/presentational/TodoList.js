import React, { useCallback } from 'react';

import { List, ListItem, ListItemSecondaryAction, ListItemText, Checkbox, IconButton, MdiIcon } from '@mic3/platform-ui';


const TodoList = ({ todos, deleteTodo }) => {
    const onDelete = useCallback((index) => {
        deleteTodo(index);
    }, [deleteTodo]);
    return (
        <List>
            {todos.map((todo, index) => (
                <ListItem key={index.toString()} dense button>
                    <Checkbox tabIndex={-1} disableRipple />
                    <ListItemText primary={todo} />
                    <ListItemSecondaryAction>
                        <IconButton
                            aria-label="Delete"
                            onClick={onDelete(index)}
                        >
                            <MdiIcon name="delete" />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>
    );
};

export default TodoList;
