import { css } from '@emotion/react';
import { SelectContext } from '../../lib/context';
import { useContext, useState } from 'react';

export type CategoriesProps = {};

export default function Categories({}: CategoriesProps) {
  return (
    <main css={CategoriesStyle}>
      <div>Javascript</div>
      <div>Typescript</div>
      <div>React</div>
      <div>Node js</div>
      <div>Database</div>
      <div>Database</div>
      <div>Database</div>
      <div>Database</div>
      <div>Database</div>
      <div>Database</div>
    </main>
  );
}
export const CategoriesStyle = css({
  display: 'flex',
  flexDirection: 'column',
  color: '#292929',
  fontFamily: '"Rubik", "sans-serif"',
  fontSize: '6.25rem',
  animationDelay: '.2s',
  animationDuration: '.8s',
  animationName: 'bottomToTop',
  animationFillMode: 'both',
  animationTimingFunction: 'ease',
  marginBottom: '8px',
  fontWeight: 600,
});
