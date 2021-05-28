import { css } from '@emotion/react';
import { SelectContext } from '../../lib/context';
import { useContext, useState } from 'react';

export type CategoriesProps = {};

export default function Categories({}: CategoriesProps) {
  return (
    <section css={CategoriesStyle}>
      <span>Javascript</span>
      <span>Typescript</span>
      <span>React</span>
      <span>Node js</span>
      <span>Database</span>
    </section>
  );
}
const CategoriesStyle = css({
  display: 'flex',
  flexDirection: 'column',
  color: '#292929',
  textTransform: 'uppercase',
  fontFamily: '"Aeonik-Bold","Helvetica","Arial",sans-serif',
  fontSize: '5rem',
  animationDelay: '.2s',
  animationDuration: '.8s',
  animationName: 'bottomToTop',
  animationFillMode: 'both',
  animationTimingFunction: 'ease',
  marginBottom: '8px',
  fontWeight: 600,
});
