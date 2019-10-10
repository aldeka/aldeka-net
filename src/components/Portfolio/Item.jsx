import React from 'react';

import FeaturedItem from './FeaturedItem';

import './Item.css';

const Item = ({ isFullScreen, onClick, resetFullscreen, hidden, ...itemProps}) => {
  const thumb = (
    <div
      className="item"
      alt={itemProps.title}
      title={itemProps.title}
      style={{
        backgroundImage: `url("${itemProps.thumbImg}")`,
        display: hidden ? 'none' : 'block',
        cursor: 'pointer',
      }}
      onClick={onClick}
    />
  );

  if (isFullScreen) {
    return (
      <>
        { thumb }
        <FeaturedItem {...itemProps} resetFullscreen={resetFullscreen} />
      </>
    );
  }

  return thumb;
}

export default Item;
