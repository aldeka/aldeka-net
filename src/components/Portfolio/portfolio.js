import React from "react";
import { intersection } from "lodash";

import ferrisSpec from './portfolio-contents/ferris';
import dockerSpec from './portfolio-contents/lifting-a-docker';
import pushPopeenSpec from './portfolio-contents/push-pop';
import reindeerSpec from './portfolio-contents/the-reindeer-returns-the-sun';
import openhatchSpec from './portfolio-contents/openhatch';
import jetGirlSpec from './portfolio-contents/jet-engine-under-her-arm';
import pulseSpec from './portfolio-contents/pulse';
import rageSpec from './portfolio-contents/rage-shirts';
import ArVrSpec from './portfolio-contents/arvr-logos';
import CoinheistSpec from './portfolio-contents/coinheist';
import miracleGeneratorSpec from './portfolio-contents/miracle-generator';
import specs from './portfolio-contents/art-specifications';

import beta from './portfolio-contents/images/beta.png';
import betaThumb from './portfolio-contents/images/beta-thumb.png';

import Section from '../section';
import Item from './Item';
import NavButtons from './NavButtons';

import "./portfolio.css";

const PortfolioItems = [
  miracleGeneratorSpec,
  dockerSpec,
  pushPopeenSpec,
  ferrisSpec,
  reindeerSpec,
  rageSpec,
  openhatchSpec,
  CoinheistSpec,
  {
    slug: 'beta',
    img: beta,
    thumbImg: betaThumb,
  },
  pulseSpec,
  jetGirlSpec,
  ArVrSpec,
  ...specs,
];

/*
  MIT mystery hunt art team
  t-shirts????
  aerofs logo stuff
  cartoons
  our wedding stuff
  AR/VR icon concepts
  plangrid god mode design
  anniedoc
*/

const DesignPortfolioPage = () => {
  const [fullScreenItemIndex, setFullScreenItem] = React.useState();
  const [typeFilter, setTypeFilter] = React.useState(null);

  return (
    <Section title="Portfolio" anchor="portfolio">
      <NavButtons typeFilter={typeFilter} setTypeFilter={setTypeFilter}/>
      <div className="portfolio-items">
        {
          PortfolioItems.map((item, i) => (
            <Item
              {...item}
              isFullScreen={fullScreenItemIndex === i}
              onClick={() => setFullScreenItem(i)}
              resetFullscreen={() => setFullScreenItem(undefined)}
              hidden={typeFilter &&
                intersection(item.type, typeFilter).length === 0}
            />
          ))
        }
      </div>
    </Section>
  );
}

export default DesignPortfolioPage;