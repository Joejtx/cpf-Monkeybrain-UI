import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';
import cpfLogo from '../../assets/cpf-svg/logo-CPF-web.png'


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#0c5842'
    },
    title: {
        display: 'none',
        marginLeft: theme.spacing(1.5),
        [theme.breakpoints.up('sm')]: {
        display: 'flex',
        },
    },
    search: {        
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        color:'black',
        backgroundColor: 'white', //
        // '&:hover': {
        //   backgroundColor: fade(theme.palette.common.white, 0.25),
        // },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        color: 'black',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 300,
        },
    },
    flushRight: {
        alignItems: 'right',
    },
    large: {
        width: theme.spacing(16),
        height: theme.spacing(7),
      },
}));

export default function SearchAppBar(props) {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.root}>
            <a href="">
                <Avatar variant="square" 
                        className={classes.large} 
                        src={cpfLogo}
                        onClick={() => props.change('main')}        
                />
            </a>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                />
            </div>
            {/* Adds as empty space */}
            <div style={{flexGrow: 1}}></div> 
            <div>
                <IconButton
                    className={classes.flushRight}
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    // onClick={handleMenu}
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
            </div>  
        </Toolbar>
      </AppBar>
    </div>
  );
}
