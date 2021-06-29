import Header from '@/components/Header';
import { css } from '@emotion/react';
import AppLayout from '../components/AppLayout';
import Footer from '../components/Footer';
import ColumnLayout from '../components/ColumnLayout';
import InfiniteScroll from 'react-infinite-scroller';
import { useContext } from 'react';
import {
  InitialStateItem,
  PostItem,
  PostSubTitleItem,
  SelectContext,
} from '@/lib/context';
import { useRouter } from 'next/router';
import { ListTrail } from '../components/Animation/Trail';
import Link from 'next/link';

export type ArticleHeaderProps = {
  i: PostSubTitleItem;
  isRight: boolean;
};

const ArticleListItem = (props: ArticleHeaderProps) => {
  return (
    <div>
      <ul>
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
      </ul>
    </div>
  );
};

export default function BlogList() {
  let {
    state: { filterList, activeFilter, currentState },
    dispatch,
  } = useContext(SelectContext);

  const router = useRouter();
  const ReplacePath = router.asPath.replace('/', '');

  const FilterArticle = filterList.filter(
    (i: InitialStateItem) => i.name.replace(/(\s*)/g, '') == ReplacePath,
  );

  return (
    <>
      <ColumnLayout
        leftNode={
          <div>
            <main>
              <InfiniteScroll
                pageStart={1}
                loadMore={0}
                hasMore={0}
                loader={
                  <div className={'loading'} key={0}>
                    {'gettingArticle'}
                  </div>
                }>
                <main css={ArticleContainer}>
                  <section css={ArticleQuery}>
                    <div css={ArticleHeaderWrapper}>
                      <h1 css={ArticleTitle}>{FilterArticle[0]?.name}</h1>
                      <p css={ArticleDescriable}>{FilterArticle[0]?.descriable}</p>
                    </div>
                    {FilterArticle[0]?.post?.map((ele: PostItem) => (
                      <div>
                        <h2>{ele.title}</h2>
                        <div css={ArticleWrapper}>
                          <div css={ArticleLeft}>
                            {ele.subtitle
                              .filter(
                                (ele: PostSubTitleItem) => ele.postTitle.charAt(0) == 'L',
                              )
                              .map((i: PostSubTitleItem) => (
                                <ArticleListItem i={i} isRight={false} key={i.id} />
                              ))}
                          </div>
                          <div css={ArticleRight}>
                            {ele.subtitle
                              .filter(
                                (ele: PostSubTitleItem) => ele.postTitle.charAt(0) == 'R',
                              )
                              .map((i: PostSubTitleItem) => (
                                <ArticleListItem i={i} isRight={true} key={i.id} />
                              ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </section>
                </main>
              </InfiniteScroll>
            </main>
          </div>
        }
        rightNode={<></>}
      />
      <div css={BlogListBlock}>
        <Footer />
      </div>
    </>
  );
}
const BlogListBlock = css({
  marginTop: '6rem',
});

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
    '@media (max-width: 1500px)': {
      fontSize: '2rem',
    },

    '@media (max-width: 1200px)': {
      fontSize: '2rem',
    },
  },

  span: {
    cursor: 'pointer',
    '@media (max-width: 576px)': {
      display: 'none',
    },
  },
});

const ArticleHeaderWrapper = css({
  display: 'flex',
  color: '#292929',
  marginTop: '2rem',
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

const ArticleTitle = css({
  width: '40%',

  display: 'flex',
  '@media (max-width: 1300px)': {
    width: '0%',
  },
});

const ArticleRight = css({
  display: 'flex',

  flexDirection: 'column',
  width: '40%',
  marginLeft: '15%',
  '@media (max-width: 1300px)': {
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

const ArticleWrapper = css({
  display: 'flex',
  color: '#292929',

  '@media (max-width: 1300px)': {
    display: 'flex',
    flexDirection: 'column',
  },
  small: {},
});

const ArticleLeft = css({
  width: '45%',

  // marginLeft: '10%',
  display: 'flex',
  flexDirection: 'column',
  '@media (max-width: 1300px)': {
    width: '100%',
  },
});

const PostTitle = css({
  textOverflow: 'ellipsis',
});

const ArticleItem = css({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '4rem 0',
  alignItems: 'center',
  '&:hover': {
    transition: 'color 0.5s ease',
    color: '#ff4400',
  },
  '@media (max-width: 1000px)': {
    padding: '2rem 0',
  },

  small: {
    width: '80%',
    height: 'auto',
    wordWrap: 'break-word',
    '@media (max-width: 576px)': {
      width: '100%',
    },
  },

  div: {},
});
