import React from 'react';

import PusheenPopeenThumbPath from './images/pusheen-popeen-thumb.png';
import PusheenPopeenPath from './images/pusheen-popeen.png';
import PusheenPopeenOrig from './images/pusheen/pusheen-popeen-orig.jpeg';
import PusheenHot from './images/pusheen/pusheen-hot.jpeg';
import PusheenBus from './images/pusheen/pusheen-bus.jpeg';

import types from './portfolio-item-types';

const Pusheen = () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
  }}>
    <div style={{
      marginBottom: 16,
      display: 'flex',
      flexDirection: 'column'
    }}>
      <h3>Original sketch:</h3>
      <img src={PusheenPopeenOrig} style={{ maxWidth: 512 }} alt="Pusheen adds an item to the top of a stack. Popeen knocks the top item off of the stack."/>
    </div>
    <div style={{
      marginBottom: 16,
      display: 'flex',
      flexDirection: 'column'
    }}>
      <h3>Final version:</h3>
      <img src={PusheenPopeenPath} style={{ maxWidth: 512 }} alt="Pusheen adds an item to the top of a stack. Popeen knocks the top item off of the stack." />
    </div>
    <div style={{
      marginBottom: 16,
      display: 'flex',
      flexDirection: 'column'
    }}>
      <h3>Two other Pusheen sketches:</h3>
      <img src={PusheenHot} style={{ maxWidth: 512 }} alt="Pusheen lying in front of a fan, panting" />
      <img src={PusheenBus} style={{ maxWidth: 512 }} alt="Pusheen in a cardboard box decorated like a Facebook shuttle bus" />
    </div>
  </div>
);

const pushPopeenSpecification = {
  slug: 'push-pop',
  title: 'Pusheen/Popeen',
  description: 'Cats explain a computer science data structures operation. Stacks 4 LIFO.',
  thumbImg: PusheenPopeenThumbPath,
  img: PusheenPopeenPath,
  contents: <Pusheen />,
  type: [types.art],
};

export default pushPopeenSpecification;