
import React, { memo } from 'react';

import { Typography, Grid, Paper } from '@mic3/platform-ui';




const TodoList = (props) => {
    return (
        <Grid container spacing={24}>
            <Grid item xs={6}>
                <Paper>
                    <Typography variant="h1">React To Do List with Hooks</Typography>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default memo(TodoList);
