import Link from 'next/link';

import { Layout, Bio, SEO } from '../components/Common';
import { getSortedPosts } from '../utils/posts';
import InfiniteScroll from 'react-infinite-scroller';
import Categories from '../components/Categories';
import { css } from '@emotion/react';
import Footer from '../components/Footer';
import { useContext, useState } from 'react';
import ColumnLayout from '../components/ColumnLayout';
import Fiber from '../components/Fiber';
import { InitialStateItem, SelectContext } from '../lib/context';

export default function Home({}) {
  const [open, set] = useState(true);
  let {
    state: { filterList, activeFilter, currentState },
    dispatch,
  } = useContext(SelectContext);

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
                <Categories filterList={filterList} />
              </InfiniteScroll>
            </main>
          </div>
        }
        rightNode={<> </>}
      />
      <div css={IndexBlock}>
        <Footer />
      </div>
    </>
  );
}

const IndexBlock = css({
  marginTop: '13rem',
  '@media (max-width: 1000px)': {
    position: 'absolute',
    bottom: '0',
    margin: '0 6% 0 6%',
  },
});
