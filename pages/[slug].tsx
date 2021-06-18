import Header from '@/components/Header';
import { css } from '@emotion/react';
import AppLayout from '../components/AppLayout';
import ArticleList from '../components/ArticleList';
import Footer from '../components/Footer';

export default function BlogList() {
  return (
    <>
      <Header />
      <ArticleList />
      <div css={BlogListBlock}>
        <Footer />
      </div>
    </>
  );
}
const BlogListBlock = css({
  marginTop: '6rem',
});
