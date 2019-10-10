import React from 'react';

import Link from '../../Link';
import cuddlyFerris from './images/cuddlyferris.svg';
import ferris from './images/ferris.svg';
import ferrisCover from './images/ferris-cover.png';
import ferrisThumb from './images/ferris-thumb.png';

import types from './portfolio-item-types';

const Ferris = () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
  }}>
    <div style={{ marginBottom: '1rem' }}>
      <h3>Original Ferris the Rustacean design:</h3>
      <img src={ferris} alt="Original Ferris"/>
    </div>
    <div style={{ marginBottom: '1rem' }}>
      <h3>Cover art for The Rust Programming Language:</h3>
      <img src={ferrisCover} alt="The Rust Programming Language book cover" />
    </div>
    <div style={{ marginBottom: '1rem' }}>
      <h3>Another take on the character / a slightly cuter and cleaner redesign:</h3>
      <img src={cuddlyFerris} alt="Ferris redesign" />
    </div>
  </div>
);

const ferrisSpec = {
  slug: 'ferris',
  title: 'Ferris the Rustacean',
  description: (
    <>
      <Link to="https://rustacean.net/" external>Mascot</Link>
      {` `}
      for the Rust programming language.
    </>
  ),
  contents: <Ferris />,
  thumbImg: ferrisThumb,
  type: [types.art],
};

export default ferrisSpec;
