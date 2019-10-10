import PropTypes from "prop-types";
import React from "react";
import Color from 'color';

import ColorContext from '../context/color';

import Link from "./Link";

const Header = ({ siteTitle, pages }) => (
  <ColorContext.Consumer>
    {(color) => (
      <header
        className="rainbowed"
        style={{
          background: Color(color).lighten(0.4),
          padding: '0.5rem 0',
          width: '100vw',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 10,
        }}
      >
        <div
          style={{
            margin: `0 auto`,
            // minWidth: 960,
            width: '96vw',
            padding: '0 1rem',
            display: 'flex',
          }}
        >
          <h3 style={{ margin: 0, fontWeight: 500, flex: '1 1 auto' }}>
            <Link
              to="/"
              style={{ color: 'black', textDecoration: `none` }}
            >
              {siteTitle}
            </Link>
          </h3>
          {
            pages.map((page, index) => (
              <Link
                to={`/#${page.slug}`}
                style={{ color: 'black', flex: '0 0 auto', marginLeft: index === 0 ? 0 : '4vw' }}
              >
                {page.title}
              </Link>
            ))
          }
        </div>
      </header>
    )}
  </ColorContext.Consumer>
)

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  pages: PropTypes.arrayOf(PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })),
}

Header.defaultProps = {
  siteTitle: ``,
  pages: [],
}

export default Header
