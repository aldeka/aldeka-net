import React from  'react';

const Section = ({ children, title, anchor }) => (
  <section id={anchor} style={{
    padding: '1.5rem 0 .5rem 0',
  }}>
    <h2>{ title }</h2>
    { children }
    <div className="clearfix" />
  </section>
);

export default Section;