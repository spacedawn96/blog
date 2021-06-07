import { css } from '@emotion/react';
import dynamic from 'next/dynamic';

export type ArticleListProps = {};

export default function ArticleList({}: ArticleListProps) {
  return (
    <>
      <main css={ArticleContainer}>
        <section>
          <article>
            <div css={ArticleWrapper}>
              <h1 css={ArticleLeft}>Javascript</h1>
              <p css={ArticleRight}>
                This was a dream project and an honor to represent Walt’s wonderful
                creation: Mickey Mouse, an American icon. When I received the proposal
                from the Walt Disney Company to paint 100 Mickey’s (in 2002), I packed up
                my paints and brushes and flew to a little island in the Caribbean.
                Inspired by nature’s colors — and the occasional plunge in the river — I
                returned two weeks later with the first 21 mice. That was the easy part.
                The next 79 were more challenging and took 16 months to finish. The
                challenge was to make each one a different pose, style, or medium, as well
                as paying homage to the history of Mickey Mouse.
              </p>
            </div>
            <div>
              <h2>1.hello</h2>
            </div>
            <div css={ArticleWrapper}>
              <div css={ArticleLeft}>
                <small>item</small>
                <small>item2</small>
                <small>item2</small>
                <small>item2</small>
              </div>
              <aside css={ArticleRight}>
                <small>item2</small>
              </aside>
            </div>
            <div>
              <h2>2.hello</h2>
            </div>
            <div css={ArticleWrapper}>
              <div css={ArticleLeft}>
                <small>item</small>
                <small>item2</small>
                <small>item2</small>
                <small>item2</small>
                <small>item2</small>
              </div>
              <aside css={ArticleRight}>
                <small>item2</small>
                <small>item2</small>
              </aside>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}

const ArticleContainer = css({
  display: 'flex',

  animationDelay: '.2s',
  animationDuration: '.8s',
  animationName: 'bottomToTop',
  animationFillMode: 'both',
  animationTimingFunction: 'ease',

  h1: {
    fontSize: '6.25rem',
  },
  p: {
    fontSize: '1rem',
    marginTop: '10%',
  },
  h2: {
    fontSize: '5.25rem',
  },

  small: {
    fontSize: '3rem',
  },
});

const ArticleWrapper = css({
  display: 'flex',

  color: '#292929',
});

const ArticleLeft = css({
  width: '50%',

  display: 'flex',
  flexDirection: 'column',
});

const ArticleRight = css({
  display: 'flex',
  flexDirection: 'column',
  width: '50%',
  // marginLeft: '10%',
});
