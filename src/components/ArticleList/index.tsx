import { css } from '@emotion/react';
import Header from '../Header';

export type ArticleListProps = {};

export default function ArticleList({}: ArticleListProps) {
  return (
    <>
      <main css={ArticleContainer}>
        <section css={ArticleListStyle}>
          <article>
            <span>hellozz</span>
            <div>hello</div>
            <small>item</small>
            <div>hello</div>
            <small>item</small>
            <div>hello</div>
          </article>
        </section>
        <section css={ArticleListTitle}>
          <article>
            <p>hello</p>
            <small>item2</small>
            <small>item2</small>
            <div>hello2</div>
            <small>item2</small>
            <div>hello2</div>
            <small>item2</small>
            <div>hello2</div>
          </article>
        </section>
      </main>
    </>
  );
}

const ArticleContainer = css({
  display: 'flex',
  border: '1px solid red',
});

const ArticleListStyle = css({
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
  fontWeight: 600,
  width: '50%',
  border: '1px solid pink',
});

const ArticleListTitle = css({
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  color: '#292929',
  fontFamily: '"Rubik", "sans-serif"',
  fontSize: '6.25rem',
  animationDelay: '.2s',
  animationDuration: '.8s',
  animationName: 'bottomToTop',
  animationFillMode: 'both',
  animationTimingFunction: 'ease',
  fontWeight: 600,
  border: '1px solid blue',
  width: '50%',

  p: {
    fontSize: '1.2rem',
  },
  span: {
    fontSize: '6.25rem',
  },

  small: {
    fontSize: '3rem',
  },
});
