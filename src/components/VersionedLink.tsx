import React from 'react';
import Link from '@docusaurus/Link';
import {useActiveVersion} from '@docusaurus/plugin-content-docs/client';
import {
  alreadyHasVersionPrefix,
  isUnversionedPluginPath,
  joinVersionPath,
  normalizeDocPath,
} from '@site/src/utils/versionedPath';

type VersionedLinkProps = {
  to: string;
  children?: React.ReactNode;
  className?: string;
  [key: string]: unknown;
};

const VersionedLink = ({to, ...props}: VersionedLinkProps) => {
  const activeVersion = useActiveVersion(undefined);
  const cleanTo = normalizeDocPath(to);

  if (isUnversionedPluginPath(cleanTo) || alreadyHasVersionPrefix(cleanTo)) {
    return <Link to={`/${cleanTo}`} {...props} />;
  }

  return <Link to={joinVersionPath(activeVersion?.path, cleanTo)} {...props} />;
};

export default VersionedLink;
