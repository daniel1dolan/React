import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { v4 as uuidv4 } from "uuid";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  }
}));

function InputContact(props) {
  let handleSubmit = e => {
    //collect info and make an object to be sent back to parent. To be pushed into projects array
    e.preventDefault();
    props.addContact({
      id: uuidv4(),
      name: this.refs.title.value,
      email: this.refs.email.value,
      phoneNum: this.refs.phonenum.value,
      address: this.refs.address.value,
      city: this.refs.city.value,
      state: this.refs.state.value,
      zipcode: this.refs.zipcode.value
    });
  };
  let classes = useStyles();
  return (
    <>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div>
          <TextField
            required
            id="standard-required"
            label="Name"
            defaultValue="Name"
          />
          <TextField id="standard" label="Email" defaultValue="Email" />
          <TextField
            required
            id="standard"
            label="Phone Number"
            defaultValue="Phone Number"
          />
          <TextField id="standard" label="Address" defaultValue="Address" />
          <TextField
            required
            id="standard-required"
            label="City"
            defaultValue="City"
          />
          <TextField
            required
            id="standard-required"
            label="State"
            defaultValue="State"
          />
          <TextField
            required
            id="standard-required"
            label="Zip Code"
            defaultValue="Zip Code"
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          value="submit"
        >
          Add Contact
        </Button>
      </form>
    </>
  );
}

export default InputContact;
