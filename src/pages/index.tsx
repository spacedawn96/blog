import ArticleList from '@/components/ArticleList';
import Categories from '@/components/Categories';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Previous from '@/components/Previous';
import { SelectContext } from '@/lib/context';
import { css } from '@emotion/react';
import Head from 'next/head';

import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';

export type HomeProps = {};

export default function Home({}: HomeProps) {
  return (
    <>
      <Header />
      <Categories />
      <Footer />
    </>
  );
}
