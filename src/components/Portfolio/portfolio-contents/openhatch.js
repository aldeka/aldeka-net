import React from "react";

import Link from '../../Link';

import types from './portfolio-item-types';
import SufjanThumbPath from './images/openhatch/sufjan-thumb.png';

import Sufjan from './images/openhatch/sufjan.png';
import Donate from './images/openhatch/donate.png';
import Logo from './images/openhatch/logo-fun.png';

import Missions from './images/openhatch/missions.png';
import People from './images/openhatch/people.png';
import Projects from './images/openhatch/projects.png';
import Ship from './images/openhatch/ship.png';

import Screenshot1 from './images/openhatch/screenshot-old.png';
import Screenshot2 from './images/openhatch/screenshot-less-old.png';
import Screenshot3 from './images/openhatch/screenshot-new.png';

const OpenHatch = () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0 1rem',
  }}>
    <h3>During my startup incubator summer with the <Link to="http://openhatch.org/">OpenHatch</Link> team, I designed a baby penguin mascot for the company. For obscure reasons, the penguin was named Sufjan. Originally Sufjan was the default profile photo for new users, but the character took on a life of its own.</h3>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
      <img src={Sufjan} alt="Sufjan the baby penguin" style={{ maxWidth: '40%' }}/>
      <img src={Logo} alt="OpenHatch logo, with 'Code is fun" style={{ maxWidth: '40%' }}/>
    </div>
    <h3>Sufjan went through many variants, including hand-drawn Sufjans sent to our donors.</h3>
    <img src={Donate} alt="Sufjan busking" style={{ maxWidth: '100%' }}/>
    <h3>The OpenHatch web app also featured banner cartoons for each section.</h3>
    <img src={Missions} alt="Missions section with a boulderer mid-climb" style={{ maxWidth: '100%' }}/>
    <img src={People} alt="People section with set of FOSS personas" style={{ maxWidth: '100%' }}/>
    <img src={Projects} alt="Projects section with blueprints" style={{ maxWidth: '100%', marginBottom: 16 }}/>
    <img src={Ship} alt="Cartoon of a container ship with different famous open source projects' logos on the containers" title="Art on the bugfix importer page" style={{ maxWidth: '100%' }}/>
    <h3>As lead designer and later volunteer and board member, I iterated on the website styling over time.</h3>
    <img src={Screenshot1} alt="Screenshot of openhatch.org circa 2009" title="Circa 2009" style={{ maxWidth: '100%', marginBottom: '1rem' }}/>
    <img src={Screenshot2} alt="Screenshot of openhatch.org in late 2009" title="Later 2009" style={{ maxWidth: '100%', marginBottom: '1rem' }}/>
    <img src={Screenshot3} alt="Screenshot of openhatch.org circa 2011" title="Circa 2011" style={{ maxWidth: '100%', marginBottom: '1rem' }}/>
  </div>
);

const openhatchSpecification = {
  slug: 'openhatch',
  title: 'OpenHatch',
  description: 'An startup, later nonprofit, for helping people get started in open source contributions.',
  thumbImg: SufjanThumbPath,
  contents: <OpenHatch />,
  type: [types.graphicDesign, types.uxDesign, types.art],
};

export default openhatchSpecification;
