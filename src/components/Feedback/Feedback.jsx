import PropTypes from "prop-types";
import s from "./Feedback.module.css";

function Feedback({ options, addLeaveFeedback }) {
  return (
    <>
      <div>
        {options.map((el) => (
          <button
            type="button"
            className={s.button}
            onClick={() => {
              addLeaveFeedback(el);
            }}
            key={el}
          >
            {el}
          </button>
        ))}
      </div>
    </>
  );
}

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  addLeaveFeedback: PropTypes.func.isRequired,
};
export default Feedback;
