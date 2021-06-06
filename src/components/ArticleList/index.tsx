import { css } from '@emotion/react';
import Header from '../Header';

export type ArticleListProps = {};

export default function ArticleList({}: ArticleListProps) {
  return (
    <>
      <main css={ArticleContainer}>
        <section css={ArticleListStyle}>
          <article>
            <h1>Javascript</h1>
            <h2>hello</h2>
            <small>item</small>
            <div>hello</div>
            <small>item</small>
            <div>hello</div>
          </article>
        </section>
        <section css={ArticleListTitle}>
          <article>
            <p>
              This was a dream project and an honor to represent Walt’s wonderful
              creation: Mickey Mouse, an American icon. When I received the proposal from
              the Walt Disney Company to paint 100 Mickey’s (in 2002), I packed up my
              paints and brushes and flew to a little island in the Caribbean. Inspired by
              nature’s colors — and the occasional plunge in the river — I returned two
              weeks later with the first 21 mice. That was the easy part. The next 79 were
              more challenging and took 16 months to finish. The challenge was to make
              each one a different pose, style, or medium, as well as paying homage to the
              history of Mickey Mouse.
            </p>
            <aside css={ArticleAside}>
              <small>item2</small>
              <small>item2</small>
              <small>item2</small>
              <small>item2</small>
            </aside>
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
  width: '50%',
  border: '1px solid pink',

  h1: {
    fontSize: '6.25rem',
    marginBottom: '6rem',
  },
  h2: {
    fontSize: '5.25rem',
  },
  small: {
    fontSize: '4.25rem',
  },
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
  width: '40%',
  marginLeft: '10%',

  p: {
    fontSize: '1rem',
    marginTop: '6rem',
  },
  span: {
    fontSize: '6.25rem',
  },

  small: {
    fontSize: '3rem',
  },
});

const ArticleAside = css({
  display: 'flex',
  flexDirection: 'column',
});
