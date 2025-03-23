import React from 'react';

import SEO from '../../Seo';

const SelectedProjects = () => (
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
      <h1 className="titleSeparate">Selected Projects</h1>
      <p>
        <h3 style={{ display: 'inline' }}>
          ecommerce-microservices (open source, 191 stars on github)
        </h3>
        {' '}
        Microservice Architecture with system for e-commerce project! Spring
        Boot microservices app
      </p>
      <p>
        <h3 style={{ display: 'inline' }}>reactify-core (java library)</h3>
        Java library for developing reactive programming(reactor-core) backend
        systems in microservices
      </p>
      <p>
        <h3 style={{ display: 'inline' }}>ezbuy (ecommerce system business)</h3>
        {' '}
        EzBuy Server - Ecommerce Backend
      </p>
    </div>
  </div>
);

export default SelectedProjects;
