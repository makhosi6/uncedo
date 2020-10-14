import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {
    LocaleLanguageIcon
  } from "@fluentui/react-icons";
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function DialogSelect() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(Number(event.target.value) || '');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <LocaleLanguageIcon onClick={handleClickOpen}  style={{
            color: "white",
            fontSize: "25px",
            padding: "15px",
            cursor: "pointer",
          }} />
      <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Select a language</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="demo-dialog-native">Language</InputLabel>
              <Select
                native
                value={age}
                onChange={handleChange}
                input={<Input id="demo-dialog-native" />}
              >
                {
                    opt.map((x)=>(
                        <option value={x.value}>{x.key}</option>
                    ))
                }
               
              </Select>
            </FormControl>
           
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


let opt = [{
    key:"English",
    value: 1
},
{
    key:"Xhosa",
    value: 2
},
{
    key:"Zulu",
    value: 3
},
{
    key:"Sotho",
    value: 4
},
{
    key:"Venda",
    value: 5
},
{
    key:"Afrikaans",
    value: 6
}
]