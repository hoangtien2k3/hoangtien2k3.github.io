import React from 'react';
import { Col, Row } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = () => (
  <div>
    <h1 className="titleSeparate">My Skills</h1>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={22}>
        <ProgressBar
          percent={90}
          text="Proficient in Java, Kotlin; familiar with Golang, C++"
        />
        <ProgressBar percent={80} text="Data Structures and Algorithms" />
        <ProgressBar percent={75} text="Database" />
        <ProgressBar percent={75} text="Creativity" />
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;
