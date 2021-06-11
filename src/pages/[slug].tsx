import AppLayout from '@/components/AppLayout';
import ArticleList from '@/components/ArticleList';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { css } from '@emotion/react';

const BlogListBlock = css({});

export default function BlogList() {
  return (
    <div css={BlogListBlock}>
      <AppLayout>
        <ArticleList />
      </AppLayout>
    </div>
  );
}
