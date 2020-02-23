import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('md');
  
    const handleClose = () => {
      onClose(selectedValue);
    };
  
    const handleListItemClick = value => {
      onClose(value);
    };
  
    return (
        <Dialog 
            onClose={handleClose} 
            aria-labelledby="simple-dialog-title" 
            open={open}
            fullWidth={fullWidth}
            maxWidth={maxWidth}
        >
        <DialogTitle id="simple-dialog-title">Searching for Calculator</DialogTitle>
        <DialogContent>
          <DialogContentText id="find-description">
            Key in "Calculator" at the search bar on the top of the screen or,
            <br/>
            Find the Calculator icon at under "cpf services" at the middle of the page
          </DialogContentText>
        </DialogContent>
        </Dialog>
        );  
}


SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

const useStyles = makeStyles(theme => ({
    lowerButton: {
      margin: theme.spacing(3),
    },
}));

export default function SimpleDialogDemo() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState();
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = value => {
      setOpen(false);
      setSelectedValue(value);
    };
  
    return (
      <div>
        <Button className={classes.lowerButton} variant="outlined" color="primary" onClick={handleClickOpen}>
          Open simple dialog
        </Button>
        <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
      </div>
    );
}