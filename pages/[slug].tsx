import Header from '@/components/Header';
import { css } from '@emotion/react';
import AppLayout from '../components/AppLayout';
import ArticleList from '../components/ArticleList';
import Footer from '../components/Footer';
const BlogListBlock = css({});

export default function BlogList() {
  return (
    <div css={BlogListBlock}>
      <Header />
      <ArticleList />
      <Footer />
    </div>
  );
}
