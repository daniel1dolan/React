import React, { Component } from "react";
import InputContact from "./InputContact";

class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }
  handleAddProject = newContact => {
    let oldContacts = this.state.contacts;
    oldContacts.push(newContact);
    this.setState({ contacts: oldContacts }, () => {
      console.log(this.state.contacts);
    });
  };
  render() {
    return (
      <>
        Contact List main component
        <InputContact addContact={this.handleAddProject} />
      </>
    );
  }
}

export default ContactList;
