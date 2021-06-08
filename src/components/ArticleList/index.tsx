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
              </p>
            </div>
            <div>
              <h2>1.hello</h2>
            </div>
            <div css={ArticleWrapper}>
              <div css={ArticleLeft}>
                <div css={ArticleItem}>
                  <small>item</small>
                  <div>2019/2/3</div>
                </div>
                <small>item2</small>
                <small>item2</small>
                <small>item2</small>
              </div>
              <div css={ArticleRight}>
                <small>item2</small>
              </div>
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
              <div css={ArticleRight}>
                <small>item2</small>
                <small>item2</small>
              </div>
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
              <div css={ArticleRight}>
                <small>item2</small>
                <small>item2</small>
              </div>
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
  fontFamily: '"Rubik", "sans-serif"',
  h1: {
    fontSize: '6.25rem',
  },
  p: {
    fontSize: '1rem',
    marginTop: '10%',
    fontFamily: '"Nunito Sans", sans-serif',
    lineHeight: '1.5rem',
    marginBlockEnd: '1em',
    marginInlineStart: '0px',
    marginInlineEnd: '0px',
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

const ArticleItem = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});
