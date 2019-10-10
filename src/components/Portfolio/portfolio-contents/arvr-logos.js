import React from "react";

import logo1 from './images/arvr/arvr-1.jpeg';
import logo2 from './images/arvr/arvr-2.jpeg';
import logo3 from './images/arvr/arvr-3.jpeg';

import types from './portfolio-item-types';

const ArVr = () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
  }}>
    <img src={logo1} alt="AR/VR written stylized with eyes" style={{ marginBottom: 16, maxWidth: 512 }}/>
    <img src={logo2} alt="Angular AR/VR logo merged together with triangles" style={{ marginBottom: 16, maxWidth: 512 }} />
    <img src={logo3} alt="AR/VR where the V is a shadow of the A" style={{ marginBottom: 16, maxWidth: 512 }} />
  </div>
);

const ArVrSpec = {
  slug: 'arvr',
  title: 'AR/VR icon concepts',
  description: 'Ideas for iconifying the concept of augmented and visual reality, together.',
  contents: <ArVr />,
  thumbImg: logo1,
  type: [types.graphicDesign],
};

export default ArVrSpec;
