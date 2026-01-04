import React from 'react';
import { Layout } from 'antd';
import Header from '../components/PageLayout/Header';

import SidebarWrapper from '../components/PageLayout/Sidebar';
import AboutMe from '../components/PageFragments/HomePage/AboutMe';
import SkillsProgress from '../components/PageFragments/HomePage/SkillProgress';
import Experience from '../components/PageFragments/HomePage/Experience';

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
          <div className="animate-fade-in-up delay-100"><AboutMe /></div>
          <div className="animate-fade-in-up delay-300"><Experience /></div>
          <div className="animate-fade-in-up delay-200"><SkillsProgress /></div>
        </div>
      </SidebarWrapper>
    </Layout>
  </Layout>
);
