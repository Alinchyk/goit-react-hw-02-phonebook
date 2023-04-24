import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import s from './App.module.css'

export default class App extends Component {
state = {
  contacts: [],
   filter: ''
}

  formSubmitHandler = data => {console.log(data);}
  
  render() {
    return (
    <div className={s.container}>
    <h1 className={s.title}>Phonebook</h1>
    <ContactForm onSubmit={this.formSubmitHandler}  />

    <h2 className={s.title}>Contacts</h2>

</div>)
}
}
