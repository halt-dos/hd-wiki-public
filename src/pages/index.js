import React from 'react';
import {Redirect} from 'react-router-dom';
import {useLatestVersion} from '@docusaurus/plugin-content-docs/client';

export default function Home() {
  const latestVersion = useLatestVersion(undefined);
  const introPath = !latestVersion?.path || latestVersion.path === '/' ? '/introduction' : `${latestVersion.path.replace(/\/$/, '')}/introduction`;
  return <Redirect to={introPath} />;
}