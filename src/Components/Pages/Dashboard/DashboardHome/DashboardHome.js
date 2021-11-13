import * as React from 'react';
import Grid from '@mui/material/Grid';
import Orders from '../Orders/Orders';

const DashboardHome = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
                <Orders></Orders>
            </Grid>
        </Grid>
    );
};

export default DashboardHome;