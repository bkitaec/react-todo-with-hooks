
import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Input } from '@mic3/platform-ui';

import useOnChange from 'app/hooks/useOnChange';

const TodoForm = ({ onSubmit }) => {
    const [todo, onChange, setTodo] = useOnChange('');

    const onSubmitForm = useCallback((event) => {
        event.preventDefault();
        onSubmit(todo);
        setTodo('');
    }, [onSubmit, setTodo, todo]);

    return (
        <form onSubmit={onSubmitForm}>
            <Input
                placeholder="Add todo"
                margin="normal"
                onChange={onChange}
                value={todo}
                fullWidth
                autoFocus
            />
        </form>

    );
};

TodoForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default memo(TodoForm);
