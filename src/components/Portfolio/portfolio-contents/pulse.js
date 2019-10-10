import React from 'react';

import types from './portfolio-item-types';
import pulseThumb from './images/pulse-thumb.jpg';

const Pulse = () => (
  <div>hi</div>
);

const pulseSpec = {
  slug: 'pulse-ux',
  title: 'Pulse',
  description: 'An iterative design project tackling the problem of student disengagement and confusion in large lecture-format classes. Part of my coursework at the Berkeley School of Information.',
  thumbImg: pulseThumb,
  contents: <Pulse />,
  type: [types.ux],
};

export default pulseSpec;