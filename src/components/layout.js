import React from "react"
import PropTypes from "prop-types"

import useInterval from '../hooks/useInterval';
import useTimeout from '../hooks/useTimeout';
import ColorContext, { COLORS } from '../context/color';
import Header from "./header";
import Link from "./Link";
import "./layout.css"

const Layout = ({ children, title }) => {
  const [color, setColor] = React.useState(COLORS[COLORS.length - 1]);
  const [colorIndex, setColorIndex] = React.useState(COLORS.length - 1);

  useTimeout(() => {
    setColorIndex(0);
    setColor(COLORS[0]);
  }, 1);

  useInterval(() => {
    let newIndex = 0;
    if (colorIndex < COLORS.length) {
      newIndex = (colorIndex + 1) % COLORS.length;
    }
    setColorIndex(newIndex);
    setColor(COLORS[newIndex]);
  }, 4000);

  return (
    <ColorContext.Provider value={color}>
      <div style={{
        minHeight: '100vh',
        position: 'relative',
      }}>
        <Header
          siteTitle={`Karen Rustad Tölva${title && ` - ${title}`}`}
          pages={[
            { slug: 'portfolio', title: 'Portfolio' },
            { slug: 'contact', title: 'Contact' }
          ]}
        />
        <div
          style={{
            margin: `0 auto`,
            width: '96vw',
            padding: `3rem 1rem 1rem`,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <main style={{ flex: '1 1 auto'}}>
            {children}
          </main>
          <footer style={{ flex: '0 0 auto', marginTop: '2rem' }}>
            © {new Date().getFullYear()} <Link to="mailto:aldeka@aldeka.net" external>Karen Rustad Tölva</Link>
          </footer>
        </div>
      </div>
    </ColorContext.Provider>
  );
}

Layout.defaultProps = {
  title: "",
};

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Layout
