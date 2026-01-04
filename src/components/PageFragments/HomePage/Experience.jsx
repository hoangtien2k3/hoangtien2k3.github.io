import React from 'react';
import { Col, Row } from 'antd';

import SEO from '../../Seo';

const Experience = () => (
  <div style={{ lineHeight: '180%' }}>
    <div>
      <SEO
        title="About"
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
      <h1 className="titleSeparate">Work Experience</h1>
      <p style={{ marginBottom: '1em' }}>
        <Row>
          <Col xs={7}>
            <h3>VTI (VTI Group)</h3>
          </Col>
        </Row>
        <li style={{ marginLeft: '1rem' }}>Develop the Mobi system (a ride-hailing system for 3 markets: Japan, Malaysia, and Vietnam)</li>
        <li style={{ marginLeft: '1rem' }}>Developing a facial recognition payment system for buses in Japan.</li>
      </p>

      <p style={{ marginBottom: '1em' }}>
        <Row>
          <Col xs={7}>
            <h3>Viettel Telecom</h3>
          </Col>
        </Row>
        <li style={{ marginLeft: '1rem' }}>Developing a Java backend microservice system (SME-HUB)</li>
        <li style={{ marginLeft: '1rem' }}>Java (SpringBoot Framework), MVC pattern, BPMN flow, SOAP API Ehcache, Jenkin (CI/CD), K8S, Docker</li>
      </p>

      <p style={{ marginBottom: '1em' }}>
        <Row>
          <Col xs={7}>
            <h3>Cen Land (Cen Group)</h3>
          </Col>
        </Row>
        <li style={{ marginLeft: '1rem' }}>Actively contributed to developing an Android application (Fastee)</li>
        <li style={{ marginLeft: '1rem' }}>Focused on golf course booking alongside building foundational backend components to support the app’s functionality.</li>
      </p>
    </div>
  </div>
);

export default Experience;
