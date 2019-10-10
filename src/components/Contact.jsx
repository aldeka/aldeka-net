import React from 'react';

import Section from './section';
import Link from './Link';

const Contact = () => (
  <Section title="Contact" anchor="contact">
    <div>
      <Link to="mailto:karen@tolva.net" external>
        <span role="img" aria-label="mail">✉️</span> email
      </Link>
      {" "}
      <Link to="https://github.com/aldeka" external>
        <span role="img"  aria-label="octocat">🐙</span> github
      </Link>
      {" "}
      <Link to="https://www.linkedin.com/in/tolva/" external>
        <span role="img" aria-label="business">💼</span> linkedin
      </Link>
    </div>
  </Section>
);

export default Contact;