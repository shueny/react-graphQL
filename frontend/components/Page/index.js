import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

const Index = (props) => {
  const { children, cool } = props;
  return (
    <div>
      <h2>This is Page component!</h2>
      <h3>{cool}</h3>
      {children}
    </div>
  );
};
export default Index;

Index.propTypes = {
  cool: PropTypes.string,
  children: PropTypes.oneOf([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]), // PropType.any
};
