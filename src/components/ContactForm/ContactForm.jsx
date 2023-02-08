import { Component } from 'react';
import propTypes from 'prop-types';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
  name: '',
  number: '',
};

export class ContactForm extends Component {
  state = { ...initialState };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    const { onAdd } = this.props;

    onAdd({ id: nanoid(), name, number });
    this.reset();
  };

  handleChange = evt => {
    const { value, name } = evt.target;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ ...initialState });
  };

  render() {
    const { name, number } = this.state;
    return (
      <div>
        <form className={css.contactsForm} onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            className={css.input}
            id={name}
            type="text"
            name="name"
            onChange={this.handleChange}
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label htmlFor="name">Number</label>
          <input
            className={css.input}
            id={number}
            type="tel"
            name="number"
            onChange={this.handleChange}
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button className={css.contactsbutton} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  handleSubmit: propTypes.func,
  onAdd: propTypes.func.isRequired,
};
