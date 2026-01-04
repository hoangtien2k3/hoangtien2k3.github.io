import React from 'react';
import { Col, Row } from 'antd';
import { domHtml, stripTags } from '../../../utils/stripTags';

import SEO from '../../Seo';
import AboutTile from '../../AbouTile';

const pageText = {
  paraOne:
    'I am a backend developer, constantly building efficient systems and contributing open source code to the community.',
  // paraTwo: 'My research focuses on Streaming Machine Learning',
  paraTwo: '',
};

const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`;
  return (
    <div style={{ lineHeight: '180%' }}>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={[
            'Anh',
            'Tien',
            'Hoang',
            'Backend developer',
            'Java',
            'ReactJS',
            'Backend System',
            'Java Webflux',
            'Reactive Programming',
          ]}
        />
        <h1 className="titleSeparate">About Me</h1>
        <p>{pageText.paraOne}</p>
        {/* eslint-disable-next-line react/no-danger */}
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="location.png"
            height={60}
            alt="location image"
            textH3="Viet Nam"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="research.jpg"
            alt="web image"
            textH3="Backend Development"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="graduation.png"
            alt="graduation image"
            textH3="Information technology"
            height={60}
            width={60}
          />
        </Col>
      </Row>
    </div>
  );
};
export default AboutMe;
