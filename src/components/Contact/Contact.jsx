import propTypes from "prop-types";
import { connect } from "react-redux";
import style from "./Contact.module.css";
import { deleteItem } from "../../redux/actions";

function Contact({ contact, deleteItem }) {
  return (
    <li className={style.item}>
      {contact.name}: {contact.number}
      <button
        type="button"
        id={contact.id}
        onClick={() => deleteItem(contact.id)}
      >
        Удалить
      </button>
    </li>
  );
}

Contact.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string,
      number: propTypes.string,
    })
  ),
  deleteContactFromList: propTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (id) => dispatch(deleteItem(id)),
});

export default connect(null, mapDispatchToProps)(Contact);
