import { css } from '@emotion/react';
import AppLayout from '../components/AppLayout';
import ArticleList from '../components/ArticleList';

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
