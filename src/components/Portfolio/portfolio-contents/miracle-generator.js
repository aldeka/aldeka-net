import React from 'react';
import Link from '../../Link';
import types from './portfolio-item-types';

import miracleGeneratorThumb from './images/miracle-generator-thumb.png';

const MiracleGeneratorDescription = () => (
  <div style={{
    minHeight: 'calc(100vh - 162px)',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0 1rem',
  }}>
    <iframe
      title="Miracle Generator"
      style={{ flex: '1 1 auto', width: '100%', border: 0 }}
      src="https://www.aldeka.net/miracle-generator/"
    />
  </div>
);

const miracleGeneratorSpec = {
  slug: 'miracle-generator',
  title: 'Miracle Generator',
  description: (
    <>
      <Link to="https://www.aldeka.net/miracle-generator/" external>webpage</Link>
      <br/>
      <Link to="https://github.com/aldeka/miracle-generator" external>source code</Link>
    </>
  ),
  thumbImg: miracleGeneratorThumb,
  contents: <MiracleGeneratorDescription />,
  type: [types.art, types.code],
};

export default miracleGeneratorSpec;
