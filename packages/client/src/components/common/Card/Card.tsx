import * as React from 'react';

import { Avatar, Chip, makeStyles, Box, Typography, colors, useTheme } from '@material-ui/core';

import Paper from '@material-ui/core/Paper';
import Stack from '@mui/material/Stack';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';

const useStyles = makeStyles({
    root: {
        position: 'relative',
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'stretch'
    },
    container: {
        flex: 1,
    },

});

interface IValue {
    label: string;
    color: string;
}

interface ICardProps {
    idx?: number;
    obj?: Record<string, IValue>;
}

export const Card2 = ({
    idx,
    obj = {},
}: ICardProps) => {
    const classes = useStyles();
    const theme = useTheme();
    const {
        label,
        color
    } = obj[`value${idx}`];

    // const obj1 = { test: 1}
    // obj1.test
    // obj1["test"]

    return (
        <Paper className={classes.root}>
            <Stack
                className={classes.container}
                direction="column"
                justifyContent="center"
                alignItems="stretch"
                spacing={2}
            >
                <Stack 
                    direction="row"
                    justifyContent="center"
                    alignItems="center"                   
                >
                    <Avatar>
                        <PointOfSaleIcon color='error'/>
                    </Avatar>
                </Stack>
                
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={0}
                    sx={{
                        '& .MuiChip-outlined': {
                            border: `1px solid ${color}`
                        }
                    }}
                 >
                    <Box
                        style={{
                            flex: 1,
                            height: '2px',
                            background: color,
                        }}
                    />
                    <Chip  variant="outlined" label={label} style={{color}} />
                    <Box
                        style={{
                            flex: 1,
                            height: '2px',
                            background: color,
                        }}
                    />
                </Stack>
                <Stack 
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Typography variant='h4' color='secondary'>15</Typography>
                </Stack>
                
            </Stack>
        </Paper>
    );
};

export default Card2;

