import PropTypes from "prop-types";

export const Items = (props) => {
  console.log(props);

  return (
    <div className="div-items">
      <h2>{props.titulo}</h2>
      <h2>{props.precio}</h2>
      <h2>{props.descripción}</h2>
    </div>
  );
};

// Definir validaciones para los props
Items.propTypes = {
  titulo: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
  descripción: PropTypes.string.isRequired,
};
