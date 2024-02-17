import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import styles from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  saveContact = newContact => {
    const { contacts } = this.state;
    const { name } = newContact;
    contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    )
      ? alert(`${name} is already in contacts`)
      : this.setState(prev => ({ contacts: [newContact, ...prev.contacts] }));
  };

  handlerFilter = e => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  getFilterChange = () => {
    const { filter, contacts } = this.state;
    const filterNormalize = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterNormalize)
    );
  };

  handlerDelete = idContsct => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(({ id }) => id !== idContsct),
    }));
  };

  render() {
    const filterContacts = this.getFilterChange();
    const { filter, contacts } = this.state;
    return (
      <div>
        <h2 className={styles.title}>Phonebook</h2>
        <ContactForm addContact={this.saveContact} />
        <h2 className={styles.title}>Contacts</h2>
        {contacts.length !== 0 && (
          <Filter filter={filter} onChangeFilter={this.handlerFilter} />
        )}
        <ContactList
          onDelete={this.handlerDelete}
          filterContacts={filterContacts}
        />
      </div>
    );
  }
}
