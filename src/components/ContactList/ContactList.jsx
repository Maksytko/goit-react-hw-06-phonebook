import Contact from "../Contact/Contact";
import propTypes from "prop-types";
import style from "./ContactList.module.css";
import { connect } from "react-redux";

function ContactList({ contacts }) {
  return (
    <ul className={style.list}>
      {contacts.map((contact) => {
        return <Contact contact={contact} key={contact.id} />;
      })}
    </ul>
  );
}

const mapStateToProps = ({ contacts }) => {
  const filteredContacts = contacts.contacts.items.filter((contact) =>
    contact.name.toUpperCase().includes(contacts.contacts.filter.toUpperCase())
  );

  return {
    contacts: filteredContacts,
  };
};

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string,
      number: propTypes.string,
    })
  ),
  deleteContactFromList: propTypes.func,
};

export default connect(mapStateToProps)(ContactList);
