import React, { useEffect } from 'react';
import ActualDocItem from '@theme/DocItem';
import CustomFooter from '@site/src/components/CustomFooter';
import styles from './styles.module.scss';

const X_WIDE_PATHS = new Set([
  '/introduction',
  '/enterprise',
  '/community/introduction',
  '/professional/introduction',
  '/v6/introduction',
  '/v6/enterprise',
  '/v7/introduction',
  '/v7/enterprise',
  '/v8/introduction',
  '/v8/enterprise',
  '/haltdos-wiki/introduction',
  '/haltdos-wiki/enterprise',
  '/haltdos-wiki/community',
  '/haltdos-wiki/professional',
  '/haltdos-wiki/v6/introduction',
  '/haltdos-wiki/v6/enterprise',
  '/haltdos-wiki/v7/introduction',
  '/haltdos-wiki/v7/enterprise',
  '/haltdos-wiki/v8/introduction',
  '/haltdos-wiki/v8/enterprise',
]);

const isXWidePath = (pathname: string) => X_WIDE_PATHS.has(pathname);

const CustomDocItem = props => {
  useEffect(() => {
    const tables = document.querySelectorAll('table');
    tables.forEach(table => {
      const cells = table.querySelectorAll('td');
      cells.forEach(cell => {
        const codeBlocks = cell.querySelectorAll('code');
        codeBlocks.forEach(codeBlock => {
          codeBlock.innerHTML = codeBlock.innerHTML.replace(/_/g, '_<wbr>');
          codeBlock.innerHTML = codeBlock.innerHTML.replace(/\./g, '.<wbr>');
          console.log(codeBlock.innerHTML);
        });
      });
    });
  }, []);

  const xWide = isXWidePath(props.location.pathname);

  return (
    <div
      className={
        xWide
          ? `custom_doc_item_wrapper custom_doc_item_wrapper-x-wide`
          : `custom_doc_item_wrapper ${styles['custom_doc_item_wrapper']}`
      }
    >
      <ActualDocItem {...props} />
      <div
        className={
          xWide
            ? `custom_doc_item_footer-x-wide`
            : styles['custom_doc_item_footer']
        }
      >
        {/*<PageHelpful />*/}
        <CustomFooter />
      </div>
    </div>
  );
};

export default CustomDocItem;
