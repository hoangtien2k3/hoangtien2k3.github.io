import React from 'react';
import { Layout } from 'antd';
import Header from '../components/PageLayout/Header';

import SidebarWrapper from '../components/PageLayout/Sidebar';
import AboutMe from '../components/PageFragments/HomePage/AboutMe';
import SkillsProgress from '../components/PageFragments/HomePage/SkillProgress';
import Experience from '../components/PageFragments/HomePage/Experience';
import SelectedProjects from '../components/PageFragments/HomePage/SelectedProjects';

export default () => (
  <Layout className="outerPadding">
    <Layout
      className="container"
      style={{
        background: 'red',
      }}
    >
      <Header />
      <SidebarWrapper>
        <div id="hoangtien2k3">
          <AboutMe />
          <Experience />
          <SelectedProjects />
          <SkillsProgress />
        </div>
      </SidebarWrapper>
    </Layout>
  </Layout>
);
