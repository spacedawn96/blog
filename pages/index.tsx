import Link from 'next/link';

import { Layout, Bio, SEO } from '../components/Common';
import { getSortedPosts } from '../utils/posts';

import Header from '../components/Header';
import Categories from '../components/Categories';
import { css } from '@emotion/react';
import Footer from '../components/Footer';
import { useState } from 'react';
import AppLayout from '../components/AppLayout';

export default function Home({ posts }) {
  const [open, set] = useState(true);

  return (
    <>
      <Header />
      <Categories />
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
