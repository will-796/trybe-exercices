import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props;
    return (
      <div>
        <div className="information-container">
        <Header name={name}/>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            {averageWeight.value} {averageWeight.measurementUnit}
          </p>
        </div>
        <img src={image} alt="pokemon" />
      </div>
    );
  }
}

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  averageWeight: PropTypes.shape({
    value: PropTypes.number.isRequired,
    measurementUnit: PropTypes.string.isRequired,
  }),
  image: PropTypes.string.isRequired,
};

export default Pokemon;
