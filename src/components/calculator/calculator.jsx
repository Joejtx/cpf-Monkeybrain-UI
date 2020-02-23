import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Typography } from '@material-ui/core';
import ContributionForm from './Forms/contributionCalc';
import LoanRepayForm from './Forms/loanRepayment';

const options = [
  'First Home Calculator',
  'Contribution Calculator',
  'Education Monthly Instalment Rate Calculator',
];

const useStyles = makeStyles(theme => ({
    root: {
        fontWeight : theme.typography.fontWeightBold,        
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1),
        margin: theme.spacing(1)
    },
    margin: {
        padding: theme.spacing(2),
    },
}));

export const Calculator = function() {
    const classes = useStyles();
    const func = 'loan'
    const ITEM_HEIGHT = 40;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleFunc = param => {
        func = param;
    }
    
    const renderFunc = () => {
        switch(func) {
            case 'contribution':
                return <ContributionForm />
            case 'loan':
                return <LoanRepayForm />
            default:
                return ''
        }
    }

    return (
        <div>
            <Typography className={classes.root} variant="h5">
                Calculators 
            </Typography>
            <Button
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                variant="contained"
                onClick={handleClick}
            >
                Select Function
            </Button>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: 500,
                    },
                }}
            >
            {options.map(option => (
                <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                {option}
                </MenuItem>
            ))}
            </Menu>

            <div className={classes.margin}>
                {
                    renderFunc()
                }
            </div>
        </div>
    );        
}