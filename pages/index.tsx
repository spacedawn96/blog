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
import { getAllPosts } from '@/lib/api';

export default function Home({ allPosts, jsonFile }) {
  const [open, set] = useState(true);

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
                <Categories filterList={jsonFile.posts?.filterList} />
              </InfiniteScroll>
            </main>
          </div>
        }
        rightNode={<> </>}
      />
      <div css={IndexBlock}>
        <Footer />
      </div>
      <div>hello</div>
    </>
  );
}

const IndexBlock = css({
  marginTop: '13rem',
});

export async function getStaticProps() {
  const content = await import(`../data/config.json`);
  const posts = await import(`../data/post.js`);
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'about',
  ]);

  return {
    props: {
      allPosts,
      jsonFile: {
        fileRelativePath: `data/config.json`,
        data: content.default,
        posts: posts.default,
      },
    },
  };
}
