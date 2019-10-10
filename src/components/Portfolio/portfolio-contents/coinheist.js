import React from 'react';

import Link from '../../Link';

import coinThumb from './images/coinheist/coin-thumb.jpg';
import shirt from './images/coinheist/shirt.png';
import enigmaInvite from './images/coinheist/brand-enigmavalley-invite.png';
import coinheistLogo from './images/coinheist/brand-coinheist.png';
import coinheistCharacters from './images/coinheist/frontpage.png';
import ihftpLogo from './images/coinheist/brand-ihtfp-logo.png';

import rounds from './images/coinheist/rounds.png';

import huntInvitation from './images/coinheist/hunt-invitation.pdf';

import coin from './images/coinheist/coin.jpg';

import types from './portfolio-item-types';

const Coinheist = () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0 1rem',
  }}>
    <img src={shirt} alt="MIT Mystery Hunt 2013 t-shirt design with a monocle-wearing beaver" style={{ maxWidth: '100%' }} />
    <h3>Three entities in the hunt (an evil bank, a sympathetic hacker collective, and the heist itself) each needed their own branding.</h3>
    <img src={ihftpLogo} alt="IHFTP logo" style={{ maxWidth: '50%', marginBottom: '1rem' }} />
    <div style={{ marginBottom: '1rem'}}>
      <a href={huntInvitation}>
        <img src={enigmaInvite} alt="Enigma Valley Investment and Loan-themed hunt invitation, styled like a bank mailing." style={{ maxWidth: '100%' }} />
      </a>
    </div>
    <div style={{
      marginBottom: '1rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center' }}
    >
      <img src={coinheistLogo} alt="Coinheist logo" style={{ maxWidth: '100%' }} />
      <img src={coinheistCharacters} alt="Cartoon showing the six Coinheist members" style={{ maxWidth: '100%' }} />
    </div>
    <h3>Each round of puzzles in the main part of the hunt was associated with one of the heist members you needed to recruit for the heist. Each had its own theme, including web design.</h3>
    <img src={rounds} alt="Snippets of the web design for the six main rounds." style={{ maxWidth: '100%', marginBottom: '1rem' }} />
    <img src={coin} alt="2013 hunt coin, with a monocle-and-top-hat-wearing beaver with an Enigma Valley briefcase on the front and building 26 on the back" style={{ maxWidth: '100%' }} />
  </div>
);

const coinheistSpec = {
  slug: 'coinheist',
  title: 'Coinheist',
  description: (
    <span>I volunteered as art director for the <Link to="https://www.mit.edu/~puzzle/2013/" external>2013 MIT Mystery Hunt</Link>. I was responsible for pretty much every visual piece of the hunt--either done or delegated by me.</span>
  ),
  thumbImg: coinThumb,
  contents: <Coinheist />,
  type: [types.art, types.graphicDesign, types.ux, types.code],
};

export default coinheistSpec;