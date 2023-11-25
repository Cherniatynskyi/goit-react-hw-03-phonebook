import { Component } from "react";
import { ContactsList } from "./ContactsList/ContactsList";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";

import { nanoid } from 'nanoid'


class App extends Component {

  state = {
    contacts: [],
    filter: ''
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts')
    const parsedContacts = JSON.parse(contacts)

    if (parsedContacts) {
      this.setState({contacts: parsedContacts})
    }
  }

  formSubmitHandler = ({name,number}) => {

    if (!this.checkExistHandler(name)) {
      return
    }

    const contact = {
      id: nanoid(),
      name,
      number
    }

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }))


  }

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value })
  }

  getFilteredContacts = () => {
    const {contacts, filter} = this.state
    const normalizedFilter = filter.toLowerCase()
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
  }

  onDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }

  checkExistHandler = name => {
    const res = this.state.contacts.find((value) => {
      return value.name === name
    })

    if (res) {
      alert(`${name} is already in contacts list`)
      return false
    }

    return true

  }

  render() {

    const filteredContacts = this.getFilteredContacts()

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        {this.state.contacts.length !== 0 ? <ContactsList contacts={filteredContacts} deleteContact={this.onDeleteContact} /> : <h3>You have no contacts in your list yet</h3>}
      </>
    )
  }
}

export default App;
