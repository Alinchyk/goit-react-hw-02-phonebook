import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import s from './App.module.css'

export default class App extends Component {
state = {
  contacts: [],
   filter: ''
}

  formSubmitHandler = data => {
    // const newContact = { ...data, id: nanoid() };
    // this.setState(prevState => ({
    //   contacts: [...prevState.contacts, newContact],
    // }));
   }


  
  render() {
    return (
    <div className={s.container}>
    <h1 className={s.title}>Phonebook</h1>
    <ContactForm onSubmit={this.formSubmitHandler}  />

    <h2 className={s.title}>Contacts</h2>
   <ContactList contacts={this.state.contacts} />
</div>)
}
}
