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
      <p style={{ marginBottom: '2em' }}>
        <Row>
          <Col xs={7}>
            <h3>Full-stack Developer</h3>
          </Col>
          <Col xs={11} style={{ display: 'flex', justifyContent: 'center' }}>
            <h3>Sme-Hub Viettel Telecom</h3>
          </Col>
          <Col xs={6} style={{ display: 'flex', justifyContent: 'end' }}>
            <h3>May 2024 – Now</h3>
          </Col>
        </Row>
        <li>
          Multi-service management: Integrate and manage telecom, cloud,
          hosting, and services, contract connection, signature
        </li>
        <li>
          Security & cost optimization: Security support, data backup, and cost
          tracking tools help businesses control
        </li>
        <li>
          Tools and languages: Java11, Reactive programming, Microservice,
          Keycloak, Minio ...
        </li>
        {' '}
      </p>
      <p style={{ marginBottom: '2em' }}>
        <Row>
          <Col xs={7}>
            <h3>Backend Developer</h3>
          </Col>
          <Col xs={11} style={{ display: 'flex', justifyContent: 'center' }}>
            <h3>mBCCS Backend Viettel</h3>
          </Col>
          <Col xs={6} style={{ display: 'flex', justifyContent: 'end' }}>
            <h3>Jan 2024 – April 2024</h3>
          </Col>
        </Row>
        <li>Security & cost optimization: Security support, data backup</li>
        <li>
          Multi-channel integration: Support ordering and processing requests
          via web, mobile app, and other online channels
        </li>
        <li>
          Tools and languages: Java 8 (Spring-Boot Framework), MVC pattern, BPMN
          flow, SOAP API Ehcache, Jenkin (CI/CD)
        </li>
        {' '}
      </p>
      <p style={{ marginBottom: '2em' }}>
        <Row>
          <Col xs={7}>
            <h3>Android Developer</h3>
          </Col>
          <Col xs={11} style={{ display: 'flex', justifyContent: 'center' }}>
            <h3>Fastee Cen Land</h3>
          </Col>
          <Col xs={6} style={{ display: 'flex', justifyContent: 'end' }}>
            <h3>June 2023 – Nov 2023</h3>
          </Col>
        </Row>
        <li>
          Actively contributed to developing an Android application (Fastee)
        </li>
        <li>
          Focused on golf course booking alongside building foundational backend
          components to support the app’s functionality.
        </li>
        <li>
          Java, Kotlin, Android Jetpack Compose, MVVM Architecture, GitHub
        </li>
        {' '}
      </p>
    </div>
  </div>
);

export default Experience;
