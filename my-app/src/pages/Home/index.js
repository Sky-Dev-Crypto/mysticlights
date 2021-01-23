import React from 'react';
import loadable from '@loadable/component';

import IntroContent from '../../content/IntroContent.json';
import MiddleBlockContent from '../../content/MiddleBlockContent.json';
import AboutContent from '../../content/AboutContent.json';
import MissionContent from '../../content/MissionContent.json';
import ProductContent from '../../content/ProductContent.json';
import ContactContent from '../../content/ContactContent.json';

const ContactFrom = loadable(() => import('../../components/ContactForm'));
const ContentBlock = loadable(() => import('../../components/ContentBlock'));
const MiddleBlock = loadable(() => import('../../components/MiddleBlock'));
const Container = loadable(() => import('../../common/Container'));
const ScrollToTop = loadable(() => import('../../common/ScrollToTop'));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        first="true"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="https://filemanager.aegeantt.com/cdn/MysticLights/fefdeb69-df81-40ca-b4b0-cb8f1dc34b2c.jfif"
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="https://filemanager.aegeantt.com/cdn/MysticLights/a92247e0-efc5-4868-a423-acb3074566a1.jfif"
        id="about"
      />
      <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="https://filemanager.aegeantt.com/cdn/MysticLights/387a46fd-90a2-4296-aa47-c16fa7239886.jfif"
        id="mission"
      />

      <ContentBlock
        type="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="https://filemanager.aegeantt.com/cdn/MysticLights/6d0f4718-75ca-4e16-b95d-9a596890144e.jfif"
        id="product"
      />
      <ContactFrom
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
