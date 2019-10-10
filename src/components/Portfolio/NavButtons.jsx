import React from "react";
import Color from 'color';
import { intersection } from "lodash";

import ColorContext from '../../context/color';

import types from './portfolio-contents/portfolio-item-types';

const ActiveButton = ({ text }) => (
  <ColorContext.Consumer>
    {
      (color) => (
        <button
          className="rainbowed"
          style={{
            backgroundColor: Color(color).lighten(0.4),
          }}
          onClick={() => {}}
        >
          { text }
        </button>
      )
    }
  </ColorContext.Consumer>
);

const InactiveButton = ({ onClick, text}) => (
  <ColorContext.Consumer>
    {
      (color) => (
        <button
          className="link rainbowed"
          style={{
            color
          }}
          onClick={onClick}
        >
          { text }
        </button>
      )
    }
  </ColorContext.Consumer>
);

const NavButtons = ({ typeFilter, setTypeFilter }) => (
  <div>
    {
      typeFilter === null ? (
        <ActiveButton text="All" />
      ) : (
        <InactiveButton text="All" onClick={() => setTypeFilter(null)} />
      )
    }
    {
      intersection(typeFilter, [types.art]).length > 0 ? (
        <ActiveButton text="Just Art" />
      ) : (
        <InactiveButton text="Just Art" onClick={() => setTypeFilter([types.art])} />
      )
    }
    {
      intersection(typeFilter, [types.graphicDesign, types.ux]).length > 0 ? (
        <ActiveButton text="Just Design" />
      ) : (
        <InactiveButton text="Just Design" onClick={() => setTypeFilter([types.graphicDesign, types.ux])} />
      )
    }
  </div>
);

export default NavButtons;