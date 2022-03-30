import React from 'react';
import banner from '../assets/images/test.png';

export interface HelloProps {
  compiler: string;
  framework: string;
}

export function Hello(props: HelloProps) {
  const { compiler, framework } = props;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img alt="banner" style={{ width: '100%' }} src={banner} />
      <h1 style={{}}>
        Hello from
        {' '}
        {compiler}
        {' '}
        and
        {' '}
        {framework}
        {' '}
        !
      </h1>
    </div>
  );
}
