
import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mic3/platform-ui';

import useOnChange from 'app/hooks/useOnChange';

const TodoForm = ({ classes, onSubmit }) => {
    const [todo, onChange, setTodo] = useOnChange('');

    const onSubmitForm = useCallback((event) => {
        event.preventDefault();
        onSubmit(todo);
        setTodo('');
    }, [todo]);

    return (
        <form onSubmit={onSubmitForm} >
            <TextField
                variant="outlined"
                placeholder="Add todo"
                margin="normal"
                onChange={onChange}
                value={todo}
            />
        </form>

    );
};

TodoForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default memo(TodoForm);
