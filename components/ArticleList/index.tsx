import { SelectContext } from '../../lib/context';
import { css } from '@emotion/react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { Trail } from '../Animation/Trail';

export type ArticleListProps = {};

export type ArticleProps = {
  ele: any;
};

export type ArticleHeaderProps = {
  i: any;
  isRight: any;
};

function ArticleHeader(props: ArticleHeaderProps) {
  return (
    <div css={ArticleItem}>
      <Link href={`/post/${props.i.linkTo}`}>
        <small css={PostTitle}>
          {props.isRight == true
            ? props.i.postTitle.replace('R ', '')
            : props.i.postTitle.replace('L ', '')}
        </small>
      </Link>
      <span>{props.i.date}</span>
    </div>
  );
}

function Article(props: ArticleProps) {
  return (
    <div>
      <h2>{props.ele.title}</h2>
      <div css={ArticleWrapper}>
        <div css={ArticleLeft}>
          {props.ele.subtitle
            .filter((ele: any) => ele.postTitle.charAt(0) == 'L')
            .map((i: any) => (
              <ArticleHeader i={i} isRight={false} key={i.id} />
            ))}
        </div>
        <div css={ArticleRight}>
          {props.ele.subtitle
            .filter((ele: any) => ele.postTitle.charAt(0) == 'R')
            .map((i: any) => (
              <ArticleHeader i={i} isRight={true} key={i.id} />
            ))}
        </div>
      </div>
    </div>
  );
}

const ArticleBlock = css({});

export default function ArticleList({}: ArticleListProps) {
  const router = useRouter();
  const {
    state: { filterList, activeFilter, currentState },
    dispatch,
  } = useContext(SelectContext) as any;

  const ReplacePath = router.asPath.replace('/', '');

  const FilterArticle = filterList.filter(
    (i: any) => i.name.replace(/(\s*)/g, '') == ReplacePath,
  );

  return (
    <main css={ArticleContainer}>
      <section css={ArticleQuery}>
        <div css={ArticleHeaderWrapper}>
          <h1 css={ArticleTitle}>{FilterArticle[0]?.name}</h1>
          <p css={ArticleDescriable}>{FilterArticle[0]?.descriable}</p>
        </div>
        {FilterArticle[0]?.post?.map((ele: any) => (
          <Article ele={ele} key={ele.id} />
        ))}
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
  fontFamily: '"Rubik","sans-serif" ',

  margin: ' 0 6% 0 10%',

  '@media (max-width: 1000px)': {
    margin: ' 0 6% 0 6%',
  },

  h1: {
    fontSize: '6.25rem',
    '@media (max-width: 1000px)': {
      fontSize: '2.5rem',
    },
  },
  p: {
    fontSize: '1rem',
    fontFamily: '"Nunito Sans", sans-serif',
    lineHeight: '1.5rem',
    '@media (max-width: 1300px)': {
      marginTop: '3%',
      marginBottom: '0.5rem',
    },
  },
  h2: {
    fontSize: '4.25rem',
    // color: '#ff4400',
    padding: '5% 0',
    color: '#292929',
    '@media (max-width: 1000px)': {
      fontSize: '2rem',
    },
  },

  small: {
    fontSize: '3rem',
    cursor: 'pointer',
    '@media (max-width: 1600px)': {
      fontSize: '1.5rem',
    },

    '@media (max-width: 576px)': {
      fontSize: '1.3rem',
    },
  },

  span: {
    cursor: 'pointer',
    '@media (max-width: 576px)': {
      display: 'none',
    },
  },
});

const PostTitle = css({
  textOverflow: 'ellipsis',
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
const ArticleHeaderWrapper = css({
  display: 'flex',
  color: '#292929',
  flexDirection: 'column',
  '@media (max-width: 1000px)': {
    display: 'flex',
    flexDirection: 'column',
  },
  small: {},
});

const ArticleQuery = css({
  width: '100%',
  '@media (max-width: 1000px)': {
    marginBottom: '3rem',
  },
});

const ArticleLeft = css({
  width: '40%',

  // marginLeft: '10%',
  display: 'flex',
  flexDirection: 'column',
  '@media (max-width: 1000px)': {
    width: '100%',
  },
});
const ArticleTitle = css({
  width: '40%',

  display: 'flex',
  '@media (max-width: 1000px)': {
    width: '0%',
  },
});

const ArticleRight = css({
  display: 'flex',

  flexDirection: 'column',
  width: '40%',
  marginLeft: '20%',
  '@media (max-width: 1000px)': {
    width: '100%',
    marginLeft: '0%',
  },
});

const ArticleDescriable = css({
  display: 'flex',

  marginLeft: '60%',
  '@media (max-width: 1300px)': {
    marginLeft: '0%',
    width: '100%',
  },
});

const ArticleItem = css({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '4rem 0',
  alignItems: 'center',

  '@media (max-width: 1000px)': {
    padding: '2rem 0',
  },

  small: {
    width: '70%',
    height: 'auto',
    wordWrap: 'break-word',
    '@media (max-width: 576px)': {
      width: '100%',
    },
  },

  div: {},
});
