import React from 'react';

import ExitRageLeft from './images/rage/exitrageleft.png';
import ExitRageLeftThumb from './images/rage/exitrageleft-thumb.png';

import Aquarius from './images/rage/aquarius.png';

import RageCat from './images/rage/ragecat.png';

import Warehouse from './images/rage/ragewarehouse.png';

import types from './portfolio-item-types';

const { graphicDesign, art } = types;

const Rage = () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }}>
    <img src={ExitRageLeft} style={{ maxWidth: '100%' }} alt="Bear silhouette bounding stage left, with text 'Exit Rage Left'" />
    <img src={Warehouse} style={{ maxWidth: '100%' }} alt="'Metropolitan Rage Warehouse - Ire Proof - MIT Mystery Hunt 2015' with outlines of crumbing brick" />
    <img src={Aquarius} style={{ maxWidth: '60%' }} alt="Rage of Aquarius - MIT Mystery Hunt 2017"/>
    <img src={RageCat} style={{ maxWidth: '80%' }} alt="(still just a) cat in a rage - mit mystery hunt 2018"/>
  </div>
);

const mysteryhuntshirtSpec = {
  slug: 'exit-rage-left',
  title: 'Exit Rage Left',
  description: 'Team t-shirt designs for my MIT Mystery Hunt team, Rage.',
  contents: <Rage />,
  thumbImg: ExitRageLeftThumb,
  type: [graphicDesign, art],
};

export default mysteryhuntshirtSpec;
