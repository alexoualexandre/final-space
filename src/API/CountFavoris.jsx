import PropTypes from "prop-types";

function CountFavoris({ change }) {
  return (
    <>
      <p
        style={{
          color: "white",
          position: "fixed",
          top: 0,
          right: 0,
          zIndex: 2,
          fontSize: "2em",
        }}
      >
        {change}
      </p>
    </>
  );
}
CountFavoris.propTypes = {
  change: PropTypes.number.isRequired,
};
export default CountFavoris;
