import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handlerAddContact = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handlerSubmit = e => {
    const { name, number } = this.state;
    e.preventDefault();
    const newContact = { id: uuidv4(), name, number };
    this.props.addContact(newContact);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const {name, number} = this.state;
    return (
      <form className={styles.form} onSubmit={this.handlerSubmit}>
        <label>
          <p className={styles.label}>Name</p>
          <input
            type="text"
            name="name"
            className={styles.input}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder=" "
            value={name}
            onChange={this.handlerAddContact}
          />
        </label>

        <label>
          <p className={styles.label}> Number</p>
          <input
            type="tel"
            name="number"
            className={styles.input}
            pattern="\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder=" "
            value={number}
            onChange={this.handlerAddContact}
          />
        </label>

        <button type="submit" className={styles.button} disabled={!name || !number}>Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
