import { connect } from "react-redux";
import { changeFilter } from "../../redux/actions";

function Filter({ changeFilter }) {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        onChange={(event) => changeFilter(event.currentTarget.value)}
      ></input>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  changeFilter: (name) => dispatch(changeFilter(name)),
});

export default connect(null, mapDispatchToProps)(Filter);
