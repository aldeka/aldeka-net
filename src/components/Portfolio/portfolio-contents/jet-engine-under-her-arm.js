import React from 'react';

import types from './portfolio-item-types';

import jetGirlThumb from './images/jetgirl-thumb.png';
import jetGirlImg from './images/jetgirl.png';

const jetGirlSpecification = {
  slug: 'jet-engine-under-her-arm',
  title: '"I was carrying a jet engine under my arm, looking for a plane."',
  description: (
    <span>
      Inspired by
      {' '}
      <a href="https://books.google.com/books?id=IYZLDwAAQBAJ&lpg=PT8&ots=KUez7KuzUr&dq=%22looking%20for%20a%20plane%22%20jet%20engine%20dessa&pg=PT8#v=onepage&q&f=false">
        a paragraph
      </a>
      {' '}
      from Dessa's memoir, "My Own Devices".
    </span>
  ),
  thumbImg: jetGirlThumb,
  img: jetGirlImg,
  type: [types.art],
};

export default jetGirlSpecification;