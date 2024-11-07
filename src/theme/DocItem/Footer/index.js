import React from 'react';
import clsx from 'clsx';
import { ThemeClassNames } from '@docusaurus/theme-common';

export default function DocItemFooter() {
  return (
    <>
      <footer className={clsx(ThemeClassNames.docs.docFooter, 'docusaurus-mt-lg')}>
      </footer>
    </>
  );
}
