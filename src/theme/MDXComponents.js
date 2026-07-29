import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import {useActiveVersion} from '@docusaurus/plugin-content-docs/client';
import {withVersionPrefix} from '@site/src/utils/versionedPath';

function VersionAwareA({href, to, ...props}) {
  const activeVersion = useActiveVersion(undefined);
  const target = href ?? to;
  const versioned = withVersionPrefix(target, activeVersion?.path);

  if (href !== undefined) {
    return <MDXComponents.a href={versioned} {...props} />;
  }
  if (to !== undefined) {
    return <MDXComponents.a to={versioned} {...props} />;
  }
  return <MDXComponents.a {...props} />;
}

export default {
  ...MDXComponents,
  a: VersionAwareA,
};
