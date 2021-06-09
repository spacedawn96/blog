import ArticleList from '@/components/ArticleList';
import Categories from '@/components/Categories';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Previous from '@/components/Previous';
import { css } from '@emotion/react';
import Head from 'next/head';

export type HomeProps = {};

export default function Home({}: HomeProps) {
  return (
    <>
      <Head>
        <link href="themes/prism-ghcolors.css" rel="stylesheet" />
        <link href="/styles/Prism.css" rel="stylesheet" />
        <script src="/js/Prism.js"></script>
        <script src="prism.js"></script>
        <link rel="stylesheet" href="assets/style.css" />
        <link rel="stylesheet" href="themes/prism.css" data-noprefix />
      </Head>
      <Header />
      <Categories />
      <Footer />
    </>
  );
}
