import { SelectContext } from '@/lib/context';
import { css } from '@emotion/react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useContext } from 'react';

export type ArticleListProps = {};

export default function ArticleList({}: ArticleListProps) {
  const router = useRouter();
  const {
    state: { filterList, activeFilter, currentState },
    dispatch,
  } = useContext(SelectContext) as any;

  const ReplacePath = router.asPath.replace('/', '');
  const FilterArticle = filterList.filter((i: any) => i.name == ReplacePath);

  console.log(
    FilterArticle[0]?.post.javascript.map((ele: any) => ele.subtitle[0].postTitle),
  );

  return (
    <main css={ArticleContainer}>
      <section>
        <article>
          <div css={ArticleWrapper}>
            <h1 css={ArticleTitle}>{FilterArticle[0]?.name}</h1>
            <p css={ArticleMiddle}>{FilterArticle[0]?.descriable}</p>
          </div>

          {FilterArticle[0]?.post.javascript.map((ele: any) => (
            <>
              <div>
                <h2>{ele.title}</h2>
                <div css={ArticleWrapper}>
                  <div css={ArticleLeft}>
                    <div css={ArticleItem}>
                      <small> {ele.subtitle?.postTitle} </small>
                      <div>2019/2/3</div>
                    </div>
                  </div>
                  <div css={ArticleRight}>
                    <div css={ArticleItem}>
                      <small>
                        Upon graduating with honors from the Art Center College
                      </small>
                      <div>2019/2/3</div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </article>
      </section>
    </main>
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
    '@media (max-width: 1000px)': {
      fontSize: '3.5rem',
    },
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
    '@media (max-width: 1000px)': {
      fontSize: '1.5rem',
    },
  },
});

const ArticleWrapper = css({
  display: 'flex',
  color: '#292929',
  '@media (max-width: 1000px)': {
    display: 'flex',
    flexDirection: 'column',
  },
  small: {},
});

const ArticleLeft = css({
  width: '50%',
  // marginLeft: '10%',
  display: 'flex',
  flexDirection: 'column',
  '@media (max-width: 1000px)': {
    width: '100%',
  },
});
const ArticleTitle = css({
  width: '50%',
  // marginLeft: '10%',
  display: 'flex',
  flexDirection: 'column',
  '@media (max-width: 1000px)': {
    width: '0%',
  },
});

const ArticleRight = css({
  display: 'flex',
  flexDirection: 'column',
  width: '50%',
  marginLeft: '20%',
  '@media (max-width: 1000px)': {
    width: '100%',
    marginLeft: '0%',
  },
});

const ArticleMiddle = css({
  display: 'flex',
  flexDirection: 'column',
  width: '50%',
  marginLeft: '20%',
  '@media (max-width: 1000px)': {
    marginLeft: '0%',
    width: '100%',
  },
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
