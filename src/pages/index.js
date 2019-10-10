import React from "react";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Portfolio from '../components/Portfolio/portfolio';
import Contact from '../components/Contact';

const IndexPage = () => (
  <Layout>
    <SEO title="Karen Rustad Tölva's home page" />
    <h1>Hello</h1>
    <div className="text">
      <p>
        You've found my home page.
      </p>
      <p>
        My name's Karen Rustad Tölva.
        Originally from Minnesota,
        I lived in DC, Atlanta, and Philadelphia for a couple years before moving
        to the Bay Area for grad school in 2010.
      </p>

      <p>
        At my day job, I make the clackety noise on a keyboard until frontend software and UI pixels come out.
        Outside of work I make art sometimes. Other hobbies include reading books, bicycling,
        cooking, despairing over current events, fantasizing about homebuilding and urban planning,
        and spending time with friends and family.
      </p>

      <p>
        Past lives have included being
        a free culture / free software / open access activist,
        an almost-lawyer with interests in national security, civil liberties, and tech policy,
        a full-stack web developer with extensive involvement in the Python community,
        a youth soccer referee,
        a resort cleaning lady,
        a choir brat,
        a startup incubator alum,
        a high school debate forum moderator,
        and probably a few that I'm forgetting.
      </p>

      <p>
        What will I do next?
      </p>
    </div>
    <Portfolio />
    <Contact />
  </Layout>
)

export default IndexPage
