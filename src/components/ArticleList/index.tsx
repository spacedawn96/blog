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
              <h2>His unique</h2>
            </div>
            <div css={ArticleWrapper}>
              <div css={ArticleLeft}>
                <div css={ArticleItem}>
                  <small>While defining me</small>
                  <div>2019/2/3</div>
                </div>
                <div css={ArticleItem}>
                  <small>Imagineering. As a concept designer</small>
                  <div>2019/2/3</div>
                </div>
                <div css={ArticleItem}>
                  <small>
                    he has become a best-selling artist in Disney’s theme parks
                  </small>
                  <div>2019/2/3</div>
                </div>
                <div css={ArticleItem}>
                  <small>Upon graduating with honors from the Art Center College</small>
                  <div>2019/2/3</div>
                </div>
              </div>
              <div css={ArticleRight}>
                <div css={ArticleItem}>
                  <small>Upon graduating with honors from the Art Center College</small>
                  <div>2019/2/3</div>
                </div>
              </div>
            </div>
            <div>
              <h2>In addition</h2>
            </div>
            <div css={ArticleWrapper}>
              <div css={ArticleLeft}>
                <div css={ArticleItem}>
                  <small>While defining me</small>
                  <div>2019/2/3</div>
                </div>
                <div css={ArticleItem}>
                  <small>Imagineering. As a concept designer</small>
                  <div>2019/2/3</div>
                </div>
                <div css={ArticleItem}>
                  <small>
                    he has become a best-selling artist in Disney’s theme parks
                  </small>
                  <div>2019/2/3</div>
                </div>
                <div css={ArticleItem}>
                  <small>Upon graduating with honors from the Art Center College</small>
                  <div>2019/2/3</div>
                </div>
              </div>
              <div css={ArticleRight}>
                <div css={ArticleItem}>
                  <small>Upon graduating with honors from the Art Center College</small>
                  <div>2019/2/3</div>
                </div>{' '}
                <div css={ArticleItem}>
                  <small>Upon graduating with honors from the Art Center College</small>
                  <div>2019/2/3</div>
                </div>
              </div>
            </div>
            <div>
              <h2>In 2019</h2>
            </div>
            <div css={ArticleWrapper}>
              <div css={ArticleLeft}>
                <div css={ArticleItem}>
                  <small>While defining me</small>
                  <div>2019/2/3</div>
                </div>
                <div css={ArticleItem}>
                  <small>Imagineering. As a concept designer</small>
                  <div>2019/2/3</div>
                </div>
                <div css={ArticleItem}>
                  <small>
                    he has become a best-selling artist in Disney’s theme parks
                  </small>
                  <div>2019/2/3</div>
                </div>
                <div css={ArticleItem}>
                  <small>Upon graduating with honors from the Art Center College</small>
                  <div>2019/2/3</div>
                </div>
              </div>
              <div css={ArticleRight}>
                <div css={ArticleItem}>
                  <small>Upon graduating with honors from the Art Center College</small>
                  <div>2019/2/3</div>
                </div>{' '}
                <div css={ArticleItem}>
                  <small>Upon graduating with honors from the Art Center College</small>
                  <div>2019/2/3</div>
                </div>
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
  },
  h2: {
    fontSize: '5.25rem',
    // color: '#ff4400',
    padding: '3rem 0',
  },

  small: {
    fontSize: '2rem',
  },
});

const ArticleWrapper = css({
  display: 'flex',
  color: '#292929',

  small: {},
});

const ArticleLeft = css({
  width: '50%',
  // marginLeft: '10%',
  display: 'flex',
  flexDirection: 'column',
});

const ArticleRight = css({
  display: 'flex',
  flexDirection: 'column',
  width: '50%',
  marginLeft: '20%',
});

const ArticleItem = css({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '3rem 0',
  alignItems: 'center',
  small: {
    width: '70%',
    height: 'auto',
    wordWrap: 'break-word',
  },

  div: {},
});
