import React from 'react';

const FeaturedItem = ({
  thumbImg, img, alt, title, description, resetFullscreen, contents,
}) => (
  <div style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    background: 'rgba(0,0,0,0.5)',
    zIndex: 20,
  }}
    onClick={resetFullscreen}
  >
    <div style={{
      flex: '1 1 auto',
      marginTop: '4vh',
      maxHeight: '96vh',
      maxWidth: '80vw',
      width: 900,
      background: 'white',
      display: 'flex',
      flexDirection: 'column',
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
      border: '4pt solid black',
      borderBottom: 0,
    }}>
      <div style={{
        flex: '1 1 auto',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#f6f6f6',
      }}>{
        contents
        ? contents
        : <img
          src={img ? img : thumbImg}
          alt={alt ? alt : title}
          title={alt ? alt : title}
          style={{
            maxWidth: '100%',
          }}
        />
      }</div>
      {
        (title || description) && (
          <div style={{
            flex: '0 0 auto',
            padding: '0 16px',
          }}>
            { title && <h2>{title}</h2>}
            { description && <p>{description}</p>}
          </div>
        )
      }
    </div>
  </div>
);

export default FeaturedItem;