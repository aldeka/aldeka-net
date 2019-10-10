import React from 'react';

import caliPath from './images/californiarepublic.png';
import caliPathThumb from './images/californiarepublic-thumb.png';

import muPath from './images/mu-thumb.png';

import ursaThumbPath from './images/ursa-thumb.png';
import ursaPath from './images/ursa.png';

import normandaleLogo from './images/logo_church.png';

import mqnx from './images/mqnx.png';

import cuddles from './images/cuddles.png';

import eyeballs from './images/eyeballs.png';

import abbeyGirlThumb from './images/abbeygirl-thumb.png';
import abbeyGirl from './images/abbeygirl.png';

import osc from './images/opensourcecrypto.png';
import oscThumb from './images/opensourcecrypto-thumb.png';

import santaThumb from './images/postcard-thumb.png';
import santa from './images/postcard.png';

import dinoDadThumb from './images/Dinosaur-Dad-thumb.png';
import dinoDad from './images/Dinosaur-Dad.png';

import wwZImg from './images/scripps-world-war-z.png';
import wwZThumbImg from './images/scripps-world-war-z-thumb.png';

import blueOx from './images/blue-ox-illustration.jpg';
import blueOxThumb from './images/blue-ox-illustration-thumb.png';

import blahaj from './images/blahajprint.png';
import blahajThumb from './images/blahajprint-thumb.png';

import sunset from './images/sunset.png'
import sunsetThumb from './images/sunset-thumb.png'

import polaris from './images/polaris.png'
import polarisThumb from './images/polaris-thumb.png'

import pepper from './images/roasted-bell-pepper.jpeg';
import pepperThumb from './images/roasted-bell-pepper-thumb.jpeg';

import FRLArt from './images/frl-labs.png';
import FRLThumb from './images/frl-labs-thumb.png';

import Hamster from './images/hamster-shirt.png';
import HamsterThumb from './images/hamster-shirt-thumb.png';

import aerofsShirt from './images/aerofs-shirt.png';
import aerofsShirtThumb from './images/aerofs-shirt-thumb.png';

// import angryCloud from './images/angrycloud.png';
// import angryCloudThumb from './images/angrycloud-thumb.png';

import Punchy from './images/punchy/hello-punchy.jpg';
import PunchySleep from './images/punchy/punchy-sleep.jpg';
import PunchyHappy from './images/punchy/punchy-happy.jpg';
import PunchyMad from './images/punchy/punchy-upset.jpg';
import PunchyThumb from './images/punchy/punchy-thumb.jpg';
import Sample from './images/punchy/punchlist-sample.jpg';

import types from './portfolio-item-types';

const { graphicDesign, art } = types;

// const angryCloudSpec = {
//   slug: 'angry-cloud',
//   title: 'Angry Cloud Loses Your Files',
//   description: 'The winning design for the team hoodies for the startup I worked for.',
//   thumbImg: angryCloudThumb,
//   img: angryCloud,
// };

const PunchyPage = () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0 1rem',
  }}>
    <div>
      <h3 style={{ maxWidth: '100%', textAlign: 'left' }}>
        I made Punchy the Markup as sort of a mascot for the Smart Recordset Team at Plangrid.
      </h3>
    </div>
    <img src={Punchy} style={{ maxWidth: '60%' }} alt="Punchy the Markup"/>
    <div>
      <h3>Punchy was based on "punch list" blueprint markups, which is why all the facial expression variants are text emoticons.</h3>
    </div>
    <img src={Sample} style={{ maxWidth: '60%' }} alt="Actual punch list markup on a blueprint"/>
    <img src={PunchyHappy} style={{ maxWidth: '60%' }} alt="Happy Punchy"/>
    <img src={PunchyMad} style={{ maxWidth: '60%' }} alt="Mad Punchy"/>
    <img src={PunchySleep} style={{ maxWidth: '60%' }} alt="Sleepy Punchy"/>
  </div>
);

const PunchySpec = {
  slug: 'punchy',
  title: 'Punchy the Markup',
  thumbImg: PunchyThumb,
  contents: <PunchyPage />,
  type: [art],
};

const caliSpec = {
  slug: 'california-republic',
  title: 'California Republic',
  description: 'T-shirt design amending the CA state flag.',
  thumbImg: caliPathThumb,
  img: caliPath,
  type: [art],
};

const AerofsShirtSpec = {
  slug: 'aerofs-shirt',
  title: 'AeroFS t-shirt design',
  description: "For a former startup employer's t-shirts.",
  thumbImg: aerofsShirtThumb,
  img: aerofsShirt,
  type: [graphicDesign],
};

const HamsterSpec = {
  slug: 'hamster-ant',
  title: 'Battle Hamster and Ant',
  description: 'A doodle, then t-shirt design, based on an in-joke at a previous employer about our continuous integration software.',
  thumbImg: HamsterThumb,
  img: Hamster,
  type: [art],
};

const FRLSpec = {
  slug: 'frl-silicon',
  title: 'VR/AR-specialized silicon team graphic',
  description: <span>Based on the <a href="https://en.wikipedia.org/wiki/Utah_teapot">Utah teapot.</a></span>,
  img: FRLArt,
  thumbImg: FRLThumb,
  type: [graphicDesign]
};

const pepperSpec = {
  slug: 'pepper',
  thumbImg: pepperThumb,
  img: pepper,
  type: [art],
};

const polarisSpec = {
  slug: 'polaris',
  title: "Polaris",
  description: 'Logo for an internal refactoring project',
  img: polaris,
  thumbImg: polarisThumb,
  type: [art, graphicDesign],
};

const sunsetSpec = {
  slug: 'sunset',
  title: 'Sunset',
  description: 'Illustration for a product wind-down announcement.',
  thumbImg: sunsetThumb,
  img: sunset,
  type: [graphicDesign],
};

const blueOxSpec = {
  slug: 'blue-ox',
  title: 'Babe the Blue Ox illustration',
  description: 'One of many illustrations for public domain stories made as part of a 2006 summer internship, in this case one of the Paul Bunyan tall tales.',
  img: blueOx,
  thumbImg: blueOxThumb,
  type: [art],
};

const wwZSpec = {
  slug: 'scripps-world-war-z',
  title: 'World War Z: Scripps College',
  description: 'Illustration for a 2008 Scripps College alumni newsletter for a story about the Claremont Colleges\' appearance in the zombie novel World War Z.',
  thumbImg: wwZThumbImg,
  img: wwZImg,
  type: [art],
};

const dinoDadSpec = {
  slug: 'code-dinosaur',
  title: 'Code Dinosaur',
  description: 'Father\'s Day illustration for my dad, an OG programmer.',
  thumbImg: dinoDadThumb,
  img: dinoDad,
  type: [art],
};

const eyeballSpec = {
  slug: 'eyeballs',
  title: 'Eyeballs',
  thumbImg: eyeballs,
  type: [art],
};

const blahajSpec = {
  slug: 'blahaj',
  title: 'Blähaj',
  description: 'Print of the blue IKEA stuffed shark and mascot for a friend\'s apartment.',
  thumbImg: blahajThumb,
  img: blahaj,
  type: [art],
};

const oscSpec = {
  slug: 'open-source-cryptography',
  thumbImg: oscThumb,
  img: osc,
  type: [graphicDesign],
};

const mqnxSpecification = {
  slug: 'mysteryquinox',
  title: 'Mysteryquinox 2019 badges',
  description: 'Iron-on patches designed for a puzzle retreat near Lake Tahoe',
  thumbImg: mqnx,
  type: [graphicDesign],
};

const muSpecification = {
  slug: 'mu',
  title: 'mu',
  description: 'Mew.',
  thumbImg: muPath,
  type: [art],
};

const ursaSpecification = {
  slug: 'ursa',
  title: 'Ursa',
  description: 'Art for the 2016 Berkeley Mystery Hunt, themed around the book/film The Martian.',
  thumbImg: ursaThumbPath,
  img: ursaPath,
  type: [art],
};

const normandaleSpecification = {
  slug: 'normandale-logo',
  title: 'Normandale Lutheran Church Bangladesh fundraiser logo.',
  thumbImg: normandaleLogo,
  type: [graphicDesign],
};

const cuddlesSpec = {
  slug: 'cuddles',
  title: 'Cuddles the Cuddlefish',
  description: (<span>Mascot of the <a href="http://docs.hylang.org/">Hy programming language</a>.</span>),
  thumbImg: cuddles,
  type: [art],
};

const santaSpec = {
  slug: 'mission-hipster-santa',
  title: 'Holiday postcard',
  description: 'Happy holidays from the hipsters below Sutro Tower.',
  thumbImg: santaThumb,
  img: santa,
  type: [art],
};

const abbeyGirlSpec = {
  slug: 'downtime-abbey',
  title: 'Downtime Abbey',
  description: 'Mascot for a former apartment and self-hosted web server.',
  thumbImg: abbeyGirlThumb,
  img: abbeyGirl,
  type: [art],
};

export default [
  muSpecification,
  HamsterSpec,
  mqnxSpecification,
  ursaSpecification,
  AerofsShirtSpec,
  oscSpec,
  blahajSpec,
  FRLSpec,
  cuddlesSpec,
  abbeyGirlSpec,
  // angryCloudSpec,
  eyeballSpec,
  santaSpec,
  polarisSpec,
  pepperSpec,
  wwZSpec,
  PunchySpec,
  dinoDadSpec,
  sunsetSpec,
  caliSpec,
  normandaleSpecification,
  blueOxSpec,
];
