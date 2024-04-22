import PropTypes from "prop-types";

function CountFavoris({ change }) {
  return (
    <>
      <p
        style={{
          color: "white",
          position: "absolute",
          top: "30%",
          right: 0,
          zIndex: 2,
          fontSize: "10em",
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
