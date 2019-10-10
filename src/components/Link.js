import React from "react";
import { Link } from "gatsby";

import ColorContext from '../context/color';

const ThemedLink = (props) => (
  <ColorContext.Consumer>
    {(color) => {
      if (props.external) {
        return (
          <a
            {...props}
            href={props.to}
            style={Object.assign({
              color: color,
            }, props.style)}
            className="rainbowed"
          >
            { props.children}
          </a>
        );
      }
      return (
        <Link
          {...props}
          style={Object.assign({
            color: color,
          }, props.style)}
          className="rainbowed"
        />
      );
    }}
  </ColorContext.Consumer>
);

ThemedLink.defaultProps = {
  style: {},
};

export default ThemedLink;