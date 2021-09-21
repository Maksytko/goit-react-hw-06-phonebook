import { useState } from "react";
import propTypes from "prop-types";
import style from "./ContactForm.module.css";
import { connect } from "react-redux";
import { addItem } from "../../redux/actions";

function ContactForm({ contacts, addItem }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  function handleFormSubmit(event) {
    event.preventDefault();

    setName("");
    setNumber("");
    addToContactList(name, number);
  }

  function addToContactList(nameForCheck, number) {
    if (
      contacts.find((contact) => {
        return contact.name === nameForCheck;
      })
    ) {
      return alert(`${nameForCheck} is already in contacts!`);
    }

    return addItem(nameForCheck, number);
  }

  function handleInputChange(event) {
    if (event.currentTarget.name === "name") {
      return setName(event.currentTarget.value);
    }

    setNumber(event.currentTarget.value);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label className={style.label}>
        <span>Name</span>
        <input
          className={style.input}
          type="text"
          value={name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleInputChange}
        />
      </label>
      <label className={style.label}>
        <span>Number</span>
        <input
          className={style.input}
          type="tel"
          value={number}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}

const mapStateToProps = ({ contacts }) => {
  return {
    contacts: contacts.contacts.items,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (name, number) => dispatch(addItem(name, number)),
});

ContactForm.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string,
      number: propTypes.string,
    })
  ),
  addToContactList: propTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
